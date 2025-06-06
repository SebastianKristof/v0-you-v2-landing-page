import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/toast"
import { useLanguage } from "@/contexts/language-context"
import { trackEvent } from "@/lib/analytics"

export function BookingModalTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span onClick={() => trackEvent({ action: "open_booking_modal", category: "cta" })}>{children}</span>
      </DialogTrigger>
      <BookingModal open={open} setOpen={setOpen} />
    </Dialog>
  )
}

export function BookingModal({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    trackEvent({ action: "submit_booking_form", category: "cta" })
    const res = await fetch("https://formspree.io/f/xblyddja", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    setLoading(false)
    if (res.ok) {
      setSuccess(true)
      toast({ title: t("cta.bookStrategyCall"), description: t("cta.downloadEbookSuccess") })
    } else {
      toast({ title: t("cta.bookStrategyCall"), description: "Something went wrong. Please try again." })
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("cta.bookStrategyCall")}</DialogTitle>
        <DialogDescription>{t("hero.ctaMicrocopy")}</DialogDescription>
      </DialogHeader>
      {success ? (
        <div className="py-8 text-center text-green-600 font-semibold">
          {t("cta.bookStrategyCallSuccess") || "Thank you! Your request has been received. I'll be in touch soon to schedule your strategy call."}
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="hidden" name="source" value="booking" />
          <Input name="name" type="text" placeholder={t("booking.name")} required autoComplete="name" />
          <Input name="email" type="email" placeholder={t("booking.email")} required autoComplete="email" />
          <Textarea name="message" placeholder={t("booking.messagePlaceholder")} rows={3} required />
          <div className="flex gap-2 justify-end">
            <Button type="submit" disabled={loading}>{loading ? t("loading") : t("cta.bookStrategyCall")}</Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">{t("ebook.cancel") || "Cancel"}</Button>
            </DialogClose>
          </div>
        </form>
      )}
    </DialogContent>
  )
} 