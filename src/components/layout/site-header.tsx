import Link from "next/link";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import LanguageSwitcher from "@/components/language-switcher";
import MobileNav from "@/components/mobile-nav";
import { useLanguage } from "@/contexts/language-context";
import { BookingModalTrigger } from "@/components/booking-modal"

export function SiteHeader() {
  const { t } = useLanguage();
  const [showMore, setShowMore] = useState(false);
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
            Intensive
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#full-control" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.fullControl")}
          </Link>
          <Link href="#is-this-for-you" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.isThisForYou")}
          </Link>
          <Link href="#issues" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.issues")}
          </Link>
          <Link href="#results" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.results")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.paths")}
          </Link>
          {/* More Dropdown */}
          <div className="relative">
            <button
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              aria-label="More"
              onClick={() => setShowMore((v) => !v)}
              onBlur={() => setTimeout(() => setShowMore(false), 150)}
              type="button"
            >
              {t("nav.more")}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {showMore && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 py-2">
                <Link href="#client-stories" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.clientStories")}</Link>
                <Link href="#what-makes-different" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.whatMakesDifferent")}</Link>
                <Link href="#roi" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.roi")}</Link>
                <Link href="#faq" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.faq")}</Link>
                <Link href="#precision" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.precision")}</Link>
                <Link href="#global-pros" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.globalPros")}</Link>
                <Link href="#the-why" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.theWhy")}</Link>
                <Link href="#session" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.session")}</Link>
                <Link href="#why-me" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.whyMe")}</Link>
                <Link href="#ready-to-choose" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.readyToChoose")}</Link>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <BookingModalTrigger>
            <button className="executive-button hidden md:flex">
              <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("cta.bookStrategyCall")}
            </button>
          </BookingModalTrigger>
          <MobileNav />
        </div>
      </div>
    </header>
  );
} 