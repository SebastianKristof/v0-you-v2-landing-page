import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";

export function IsThisForYouSection() {
  const { t } = useLanguage();
  const bullets = t("isThisForYou.bullets", { returnObjects: true }) as string[];
  return (
    <section id="is-this-for-you" className="w-full py-16 bg-executive-light-blue scroll-mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        {/* Text content on the left (on desktop), on mobile order-2 */}
        <div className="md:w-3/5 w-full order-2 md:order-1">
          <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h2 className="section-title text-center md:text-3xl lg:text-4xl font-bold mb-2">{t("isThisForYou.title")}</h2>
            </div>
            {/* On mobile, image comes after heading, before text */}
            <div className="block md:hidden my-6">
              <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-white/40 mx-auto">
                <Image
                  src="/images/clients-3-woman - Copy.jpg"
                  alt="Is this for you illustration"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
            <ul className="mb-6 mx-auto max-w-xl space-y-3 list-none pl-0">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-3 h-3 rounded-full" style={{ background: 'hsl(var(--executive-gold))', display: 'inline-block' }}></span>
                  <span className="text-base md:text-lg text-executive-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-left">
                {t("isThisForYou.description1").split(/(coaches|therapists|doctors|lawyers|business leaders)/g).map((part: string, i: number) =>
                  ["coaches", "therapists", "doctors", "lawyers", "business leaders"].includes(part) ? (
                    <span key={i} className="text-executive-blue font-semibold">{part}</span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <p className="text-base md:text-lg text-left font-semibold">{t("isThisForYou.description2")}</p>
            </div>
          </ScrollReveal>
        </div>
        {/* Image on the right (on desktop), on mobile hidden */}
        <div className="md:w-2/5 w-full hidden md:flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-white/40">
            <Image
              src="/images/clients-3-woman - Copy.jpg"
              alt="Is this for you illustration"
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

export default IsThisForYouSection; 