import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function ClientStorySection() {
  const { t } = useLanguage();
  // Get background config
  const clientStoryBg = sectionBackgrounds.clientStory;
  const isStyle = clientStoryBg.startsWith("[style.backgroundColor=");
  const style = isStyle ? { backgroundColor: clientStoryBg.match(/'([^']+)'/)?.[1] } : undefined;
  const className = isStyle
    ? "w-full py-10 md:py-16 lg:py-24 relative overflow-hidden"
    : `w-full py-10 md:py-16 lg:py-24 relative overflow-hidden ${clientStoryBg}`;

  return (
    <section
      id="client-story"
      className={className + ' scroll-mt-8'}
      style={style}
    >
      {/* Background gradient overlay only (image removed for now) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent opacity-10"></div>
      <div className="section-container relative z-10">
        <ScrollReveal className="mx-auto max-w-[800px]">
          <div className="executive-card bg-card/90 backdrop-blur-sm">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{t("clientStory.title")}</h2>
              <blockquote className="text-base md:text-lg italic">{t("clientStory.quote")}</blockquote>
              <p className="text-right text-sm md:text-base font-medium">{t("clientStory.author")}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 