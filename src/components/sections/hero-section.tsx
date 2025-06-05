import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { QuickRoiSection } from "./quick-roi-section";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className={`w-full py-10 md:py-16 lg:py-24 overflow-hidden ${sectionBackgrounds.hero}`}>
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Image positioned absolutely on the right for larger screens */}
        <div className="hidden md:block absolute top-0 right-0 w-[45%] h-full">
          <div className="relative w-full h-full flex items-start justify-end">
            <div className="relative w-[90%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/sebastian-portrait.png"
                alt="Dr. Sebastian Kristof"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* Mobile image (shown only on small screens) */}
        <div className="md:hidden w-full mb-8">
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/sebastian-portrait.png"
              alt="Dr. Sebastian Kristof"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Text content with padding to make room for the image */}
        <div className="md:max-w-[60%] space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text">
              {t("hero.title")}
            </h1>
            <div className="h-1 w-12 bg-executive-gold rounded mb-2" />
            <p className="text-xl md:text-2xl font-semibold text-executive-blue">
              {t("hero.subtitle")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground">{t("hero.description1")}</p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row mt-4">
            <button className="executive-button">
              <CalendarDays className="mr-2 h-4 w-4 inline" /> {t("nav.bookCall")}
            </button>
            <a href="#how-it-works" className="executive-button-outline border border-executive-blue text-executive-blue font-semibold rounded-full py-3 px-4 md:px-6 text-center transition-colors hover:bg-executive-blue/10">
              {t("nav.howItWorks")}
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-2">{t("hero.ctaMicrocopy")}</p>
        </div>
      </div>
      {/* Quick ROI preview */}
      <ScrollReveal className="mt-8 md:mt-12 overflow-hidden bg-card/50 backdrop-blur-sm">
        <QuickRoiSection />
      </ScrollReveal>
    </section>
  );
} 