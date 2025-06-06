import { CalendarDays, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function PricingSection() {
  const { t } = useLanguage();
  const premium = t("pricing.premium", { returnObjects: true }) || {};
  const core = t("pricing.core", { returnObjects: true }) || {};
  const framework = t("pricing.framework", { returnObjects: true }) || {};
  return (
    <section id="pricing" className={`w-full py-10 md:py-16 lg:py-24 scroll-mt-8 ${sectionBackgrounds.pricing}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[900px] space-y-8 md:space-y-12">
          <div className="text-center mb-8">
            <h2 className="section-title">{t("pricing.intro")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">{t("pricing.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Premium Tier Card */}
            <div className={`executive-card flex flex-col items-center p-6 ${sectionBackgrounds.pricingPremiumCard}`}>
              <h3 className="text-2xl font-bold text-executive-blue mb-2">{premium.title}</h3>
              <div className="text-base text-muted-foreground mb-4 text-center">{premium.description}</div>
              <ul className="space-y-2 mb-4 w-full">
                {Array.isArray(premium.features) && premium.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-executive-dark">
                    <Check className="h-5 w-5 text-executive-blue mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="italic text-executive-blue mb-2">{premium.quote}</div>
              <div className="font-semibold text-executive-dark mb-4">{premium.pricing}</div>
            </div>
            {/* Core Tier Card */}
            <div className={`executive-card flex flex-col items-center p-6 ${sectionBackgrounds.pricingCoreCard}`}>
              <h3 className="text-2xl font-bold text-executive-blue mb-2">{core.title}</h3>
              <div className="text-base text-muted-foreground mb-4 text-center">{core.description}</div>
              <ul className="space-y-2 mb-4 w-full">
                {Array.isArray(core.features) && core.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-executive-dark">
                    <Check className="h-5 w-5 text-executive-blue mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="italic text-executive-blue mb-2">{core.quote}</div>
              <div className="font-semibold text-executive-dark mb-4">{core.pricing}</div>
            </div>
          </div>
          {/* Framework Section */}
          <div className="text-center mt-12">
            <h4 className="text-xl font-bold mb-6">{framework.title}</h4>
            <button className="executive-button">
              <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("pricing.cta.primary")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 