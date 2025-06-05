import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function HowItWorksSection() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className={`w-full py-10 md:py-16 lg:py-24 ${sectionBackgrounds.howItWorks}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="section-title text-center">{t("howItWorks.title")}</h2>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg">{t("howItWorks.description1")}</p>
            <p className="text-base md:text-lg">{t("howItWorks.description2")}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-6 md:space-y-0">
            <div className="flex-shrink-0 flex justify-center md:justify-start md:w-1/2">
              <Image
                src="/images/Diagrams-StructureOfMind-Ovals-1.jpg"
                alt="Structure of Mind Diagram"
                width={400}
                height={400}
                className="w-full max-w-xs md:max-w-sm h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center h-full">
              <ScrollReveal
                className="relative p-4 md:p-6 rounded-xl border bg-white flex flex-col justify-center h-full"
              >
                <p className="text-base md:text-lg">{t("howItWorks.callout")}</p>
                <div
                  className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 h-8 md:h-12 w-1 rounded-full"
                  style={{ backgroundColor: "hsl(var(--executive-blue))" }}
                ></div>
              </ScrollReveal>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg">{t("howItWorks.description3")}</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg font-medium italic" style={{ color: "hsl(var(--executive-blue))" }}>
              {t("howItWorks.tagline")}
            </p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg italic">{t("howItWorks.quote")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 