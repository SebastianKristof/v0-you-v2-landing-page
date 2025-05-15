"use client"

import { CalendarDays, Check, MessageCircle } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export default function PricingSection() {
  const { t } = useLanguage()

  // Get pricing features safely
  const pricingFeatures = t("pricing.includes.features", { returnObjects: true }) || []

  return (
    <section className="w-full py-10 md:py-16 lg:py-24" style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}>
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
                        <Check className="h-5 w-5 md:h-6 md:w-6 mb-2" style={{ color: "hsl(var(--executive-blue))" }} />
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
  )
}
