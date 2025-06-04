import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function ResultsSection() {
  const { t } = useLanguage();
  return (
    <section id="results" className="w-full py-16 bg-executive-light-blue">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="section-title text-center">{t("results.title", "Результат")}</h2>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-center">{t("results.description", "[Здесь будет описание секции о результатах]")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ResultsSection; 