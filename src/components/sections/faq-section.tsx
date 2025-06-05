import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import FAQAccordion from "@/components/faq-accordion";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function FaqSection() {
  const { t } = useLanguage();
  const faqItems = t("faq.items", { returnObjects: true }) || [];
  return (
    <section id="faq" className={`w-full py-10 md:py-16 lg:py-24 ${sectionBackgrounds.faq}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("faq.title")}</h2>
          </div>
          <FAQAccordion items={Array.isArray(faqItems) ? faqItems : []} />
        </ScrollReveal>
      </div>
    </section>
  );
} 