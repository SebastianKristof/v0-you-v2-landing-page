"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Check, Clock, Layers, MessageCircle, Award } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import ScrollReveal from "@/components/scroll-reveal"
import FAQAccordion from "@/components/faq-accordion"
import MobileNav from "@/components/mobile-nav"
import ImageModal from "@/components/image-modal"
import { useLanguage } from "@/contexts/language-context"
import { HeroSection } from "@/components/sections/hero-section"
import { QuickRoiSection } from "@/components/sections/quick-roi-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { RoiSection } from "@/components/sections/roi-section"
import { AboutSection } from "@/components/sections/about-section"
import { SessionSection } from "@/components/sections/session-section"
import { WhatMakesDifferentSection } from "@/components/sections/what-makes-different-section"
import { ClientStorySection } from "@/components/sections/client-story-section"
import { FaqSection } from "@/components/sections/faq-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { GlobalHighPerformersSection } from "@/components/sections/global-high-performers-section"

export default function Home() {
  const { t } = useLanguage()

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  // Get problem cards safely
  const problemCards = t("problem.cards", { returnObjects: true }) || []

  // Get timeline steps safely
  const timelineSteps = t("timeline.steps", { returnObjects: true }) || []

  // Get ROI table rows safely
  const roiTableRows = t("roi.table.rows", { returnObjects: true }) || []

  // Get about credentials safely
  const aboutCredentials = t("about.credentials", { returnObjects: true }) || []

  // Get session features safely
  const sessionFeatures = t("session.features", { returnObjects: true }) || []

  // Get session work types safely
  const sessionWorkTypes = t("session.work.types", { returnObjects: true }) || []

  // Get pricing features safely
  const pricingFeatures = t("pricing.includes.features", { returnObjects: true }) || []

  // Get FAQ items safely
  const faqItems = t("faq.items", { returnObjects: true }) || []

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Quick ROI preview */}
        {/* Quick ROI is now part of HeroSection */}

        {/* Problem Section */}
        <ProblemSection />

        {/* What Makes You.v2 Different Section */}
        <WhatMakesDifferentSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* ROI Comparison */}
        <RoiSection />

        {/* About the Creator */}
        <AboutSection />

        {/* Global High Performers Section */}
        <GlobalHighPerformersSection />

        {/* What Happens in a Session */}
        <SessionSection />

        {/* Client Story */}
        <ClientStorySection />

        {/* Pricing & CTA */}
        <PricingSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      <footer className="w-full border-t py-6 md:py-8 bg-white">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg">You.v2</span>
              <span
                className="text-xs font-semibold uppercase px-1.5 py-0.5 rounded-md"
                style={{ backgroundColor: "hsl(var(--executive-gold))", color: "hsl(var(--executive-dark))" }}
              >
                Intensive
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.terms")}
              </Link>
              <Link
                href="#contact"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.contact")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
