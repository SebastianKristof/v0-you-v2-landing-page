import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

function splitHeadingDesc(text: string): { heading: string; desc: string } {
  // Try to split at first period or colon
  const periodIdx = text.indexOf(".");
  const colonIdx = text.indexOf(":");
  let splitIdx = -1;
  if (colonIdx !== -1 && (periodIdx === -1 || colonIdx < periodIdx)) splitIdx = colonIdx;
  else if (periodIdx !== -1) splitIdx = periodIdx;
  if (splitIdx !== -1) {
    return {
      heading: text.slice(0, splitIdx + 1),
      desc: text.slice(splitIdx + 1).trim(),
    };
  }
  return { heading: text, desc: "" };
}

export function WhyMeSection() {
  const { t } = useLanguage();
  const bullets = t("whyMe.bullets", { returnObjects: true }) as string[];
  const splitBullets = bullets.map(splitHeadingDesc);
  return (
    <section id="why-me" className={`w-full py-16 ${sectionBackgrounds.whyMe}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("whyMe.title")}</h2>
          <p className="text-base md:text-lg text-center mb-8 text-executive-dark">{t("whyMe.intro")}</p>
          <ul className="space-y-6">
            {splitBullets.map((item, i) => (
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
                {item.desc && (
                  <span className="block text-base md:text-lg text-black mt-1">{item.desc}</span>
                )}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
} 