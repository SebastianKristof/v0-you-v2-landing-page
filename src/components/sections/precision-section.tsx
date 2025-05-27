import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function PrecisionSection() {
  const { t } = useLanguage();
  const bullets = t("precision.bullets", { returnObjects: true }) as { heading: string; desc: string }[];
  return (
    <section id="precision" className="w-full py-16 bg-executive-light-blue">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("precision.title")}</h2>
          <p className="text-base md:text-lg text-center mb-8">{t("precision.intro")}</p>
          <ul className="space-y-6">
            {bullets.map((item, i) => (
              <li key={i} className="mb-4">
                <span
                  className="font-semibold text-executive-blue"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--executive-gold)/.15) 80%, transparent 100%)",
                    borderLeft: "4px solid var(--executive-gold)",
                    paddingLeft: "0.75rem",
                    borderRadius: "0.25rem",
                    display: "inline",
                  }}
                >
                  {item.heading}
                </span>
                <span className="block text-base md:text-lg text-black">{item.desc}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
} 