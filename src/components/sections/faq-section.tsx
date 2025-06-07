import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import FAQAccordion from "@/components/faq-accordion";
import { sectionBackgrounds } from "@/lib/section-backgrounds";
import { EbookModalTrigger } from "@/components/ebook-modal"
import { BookingModalTrigger } from "@/components/booking-modal"

export function FaqSection() {
  const { t } = useLanguage();
  const faqItems = t("faq.items", { returnObjects: true }) || [];
  return (
    <section id="faq" className={`w-full py-10 md:py-16 lg:py-24 scroll-mt-8 ${sectionBackgrounds.faq}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("faq.title")}</h2>
          </div>
          <FAQAccordion items={Array.isArray(faqItems) ? faqItems : []} />
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto">
            <BookingModalTrigger>
              <button className="executive-button w-full sm:w-auto min-w-[220px]">
                {t("cta.bookStrategyCall")}
              </button>
            </BookingModalTrigger>
            <EbookModalTrigger>
              <button className="executive-button-outline border border-executive-blue text-executive-blue font-semibold rounded-full py-3 px-4 md:px-6 text-center transition-colors hover:bg-executive-blue/10 w-full sm:w-auto min-w-[220px]">
                {t("cta.downloadEbook")}
              </button>
            </EbookModalTrigger>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 