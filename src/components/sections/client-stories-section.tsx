import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export function ClientStoriesSection() {
  const { t } = useLanguage();
  const stories = t("clientStories.stories", { returnObjects: true }) as string[];
  return (
    <section id="client-stories" className="w-full py-16 bg-white">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("clientStories.title")}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((story, i) => (
              <blockquote key={i} className="bg-executive-light-blue/60 border-l-4 border-executive-blue p-6 rounded-lg shadow text-lg italic">
                {story}
              </blockquote>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 