"use client"

import { useEffect } from "react"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import HeroSection from "@/components/sections/hero-section"
import ProblemSection from "@/components/sections/problem-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import TimelineSection from "@/components/sections/timeline-section"
import ROISection from "@/components/sections/roi-section"
import AboutSection from "@/components/sections/about-section"
import SessionSection from "@/components/sections/session-section"
import ClientStorySection from "@/components/sections/client-story-section"
import FAQSection from "@/components/sections/faq-section"
import PricingSection from "@/components/sections/pricing-section"

export default function Home() {
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

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <TimelineSection />
        <ROISection />
        <AboutSection />
        <SessionSection />
        <ClientStorySection />
        <FAQSection />
        <PricingSection />
      </main>

      <SiteFooter />
    </div>
  )
}
