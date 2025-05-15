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
import WhatMakesDifferent from "./components/what-makes-different"

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
        <section className="w-full py-10 md:py-16 lg:py-24 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 mx-auto relative">
            {/* Image positioned absolutely on the right for larger screens */}
            <div className="hidden md:block absolute top-0 right-0 w-[45%] h-full">
              <div className="relative w-full h-full flex items-start justify-end">
                <div className="relative w-[90%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/sebastian-portrait.png"
                    alt="Dr. Sebastian Kristof"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Mobile image (shown only on small screens) */}
            <div className="md:hidden w-full mb-8">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/sebastian-portrait.png"
                  alt="Dr. Sebastian Kristof"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content with padding to make room for the image */}
            <div className="md:max-w-[60%] space-y-8">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text">
                  {t("hero.title")}
                </h1>
                <div className="h-1 w-12 bg-executive-gold rounded mb-2" />
                <p className="text-xl md:text-2xl font-semibold text-executive-blue">
                  {t("hero.subtitle")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground">{t("hero.description1")}</p>
                <p className="text-base md:text-lg text-muted-foreground">{t("hero.description2")}</p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row mt-4">
                <button className="executive-button">
                  <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("nav.bookCall")}
                </button>
                <a href="#how-it-works" className="executive-button-outline border border-executive-blue text-executive-blue font-semibold rounded-full py-3 px-4 md:px-6 text-center transition-colors hover:bg-executive-blue/10">
                  {t("nav.howItWorks")}
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{t("hero.ctaMicrocopy")}</p>
            </div>
          </div>

          {/* Quick ROI preview */}
          <ScrollReveal className="mt-8 md:mt-12 overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x text-sm md:text-base">
              <div className="p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.therapy.title")}</p>
                <p className="font-medium">{t("quickRoi.therapy.duration")}</p>
                <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.therapy.comment")}</p>
              </div>
              <div className="p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.coaching.title")}</p>
                <p className="font-medium">{t("quickRoi.coaching.duration")}</p>
                <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.coaching.comment")}</p>
              </div>
              <div className="p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.medication.title")}</p>
                <p className="font-medium">{t("quickRoi.medication.duration")}</p>
                <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.medication.comment")}</p>
              </div>
              <div className="p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.selfHelp.title")}</p>
                <p className="font-medium">{t("quickRoi.selfHelp.duration")}</p>
                <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.selfHelp.comment")}</p>
              </div>
              <div className="p-3 md:p-4 text-center" style={{ backgroundColor: "hsla(var(--executive-blue), 0.05)" }}>
                <p className="text-xs md:text-sm font-medium" style={{ color: "hsl(var(--executive-blue))" }}>
                  {t("quickRoi.youv2.title")}
                </p>
                <p className="font-bold">{t("quickRoi.youv2.duration")}</p>
                <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.youv2.comment")}</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* What Makes You.v2 Different Section */}
        <WhatMakesDifferent />

        {/* Problem Section */}
        <section
          className="w-full py-10 md:py-16 lg:py-24"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <p className="text-base md:text-lg lg:text-xl italic text-muted-foreground">{t("problem.quote")}</p>
                <h2 className="section-title">{t("problem.title")}</h2>
              </div>
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                {Array.isArray(problemCards) &&
                  problemCards.map((text, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <div className="executive-card h-full">
                        <p className="text-sm md:text-base text-muted-foreground">{text}</p>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
              <div className="space-y-4">
                <p className="text-base md:text-lg">{t("problem.conclusion1")}</p>
                <p className="text-base md:text-lg">{t("problem.conclusion2")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-10 md:py-16 lg:py-24 bg-white">
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="section-title text-center">{t("howItWorks.title")}</h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg">{t("howItWorks.description1")}</p>
                <p className="text-base md:text-lg">{t("howItWorks.description2")}</p>
                <ScrollReveal
                  className="relative p-4 md:p-6 rounded-xl border"
                  style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
                >
                  <p className="text-base md:text-lg">{t("howItWorks.callout")}</p>
                  <div
                    className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 h-8 md:h-12 w-1 rounded-full"
                    style={{ backgroundColor: "hsl(var(--executive-blue))" }}
                  ></div>
                </ScrollReveal>
                <p className="text-base md:text-lg">{t("howItWorks.description3")}</p>
              </div>
              <div className="text-center">
                <p className="text-base md:text-lg font-medium italic" style={{ color: "hsl(var(--executive-blue))" }}>
                  {t("howItWorks.tagline")}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative mx-auto w-full max-w-[300px] md:max-w-[400px]">
                    <Image
                      src="/images/beliefs-pyramid.png"
                      alt="Transformation Pyramid"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-base md:text-lg italic">{t("howItWorks.quote")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="timeline"
          className="w-full py-10 md:py-16 lg:py-24"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="section-title">{t("timeline.title")}</h2>
              </div>

              {/* Vertical timeline for all screen sizes */}
              <div className="space-y-6 max-w-2xl mx-auto">
                {Array.isArray(timelineSteps) &&
                  timelineSteps.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <div
                        className="flex items-start gap-3 md:gap-4 pl-3 md:pl-4 border-l-2"
                        style={{ borderColor: "hsla(var(--executive-blue), 0.2)" }}
                      >
                        <div
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center -ml-5 md:-ml-6 flex-shrink-0"
                          style={{
                            backgroundColor: "hsla(var(--executive-blue), 0.15)",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          <span className="text-base md:text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <p className="font-medium text-base md:text-lg">{item.day}</p>
                          <p className="font-medium text-sm md:text-base text-muted-foreground">{item.text}</p>
                          {item.desc && <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ROI Comparison */}
        <section id="roi" className="w-full py-10 md:py-16 lg:py-24 bg-white">
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="section-title">{t("roi.title")}</h2>
              </div>
              <div className="overflow-hidden rounded-xl border shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.approach")}</th>
                        <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.depth")}</th>
                        <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.time")}</th>
                        <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.cost")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(roiTableRows) &&
                        roiTableRows.map((row, index) => (
                          <tr
                            key={index}
                            className={`border-b ${index === 4 ? "font-medium" : ""}`}
                            style={index === 4 ? { backgroundColor: "hsla(var(--executive-blue), 0.05)" } : {}}
                          >
                            <td className="py-3 px-2 md:py-4 md:px-4">{row.approach}</td>
                            <td className="py-3 px-2 md:py-4 md:px-4">{row.depth}</td>
                            <td className={`py-3 px-2 md:py-4 md:px-4 ${index === 4 ? "font-bold" : ""}`}>
                              {row.time}
                            </td>
                            <td className={`py-3 px-2 md:py-4 md:px-4 ${index === 4 ? "font-bold" : ""}`}>
                              {row.cost}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About the Creator */}
        <section
          id="about"
          className="w-full py-10 md:py-16 lg:py-24"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="section-title">{t("about.title")}</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="/images/sebastian-office.png"
                      alt="Dr. Sebastian Kristof"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">{t("about.name")}</h3>
                  <ul className="space-y-2">
                    {Array.isArray(aboutCredentials) &&
                      aboutCredentials.map((credential, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                            style={{ color: "hsl(var(--executive-blue))" }}
                          />
                          <span className="text-sm md:text-base">{credential}</span>
                        </li>
                      ))}
                  </ul>
                  <blockquote
                    className="pl-4 border-l-2 italic text-sm md:text-base"
                    style={{ borderColor: "hsl(var(--executive-blue))" }}
                  >
                    {t("about.quote")}
                  </blockquote>
                </div>
              </div>

              {/* Certificates gallery */}
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4 text-center">Credentials & Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Yale Certificate */}
                  <div className="executive-card p-0 h-40 overflow-hidden">
                    <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                      <Award className="h-12 w-12 text-gray-400" />
                      <div className="absolute inset-0">
                        <ImageModal
                          src="/images/postdoc-yale.png"
                          alt="Yale University Postdoctoral Fellowship Certificate"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                        <p className="text-sm font-medium">Yale Medical Informatics Fellowship</p>
                      </div>
                    </div>
                  </div>

                  {/* American Academy of Hypnosis Certificate */}
                  <div className="executive-card p-0 h-40 overflow-hidden">
                    <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                      <Award className="h-12 w-12 text-gray-400" />
                      <div className="absolute inset-0">
                        <ImageModal
                          src="/images/cert_hypnotherapy_1.jpg"
                          alt="Certified Master Hypnotherapist Certificate"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                        <p className="text-sm font-medium">Certified Master Hypnotherapist</p>
                      </div>
                    </div>
                  </div>

                  {/* Mike Mandel Hypnosis Certificate */}
                  <div className="executive-card p-0 h-40 overflow-hidden">
                    <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                      <Award className="h-12 w-12 text-gray-400" />
                      <div className="absolute inset-0">
                        <ImageModal src="/images/cert_sk_mikemandel.jpg" alt="Neo-Ericksonian Hypnosis Certificate" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                        <p className="text-sm font-medium">Neo-Ericksonian Hypnosis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What Happens in a Session */}
        <section className="w-full py-10 md:py-16 lg:py-24 bg-white">
          <div className="section-container">
            <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="section-title">{t("session.title")}</h2>
              </div>
              <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                {Array.isArray(sessionFeatures) &&
                  sessionFeatures.map((feature, index) => (
                    <ScrollReveal key={index} delay={(index + 1) * 100}>
                      <div className="executive-card h-full">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="feature-icon">
                            {index === 0 && <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
                            {index === 1 && <Clock className="h-5 w-5 md:h-6 md:w-6" />}
                            {index === 2 && <Layers className="h-5 w-5 md:h-6 md:w-6" />}
                          </div>
                          <h3 className="text-lg md:text-xl font-medium">{feature.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>
              <div className="space-y-4">
                <p className="text-base md:text-lg">{t("session.work.intro")}</p>
                <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                  {Array.isArray(sessionWorkTypes) &&
                    sessionWorkTypes.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check
                          className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                          style={{ color: "hsl(var(--executive-blue))" }}
                        />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                </div>
                <p className="text-base md:text-lg">{t("session.work.result")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Client Story */}
        <section
          className="w-full py-10 md:py-16 lg:py-24 relative overflow-hidden"
          style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
        >
          {/* Background image */}
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/sebastian-city.png" alt="Urban background" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
          </div>

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
