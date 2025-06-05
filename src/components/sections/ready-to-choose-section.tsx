import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/contexts/language-context";

export function ReadyToChooseSection() {
  const { t } = useLanguage();
  return (
    <section id="ready-to-choose" className="w-full py-16 bg-warm-bg">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[700px] space-y-8 md:space-y-12 text-center">
          <h2 className="section-title text-center text-3xl md:text-4xl mb-4 text-executive-blue">{t("readyToChoose.title")}</h2>
          <a
            href="#book"
            className="executive-button text-lg px-8 py-4 mb-4 inline-block bg-warm-accent text-executive-dark border-0 hover:bg-executive-gold transition-colors"
          >
            {t("readyToChoose.cta")}
          </a>
          <p className="text-base md:text-lg text-executive-dark max-w-2xl mx-auto">
            {t("readyToChoose.p1")}
          </p>
          <p className="text-base md:text-lg text-executive-dark max-w-2xl mx-auto">
            {t("readyToChoose.p2")}
          </p>
          <p className="text-base md:text-lg text-executive-dark max-w-2xl mx-auto">
            {t("readyToChoose.p3")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
} 