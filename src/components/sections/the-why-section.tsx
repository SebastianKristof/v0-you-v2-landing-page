import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function TheWhySection() {
  const { t } = useLanguage();
  return (
    <section id="the-why" className={`w-full py-10 md:py-16 lg:py-24 ${sectionBackgrounds.theWhy}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="section-title text-center">{t("theWhy.title")}</h2>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-executive-blue text-center">{t("theWhy.promiseTitle")}</h3>
            <p className="text-base md:text-lg text-center">{t("theWhy.promise")}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-executive-blue text-center">{t("theWhy.visionTitle")}</h3>
            <p className="text-base md:text-lg text-center">{t("theWhy.vision")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 