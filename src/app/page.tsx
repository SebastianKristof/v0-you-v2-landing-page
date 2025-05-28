"use client"

import { useEffect, useState } from "react"
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
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { RoiSection } from "@/components/sections/roi-section"
import { AboutSection } from "@/components/sections/about-section"
import { SessionSection } from "@/components/sections/session-section"
import { WhatMakesDifferentSection } from "@/components/sections/what-makes-different-section"
import { ClientStorySection } from "@/components/sections/client-story-section"
import { FaqSection } from "@/components/sections/faq-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { GlobalProsSection } from "@/components/sections/global-pros-section"
import { TheWhySection } from "@/components/sections/the-why-section"
import { IsThisForYouSection } from "@/components/sections/is-this-for-you-section"
import { ClientStoriesSection } from "@/components/sections/client-stories-section"
import { IssuesSection } from "@/components/sections/issues-section"
import { PrecisionSection } from "@/components/sections/precision-section"
import { WhyMeSection } from "@/components/sections/why-me-section"
import { ReadyToChooseSection } from "@/components/sections/ready-to-choose-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const { t, language } = useLanguage()
  const [showMore, setShowMore] = useState(false)

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
            <Link href="#is-this-for-you" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.isThisForYou")}
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.packages")}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.faq")}
            </Link>
            {/* More Dropdown */}
            <div className="relative">
              <button
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => setShowMore((v: boolean) => !v)}
                onBlur={() => setTimeout(() => setShowMore(false), 150)}
                type="button"
              >
                {t("nav.more")}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {showMore && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 py-2">
                  <Link href="#the-why" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.theWhy")}</Link>
                  <Link href="#client-stories" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.clientStories")}</Link>
                  <Link href="#what-makes-different" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.whatMakesDifferent")}</Link>
                  <Link href="#issues" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.issues")}</Link>
                  <Link href="#precision" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.precision")}</Link>
                  <Link href="#roi" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.roi")}</Link>
                  <Link href="#about" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.about")}</Link>
                  <Link href="#global-pros" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.globalPros")}</Link>
                  <Link href="#session" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.session")}</Link>
                  <Link href="#pricing" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.packages")}</Link>
                  <Link href="#why-me" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.whyMe")}</Link>
                  <Link href="#faq" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.faq")}</Link>
                  <Link href="#ready-to-choose" className="block px-4 py-2 text-sm hover:bg-muted">{t("nav.readyToChoose")}</Link>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="executive-button hidden md:flex items-center justify-center gap-2">
              <CalendarDays className="h-4 w-4" /> {t("nav.bookCall")}
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

        {/* The Why Section */}
        <TheWhySection />

        {/* Is This For You Section */}
        <IsThisForYouSection />

        {/* Client Stories Section */}
        <ClientStoriesSection />

        {/* What Makes You.v2 Different Section */}
        <WhatMakesDifferentSection />

        {/* Issues Section */}
        <IssuesSection />

        {/* Precision Section */}
        <PrecisionSection />

        {/* Timeline Section */}
        {/* <TimelineSection /> */}

        {/* ROI Comparison */}
        <RoiSection />

        {/* About the Creator */}
        <AboutSection />

        {/* Global Pros Section */}
        <GlobalProsSection />

        {/* What Happens in a Session */}
        <SessionSection />

        {/* Client Story */}
        <ClientStorySection />

        {/* Pricing & CTA */}
        <PricingSection />

        {/* Why Work With Me Section */}
        <WhyMeSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Ready to Choose Your Path Section */}
        <ReadyToChooseSection />
      </main>

      <Footer />
    </div>
  )
}
