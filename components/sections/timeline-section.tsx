"use client"

import ScrollReveal from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export default function TimelineSection() {
  const { t } = useLanguage()

  // Get timeline steps safely
  const timelineSteps = t("timeline.steps", { returnObjects: true }) || []

  return (
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
  )
}
