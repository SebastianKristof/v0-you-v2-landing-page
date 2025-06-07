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
import { FullControlSection } from "@/components/sections/full-control-section"
import { ResultsSection } from "@/components/sections/results-section"
import { SiteHeader } from "@/components/layout/site-header"

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

  // Get ROI table rows safely
  const roiTableRows = t("roi.table.rows", { returnObjects: true }) || []

  // Get about credentials safely
  const aboutCredentials = t("about.credentials", { returnObjects: true }) || []

  // Get session features safely
  const sessionFeatures = t("session.features", { returnObjects: true }) || []

  // Get session work types safely
  const sessionWorkTypes = t("session.work.types", { returnObjects: true }) || []

  // Get FAQ items safely
  const faqItems = t("faq.items", { returnObjects: true }) || []

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Full Control Section */}
        <FullControlSection />

        {/* Is This For You Section */}
        <IsThisForYouSection />
        {/* Issues Section */}
        <IssuesSection />
        {/* Results Section */}
        <ResultsSection />

        {/* Client Stories Section */}
        <ClientStoriesSection />
        
        {/* What Makes You.v2 Different Section */}
        <WhatMakesDifferentSection />

        {/* ROI Comparison */}
        <RoiSection />

        {/* About the Creator */}
        <AboutSection />

        {/* FAQ Section */}
        <FaqSection />
        
        {/* Precision Section */}
        <PrecisionSection />
        
        {/* Global Pros Section */}
        <GlobalProsSection />

        {/* The Why Section */}
        <TheWhySection />

        {/* Pricing & CTA */}
        <PricingSection />

        {/* What Happens in a Session */}
        <SessionSection />

        {/* Client Story */}
        <ClientStorySection />

        {/* Why Work With Me Section */}
        <WhyMeSection />

        {/* Ready to Choose Your Path Section */}
        <ReadyToChooseSection />
      </main>

      <Footer />
    </div>
  )
}
