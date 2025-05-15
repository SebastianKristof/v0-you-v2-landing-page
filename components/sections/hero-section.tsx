"use client"

import Image from "next/image"
import { CalendarDays } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
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
        <div className="md:max-w-[60%] space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none gradient-text">
              {t("hero.title")}
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">{t("hero.subtitle")}</p>
            <p className="text-base md:text-lg text-muted-foreground">{t("hero.description1")}</p>
            <p className="text-base md:text-xl text-muted-foreground">{t("hero.description2")}</p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <button className="executive-button">
              <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("nav.bookCall")}
            </button>
          </div>
        </div>
      </div>

      {/* Quick ROI preview */}
      <ScrollReveal className="mt-8 md:mt-12 overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x text-sm md:text-base">
          <div className="p-3 md:p-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.therapy.title")}</p>
            <p className="font-medium">{t("quickRoi.therapy.duration")}</p>
          </div>
          <div className="p-3 md:p-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.coaching.title")}</p>
            <p className="font-medium">{t("quickRoi.coaching.duration")}</p>
          </div>
          <div className="p-3 md:p-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.selfHelp.title")}</p>
            <p className="font-medium">{t("quickRoi.selfHelp.duration")}</p>
          </div>
          <div className="p-3 md:p-4 text-center" style={{ backgroundColor: "hsla(var(--executive-blue), 0.05)" }}>
            <p className="text-xs md:text-sm font-medium" style={{ color: "hsl(var(--executive-blue))" }}>
              {t("quickRoi.youv2.title")}
            </p>
            <p className="font-bold">{t("quickRoi.youv2.duration")}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
