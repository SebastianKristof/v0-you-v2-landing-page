"use client"

import ScrollReveal from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export default function ProblemSection() {
  const { t } = useLanguage()

  // Get problem cards safely
  const problemCards = t("problem.cards", { returnObjects: true }) || []

  return (
    <section className="w-full py-10 md:py-16 lg:py-24" style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}>
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
  )
}
