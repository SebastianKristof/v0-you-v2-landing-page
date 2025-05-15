"use client"

import Link from "next/link"
import { CalendarDays } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import MobileNav from "@/components/mobile-nav"
import { useLanguage } from "@/contexts/language-context"

export default function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold" style={{ color: "hsl(var(--executive-dark))" }}>
            You.v2
          </span>
          <span
            className="text-xs font-semibold uppercase px-2 py-0.5 rounded-md"
            style={{ backgroundColor: "hsl(var(--executive-gold))", color: "hsl(var(--executive-dark))" }}
          >
            Executive
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.timeline")}
          </Link>
          <Link href="#roi" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.roi")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.faq")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="executive-button hidden md:flex">
            <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("nav.bookCall")}
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
