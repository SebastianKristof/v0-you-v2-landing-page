# E2E Tests with Playwright

This directory contains end-to-end tests for the book purchase flow using Playwright.

## Running Tests

### Run all tests
```bash
npm run test:e2e
```

### Run tests in UI mode (interactive)
```bash
npm run test:e2e:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:e2e:headed
```

### Debug tests
```bash
npm run test:e2e:debug
```

### Run specific test file
```bash
npx playwright test e2e/book-purchase.spec.ts
```

## Test Coverage

The `book-purchase.spec.ts` file tests:

1. **Modal Opening**: Verifies the ebook modal opens when clicking the purchase button
2. **Book Preview**: Checks that book cover and contents preview images are visible
3. **Checkout Initiation**: Tests that clicking purchase initiates the checkout flow
4. **Error Handling**: Verifies API errors are handled gracefully with toast notifications
5. **Success Page**: Tests redirect behavior for success page with and without order_id
6. **Language Support**: Verifies the flow works in both English and Russian

## Configuration

Tests are configured in `playwright.config.ts`:
- Base URL: `http://localhost:3000` (or set `PLAYWRIGHT_TEST_BASE_URL` env var)
- Automatically starts dev server before tests
- Tests run in Chromium, Firefox, and WebKit by default

## Mocking

Some tests mock the API endpoint (`https://drkristof.com/api/create-checkout`) to:
- Avoid actual Stripe redirects during testing
- Test error scenarios
- Speed up test execution

## Notes

- Tests require the dev server to be running (handled automatically)
- Some tests may need adjustment based on actual UI implementation
- Toast selectors may need updates if toast implementation changes
