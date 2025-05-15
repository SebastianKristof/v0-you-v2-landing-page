import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function HowItWorksSection() {
  const { t } = useLanguage();
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
  );
} 