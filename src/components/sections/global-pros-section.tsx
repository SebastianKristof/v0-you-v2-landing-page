import { Globe, Languages, Star, CalendarDays } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function GlobalProsSection() {
  const { t } = useLanguage();
  const points = t("globalPros.points", { returnObjects: true }) || [];
  return (
    <section id="global-pros" className={`w-full py-10 md:py-16 lg:py-24 scroll-mt-8 ${sectionBackgrounds.globalPros}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title text-black">{t("globalPros.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground">{t("globalPros.subtitle")}</p>
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-executive-dark/90 mb-2 md:mb-4 text-center">
            <span className="underline underline-offset-[6px] decoration-2 decoration-transparent bg-gradient-to-r from-executive-blue to-executive-light-blue bg-no-repeat bg-[length:100%_2px] bg-[position:0_100%]">
              {t("globalPros.preludeHighlight")}
            </span>
          </p>
          <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
            {Array.isArray(points) && points.map((item: any, i: number) => (
              <li
                key={i}
                className={`flex-1 flex items-start gap-3 rounded-lg p-4 md:flex-col md:items-center md:text-center shadow-sm ${sectionBackgrounds.globalProsPoint}`}
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
          <blockquote className="mt-8 text-xl md:text-2xl italic text-executive-blue text-center max-w-3xl mx-auto">
            {t("globalPros.quote")}
          </blockquote>
          <div className="mt-12 flex flex-col items-center gap-4">
            <span className="text-lg md:text-xl text-muted-foreground mb-1 text-center">{t("globalPros.ctaPrompt")}</span>
            <button className="executive-button flex items-center gap-2 justify-center" type="button">
              <CalendarDays className="w-5 h-5" />
              {t("globalPros.ctaButton")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 