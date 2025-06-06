import ScrollReveal from "@/components/scroll-reveal";
import { useLanguage } from "@/contexts/language-context";
import { sectionBackgrounds } from "@/lib/section-backgrounds";
import { BookingModalTrigger } from "@/components/booking-modal"

export function ReadyToChooseSection() {
  const { t } = useLanguage();
  return (
    <section id="ready-to-choose" className={`w-full py-16 ${sectionBackgrounds.readyToChoose}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[700px] space-y-8 md:space-y-12 text-center">
          <h2 className="section-title text-center text-3xl md:text-4xl mb-4 text-executive-blue">{t("readyToChoose.title")}</h2>
          <p className="text-base md:text-lg text-executive-dark max-w-2xl mx-auto">
            {t("readyToChoose.p1")}
          </p>
          <div className="mt-8">
            <BookingModalTrigger>
              <button className={`executive-button text-lg px-8 py-4 mb-4 inline-block text-executive-dark border-0 hover:bg-executive-gold transition-colors ${sectionBackgrounds.readyToChooseCta}`}>
                {t("cta.claimYourSpot")}
              </button>
            </BookingModalTrigger>
          </div>
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