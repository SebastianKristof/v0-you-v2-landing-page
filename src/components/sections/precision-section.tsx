import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function PrecisionSection() {
  const { t } = useLanguage();
  const bullets = t("precision.bullets", { returnObjects: true }) as { heading: string; desc: string }[];
  return (
    <section id="precision" className={`w-full py-16 ${sectionBackgrounds.precision}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("precision.title")}</h2>
          <p className="text-base md:text-lg text-center mb-8">{t("precision.intro")}</p>
          <ul className="space-y-6">
            {bullets.map((item, i) => (
              <li key={i} className="mb-4">
                <span
                  className="font-bold text-executive-blue text-lg md:text-xl pl-4"
                  style={{
                    borderLeft: "6px solid hsl(var(--executive-gold))",
                    background: "none",
                    display: "inline-block",
                    lineHeight: 1.3,
                  }}
                >
                  {item.heading}
                </span>
                <span className="block text-base md:text-lg text-black mt-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
} 