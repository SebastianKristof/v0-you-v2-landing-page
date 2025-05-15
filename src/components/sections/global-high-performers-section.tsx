import { Globe, Languages, Star, CalendarDays } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function GlobalHighPerformersSection() {
  const { t } = useLanguage();
  const points = t("globalHighPerformers.points", { returnObjects: true }) || [];
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 bg-white">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title text-executive-blue">{t("globalHighPerformers.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground">{t("globalHighPerformers.subtitle")}</p>
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-balance text-executive-dark/90 mb-2 md:mb-4 text-center">
            {t("globalHighPerformers.prelude")}
          </p>
          <style jsx>{`
            .gradient-underline {
              text-decoration: underline;
              text-decoration-thickness: 2px;
              text-underline-offset: 6px;
              text-decoration-color: transparent;
              background-image: linear-gradient(90deg, hsl(var(--executive-blue)) 0%, hsl(var(--executive-light-blue)) 100%);
              background-repeat: no-repeat;
              background-size: 100% 2px;
              background-position: 0 100%;
            }
          `}</style>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-executive-dark/90 mb-2 md:mb-4 text-center">
            <span className="gradient-underline">
              {t("globalHighPerformers.preludeHighlight")}
            </span>
          </p>
          <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
            {Array.isArray(points) && points.map((item: any, i: number) => (
              <li
                key={i}
                className="flex-1 flex items-start gap-3 bg-executive-light-blue/60 rounded-lg p-4 md:flex-col md:items-center md:text-center shadow-sm"
              >
                {i === 0 && <Languages className="w-7 h-7 text-executive-blue mb-2 md:mb-4" />}
                {i === 1 && <Globe className="w-7 h-7 text-executive-gold mb-2 md:mb-4" />}
                {i === 2 && <Star className="w-7 h-7 text-executive-blue mb-2 md:mb-4" />}
                <span className="text-base md:text-lg text-executive-dark font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 text-xl md:text-2xl italic text-executive-blue text-center max-w-2xl mx-auto">
            {t("globalHighPerformers.quote")}
          </blockquote>
          <div className="mt-6 text-center">
            {/* REMOVE the old CTA bubble here */}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <span className="text-lg md:text-xl text-muted-foreground mb-1 text-center">{t("globalHighPerformers.ctaPrompt")}</span>
            <button className="executive-button flex items-center gap-2 justify-center" type="button">
              <CalendarDays className="w-5 h-5" />
              {t("globalHighPerformers.ctaButton")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 