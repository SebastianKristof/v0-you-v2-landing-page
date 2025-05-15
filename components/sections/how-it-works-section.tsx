"use client"

import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export default function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="w-full py-10 md:py-16 lg:py-24 bg-white">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="section-title text-center">{t("howItWorks.title")}</h2>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg">{t("howItWorks.description1")}</p>
            <p className="text-base md:text-lg">{t("howItWorks.description2")}</p>
            <div className="flex items-start gap-4 md:gap-8">
              <ScrollReveal
                className="flex-1 max-w-[70%] relative p-4 md:p-6 rounded-xl border"
                style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
              >
                <p className="text-base md:text-lg">{t("howItWorks.callout")}</p>
              </ScrollReveal>
              <div className="hidden md:flex flex-col items-center justify-center w-[25%]">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <span className="text-blue-500 text-xl font-bold">CF</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">Critical Factor</span>
                  </div>
                </div>
              </div>
            </div>
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
  )
}
