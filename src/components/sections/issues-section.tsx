import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function IssuesSection() {
  const { t } = useLanguage();
  const issues = t("issues.items", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section id="issues" className={`w-full py-16 scroll-mt-8 ${sectionBackgrounds.issues}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("issues.title")}</h2>
          <p className="text-base md:text-lg text-center mb-8">{t("issues.intro")}</p>
          <div className="space-y-8">
            {issues.map((issue, i) => (
              <div key={i} className={`rounded-xl shadow p-6 ${sectionBackgrounds.issuesCard}`}>
                <h3 className="text-xl font-semibold text-executive-blue mb-2">{issue.title}</h3>
                <p className="text-base md:text-lg text-black">{issue.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg text-center mt-8 font-medium">{t("issues.outro")}</p>
        </ScrollReveal>
      </div>
    </section>
  );
} 