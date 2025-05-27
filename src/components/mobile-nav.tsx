"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, CalendarDays } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

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
        <div className="fixed inset-0 z-50 bg-white/90 overflow-y-auto">
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
            <nav className="flex flex-col items-center gap-6 text-lg w-full">
              <Link href="#how-it-works" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">How It Works</Link>
              <Link href="#the-why" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">The Why</Link>
              <Link href="#is-this-for-you" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Is This For You?</Link>
              <Link href="#client-stories" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Client Stories</Link>
              <Link href="#what-makes-different" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">What Makes You.v2 Different?</Link>
              <Link href="#issues" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Issues We Can Address</Link>
              <Link href="#precision" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Precision</Link>
              <Link href="#pricing" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Packages</Link>
              <Link href="#why-me" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Why Work With Me</Link>
              <Link href="#about" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">About</Link>
              <Link href="#global-pros" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Global Pros</Link>
              <Link href="#session" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">What Happens in a Session?</Link>
              <Link href="#client-story" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Client Story</Link>
              <Link href="#faq" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">FAQ</Link>
              <Link href="#ready-to-choose" onClick={closeMenu} className="font-medium hover:text-primary transition-colors w-full text-center">Ready to Choose Your Path?</Link>
              <button className="executive-button mt-4 w-full max-w-xs">
                <CalendarDays className="mr-2 h-4 w-4 inline" /> Book Call
              </button>
            </nav>
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
