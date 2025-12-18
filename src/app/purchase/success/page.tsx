"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function PurchaseSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order_id")

  useEffect(() => {
    if (orderId) {
      // Redirect to other site's success page
      window.location.href = `https://drkristof.com/purchase/success?order_id=${orderId}`
    } else {
      // If no order_id, redirect to home
      window.location.href = "/"
    }
  }, [orderId])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg">Redirecting...</p>
      </div>
    </div>
  )
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    }>
      <PurchaseSuccessContent />
    </Suspense>
  )
}
