import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";

export function FullControlSection() {
  const { t } = useLanguage();
  return (
    <section id="full-control" className="w-full py-16 bg-warm-bg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        {/* Text content on the right (on desktop), on mobile order-2 */}
        <div className="md:w-3/5 w-full order-2 md:order-1">
          <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="section-title text-center md:text-left">{t("fullControl.title")}</h2>
            </div>
            {/* On mobile, image comes after heading, before text */}
            <div className="block md:hidden my-6">
              <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-executive-light-blue/40 mx-auto">
                <Image
                  src="/images/client_female_1.jpg"
                  alt="Session illustration"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6 text-base md:text-lg text-center md:text-left max-w-2xl mx-auto md:mx-0">
              <p className="font-semibold text-executive-blue">{t("fullControl.p1")}</p>
              <p>{t("fullControl.p1b")}</p>
              <p>{t("fullControl.p2")}</p>
              <p>{t("fullControl.p3")}</p>
              <p className="font-semibold text-executive-dark">{t("fullControl.p4")}</p>
            </div>
          </ScrollReveal>
        </div>
        {/* Image on the left (on desktop), on mobile hidden */}
        <div className="md:w-2/5 w-full hidden md:flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-executive-light-blue/40">
            <Image
              src="/images/client_female_1.jpg"
              alt="Session illustration"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullControlSection; 