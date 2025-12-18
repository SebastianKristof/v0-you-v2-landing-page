# Book Purchase Flow - Detailed Implementation Guide

This document describes in detail how buying a book is implemented on this website, so it can be explained to an assistant for hooking it up to another website.

## Overview

The system uses **Stripe Checkout** for payments, **Resend** for email delivery, and an **in-memory order store** (currently a Map). The flow is:

**User initiates purchase → Create Stripe session → User pays on Stripe → Webhook processes order → Email sent → User downloads**

---

## Step-by-Step Implementation

### 1. User Interaction (Frontend)

**Component:** `components/book-download-dialog.tsx`

When the user clicks "Purchase":
- Makes a POST request to `/api/create-checkout` with `{ productId: "book" }`
- If successful, redirects user to the Stripe Checkout URL
- Shows loading state during the request

```typescript
const handlePurchase = async () => {
  setIsLoading(true)
  const response = await fetch("/api/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId: "book" }),
  })
  const data = await response.json()
  if (data.url) {
    window.location.href = data.url  // Redirects to Stripe
  }
}
```

---

### 2. Create Checkout Session (API)

**Endpoint:** `app/api/create-checkout/route.ts` (POST)

**What it does:**
1. Validates `STRIPE_SECRET_KEY` environment variable (enforces live keys in production)
2. Parses `productId` from request body
3. Looks up product details from `lib/products.ts`
4. Generates unique `orderId`: `order_${timestamp}_${random}`
5. Creates Stripe Checkout Session with:
   - Payment method: card only
   - Line item: product name, description, price (in cents)
   - Mode: one-time payment
   - Success URL: `/purchase/success?order_id={orderId}`
   - Cancel URL: home page with `?canceled=true`
   - Metadata: stores `productId` and `orderId` for later retrieval
6. Returns the Stripe checkout URL as JSON: `{ url: "https://checkout.stripe.com/..." }`

**Important details:**
- Price is stored in cents (e.g., 900 = $9.00)
- Email is collected by Stripe Checkout (not sent in API call)
- Order is NOT stored yet - only stored after payment succeeds via webhook

---

### 3. Payment on Stripe

User completes payment on Stripe's hosted checkout page. After successful payment, Stripe redirects user back to:
```
https://your-site.com/purchase/success?order_id=order_1234567890_abc123
```

---

### 4. Webhook Processing (Background)

**Endpoint:** `app/api/webhooks/stripe/route.ts` (POST)

Stripe automatically sends a webhook event (`checkout.session.completed`) to your server:

1. **Verifies webhook signature** using `STRIPE_WEBHOOK_SECRET` to ensure request is from Stripe
2. **Extracts data from session:**
   - `orderId` (from metadata)
   - `productId` (from metadata)
   - `customerEmail` (from customer_details)
3. **Stores order** in `lib/orders-store.ts` (in-memory Map):
   ```typescript
   orders.set(orderId, {
     productId,
     purchasedAt: Date.now()
   })
   ```
4. **Sends email** via internal API call to `/api/send-email`

**Webhook Configuration:**
- Must be configured in Stripe Dashboard
- URL: `https://your-site.com/api/webhooks/stripe`
- Event: `checkout.session.completed`
- Signing secret must be stored as `STRIPE_WEBHOOK_SECRET` env var

---

### 5. Email Delivery

**Endpoint:** `app/api/send-email/route.ts` (POST)

Called internally by webhook handler:

1. Gets product details from `lib/products.ts`
2. Builds download URL: `{siteUrl}/api/download/{orderId}`
3. Sends email via Resend with:
   - From: `Dr. Sebastian Kristof <info@drkristof.com>`
   - Subject: "Your {Product Name} Download"
   - HTML template with download button
   - Note: Link valid for 24 hours (can be used multiple times during this period)

Email includes a direct download link that the user can click.

---

### 6. Success Page

**Page:** `app/purchase/success/page.tsx`

- Displays success message
- Extracts `order_id` from URL query params
- Provides immediate download button (even before email arrives)
- Download link: `/api/download/{orderId}`

---

### 7. Download Endpoint

**Endpoint:** `app/api/download/[orderId]/route.ts` (GET)

1. **Validates order:**
   - Checks if order exists in store
   - Validates order is less than 24 hours old
2. **Gets product details** from order
3. **Serves file** from `public/{product.filePath}`
4. **Returns file** with appropriate headers:
   - `Content-Type`: application/pdf
   - `Content-Disposition`: attachment with filename

**Note:** 
- Link is **NOT one-time use** - it can be accessed multiple times within the 24-hour window
- Has demo mode that auto-creates orders if they don't exist - this should be removed for production

---

## Data Structures

### Product Definition (`lib/products.ts`)
```typescript
{
  id: "book",
  name: "The Soul Code",
  description: "Rewriting the patterns that run your life",
  price: 900,  // $9.00 in cents
  priceDisplay: "$9",
  filePath: "/book/sebastian-kristof-the-soul-code.pdf"
}
```

### Order Store (`lib/orders-store.ts`)
Simple in-memory Map:
```typescript
Map<orderId, {
  productId: string,
  purchasedAt: number  // timestamp
}>
```

---

## Environment Variables

**Required:**
- `STRIPE_SECRET_KEY` - Stripe secret API key (`sk_live_...` in production)
- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret (`whsec_...`)
- `RESEND_API_KEY` - Resend API key for emails
- `NEXT_PUBLIC_SITE_URL` - Base URL (e.g., `https://drkristof.com`)

---

## Security Features

1. **Stripe key validation** - Prevents using test keys in production
2. **Webhook signature verification** - Ensures webhook requests are actually from Stripe
3. **Time-limited access** - Download links are valid for 24 hours (not one-time use - can be downloaded multiple times within the window)
4. **Order verification** - Downloads only work for valid, existing orders

---

## Integration Points for Your Other Website

To hook this up to another website, your assistant needs:

1. **Frontend trigger:**
   - Button/component that calls `POST /api/create-checkout` with `{ productId: "book" }`
   - Redirect user to returned URL

2. **API endpoints:**
   - `POST /api/create-checkout` - Creates Stripe session
   - `POST /api/webhooks/stripe` - Handles Stripe webhooks
   - `POST /api/send-email` - Sends purchase confirmation email
   - `GET /api/download/[orderId]` - Serves the file

3. **Dependencies:**
   - `stripe` package
   - `resend` package
   - Product configuration file
   - Order storage (currently in-memory Map - consider database for production)

4. **Stripe setup:**
   - Create Stripe account
   - Get API keys
   - Configure webhook endpoint
   - Add webhook signing secret

5. **File storage:**
   - Place PDF in `public/book/` directory
   - Or modify download endpoint to serve from S3/CDN

---

## Important Notes

- **Current limitation:** Orders are stored in memory (Map), so they're lost on server restart. Consider moving to a database (PostgreSQL, Redis, etc.) for production.
- **Email failures don't block order completion** - webhook still stores the order even if email fails.
- **Demo mode** in download endpoint auto-creates orders - remove this for production.
- **Stripe Checkout handles PCI compliance** - no card data touches your server.
