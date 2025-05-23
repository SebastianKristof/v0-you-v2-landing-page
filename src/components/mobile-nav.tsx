"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, CalendarDays } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface MobileNavProps {
  className?: string
}

export default function MobileNav({ className = "" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className={`md:hidden ${className}`}>
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="p-2 text-foreground focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <Image src="/images/sk-logo.png" alt="You.v2 Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">You.v2</span>
              <span
                className="text-xs font-semibold uppercase px-2 py-0.5 rounded-md"
                style={{ backgroundColor: "hsl(var(--executive-gold))", color: "hsl(var(--executive-dark))" }}
              >
                Intensive
              </span>
            </div>
            <nav className="flex flex-col items-center gap-8 text-lg">
              <Link
                href="#how-it-works"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors"
              >
                {t("nav.howItWorks")}
              </Link>
              <Link href="#timeline" onClick={closeMenu} className="font-medium hover:text-primary transition-colors">
                {t("nav.timeline")}
              </Link>
              <Link href="#roi" onClick={closeMenu} className="font-medium hover:text-primary transition-colors">
                {t("nav.roi")}
              </Link>
              <Link href="#about" onClick={closeMenu} className="font-medium hover:text-primary transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="#faq" onClick={closeMenu} className="font-medium hover:text-primary transition-colors">
                {t("nav.faq")}
              </Link>
              <button className="executive-button mt-4 w-full max-w-xs">
                <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("nav.bookCall")}
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
