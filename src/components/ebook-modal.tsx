import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { useLanguage } from "@/contexts/language-context"
import { trackEvent } from "@/lib/analytics"
import Image from "next/image"

export function EbookModalTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span onClick={() => trackEvent({ action: "open_ebook_modal", category: "cta" })}>{children}</span>
      </DialogTrigger>
      <EbookModal open={open} setOpen={setOpen} />
    </Dialog>
  )
}

export function EbookModal({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [coverOpen, setCoverOpen] = useState(false)
  const [contentsOpen, setContentsOpen] = useState(false)

  async function handlePurchase() {
    setLoading(true)
    trackEvent({ action: "purchase_ebook_initiated", category: "cta" })
    try {
      const response = await fetch("https://drkristof.com/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "book" }),
      })
      
      if (!response.ok) {
        throw new Error("Failed to create checkout session")
      }
      
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url  // Redirects to Stripe
      } else {
        throw new Error("No checkout URL received")
      }
    } catch (error) {
      console.error("Purchase error:", error)
      toast({ 
        title: t("cta.downloadEbook"), 
        description: t("ebook.purchaseError") || "Something went wrong. Please try again." 
      })
      setLoading(false)
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("ebook.title")}</DialogTitle>
        <DialogDescription>{t("ebook.description")}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        {/* Book Cover Expandable */}
        <Dialog open={coverOpen} onOpenChange={setCoverOpen}>
          <DialogTrigger asChild>
            <button className="flex-shrink-0 p-0 border-0 bg-transparent" type="button">
              <Image
                src="/images/soul_code_book_cover.jpg"
                alt="Soul Code Book Cover"
                width={120}
                height={170}
                className="rounded shadow-md hover:scale-105 transition-transform"
                priority
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg flex flex-col items-center">
            <Image
              src="/images/soul_code_book_cover.jpg"
              alt="Soul Code Book Cover Large"
              width={350}
              height={500}
              className="rounded shadow-lg"
            />
          </DialogContent>
        </Dialog>
        {/* Contents Preview Expandable */}
        <Dialog open={contentsOpen} onOpenChange={setContentsOpen}>
          <DialogTrigger asChild>
            <button className="flex-shrink-0 p-0 border-0 bg-transparent" type="button">
              <Image
                src="/images/soul_code_book_contents.jpg"
                alt="Soul Code Book Contents Preview"
                width={120}
                height={170}
                className="rounded shadow-md hover:scale-105 transition-transform"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg flex flex-col items-center">
            <Image
              src="/images/soul_code_book_contents.jpg"
              alt="Soul Code Book Contents Large"
              width={350}
              height={500}
              className="rounded shadow-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="space-y-4">
        <div className="flex gap-2 justify-end">
          <Button onClick={handlePurchase} disabled={loading}>
            {loading ? (t("loading") || "Loading...") : t("ebook.submit")}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">{t("ebook.cancel") || "Cancel"}</Button>
          </DialogClose>
        </div>
      </div>
    </DialogContent>
  )
} 