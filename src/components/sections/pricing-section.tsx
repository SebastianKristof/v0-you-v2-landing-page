import { CalendarDays, MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function PricingSection() {
  const { t } = useLanguage();
  const core = t("pricing.core", { returnObjects: true }) || {};
  const full = t("pricing.full", { returnObjects: true }) || {};
  return (
    <section
      className="w-full py-10 md:py-16 lg:py-24 bg-white"
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[900px] space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Protocol Card */}
            <div className="executive-card bg-card/80 backdrop-blur-sm flex flex-col items-center p-6">
              <h3 className="text-2xl font-bold text-executive-blue mb-2">{core.title}</h3>
              <div className="text-xl font-semibold mb-1">{core.price}</div>
              <div className="text-base text-muted-foreground mb-4 text-center">{core.description}</div>
              <ul className="space-y-2 mb-6 w-full">
                {Array.isArray(core.features) && core.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-executive-dark">
                    <Check className="h-5 w-5 text-executive-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="executive-button w-full mt-auto">
                <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("pricing.cta.primary")}
              </button>
            </div>
            {/* Full Executive Tier Card */}
            <div className="executive-card bg-white shadow-lg border-2 border-executive-blue flex flex-col items-center p-6 scale-105">
              <h3 className="text-2xl font-bold text-executive-blue mb-2">{full.title}</h3>
              <div className="text-xl font-semibold mb-1">{full.price}</div>
              <div className="text-base text-muted-foreground mb-4 text-center">{full.description}</div>
              <ul className="space-y-2 mb-6 w-full">
                {Array.isArray(full.features) && full.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-executive-dark">
                    <Check className="h-5 w-5 text-executive-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="executive-button w-full mt-auto">
                <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("pricing.cta.primary")}
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-base md:text-lg italic">{t("pricing.quote")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 