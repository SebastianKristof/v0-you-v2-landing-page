import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { Check } from "lucide-react";

export function ResultsSection() {
  const { t } = useLanguage();
  const bullets = t("results.bullets", { returnObjects: true }) as string[];
  return (
    <section id="results" className="w-full py-16 bg-executive-light-blue">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("results.title")}</h2>
          </div>
          <ul className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white/80 rounded-lg p-4 shadow">
                <Check className="text-executive-blue w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg text-left">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 text-center text-lg md:text-xl italic text-executive-dark max-w-2xl mx-auto border-l-4 border-executive-blue pl-6 py-4 bg-white/60 rounded-lg">
            {t("results.pullQuote")}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ResultsSection; 