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

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* What Makes You.v2 Different Section */}
        <WhatMakesDifferentSection />

        {/* Quick ROI preview */}
        {/* Quick ROI is now part of HeroSection */}

        {/* Problem Section */}
        <ProblemSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* ROI Comparison */}
        <RoiSection />

        {/* About the Creator */}
        <AboutSection />

        {/* What Happens in a Session */}
        <SessionSection />

        {/* Client Story */}
        <section
          className="w-full py-10 md:py-16 lg:py-24 relative overflow-hidden"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          {/* Background gradient overlay only (image removed for now) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent opacity-10"></div>

          <div className="section-container relative z-10">
            <ScrollReveal className="mx-auto max-w-[800px]">
              <div className="executive-card bg-card/90 backdrop-blur-sm">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold">{t("clientStory.title")}</h2>
                  <blockquote className="text-base md:text-lg italic">{t("clientStory.quote")}</blockquote>
                  <p className="text-right text-sm md:text-base font-medium">{t("clientStory.author")}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-10 md:py-16 lg:py-24 bg-white">
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="section-title">{t("faq.title")}</h2>
              </div>
              <FAQAccordion items={Array.isArray(faqItems) ? faqItems : []} />
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section
          className="w-full py-10 md:py-16 lg:py-24"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="executive-card bg-card/80 backdrop-blur-sm">
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--executive-blue))" }}>
                      {t("pricing.price")}
                    </h2>
                    <p className="text-base md:text-lg">{t("pricing.description")}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-medium text-center">{t("pricing.includes.title")}</h3>
                    <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-3">
                      {Array.isArray(pricingFeatures) &&
                        pricingFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center p-3 md:p-4 rounded-lg"
                            style={{ backgroundColor: "hsla(var(--executive-blue), 0.05)" }}
                          >
                            <Check
                              className="h-5 w-5 md:h-6 md:w-6 mb-2"
                              style={{ color: "hsl(var(--executive-blue))" }}
                            />
                            <p className="text-sm md:text-base font-medium">{feature}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-base md:text-lg italic">{t("pricing.quote")}</p>
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center">
                    <button className="executive-button">
                      <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("pricing.cta.primary")}
                    </button>
                    <button
                      className="rounded-full py-3 px-4 md:px-6 font-medium transition-all duration-300 text-center w-full md:w-auto"
                      style={{
                        borderColor: "hsl(var(--executive-blue))",
                        color: "hsl(var(--executive-blue))",
                        border: "1px solid",
                      }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4 inline" /> {t("pricing.cta.secondary")}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
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
                Executive
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
