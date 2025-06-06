import { Check, Clock, Layers, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function SessionSection() {
  const { t } = useLanguage();
  const sessionFeatures = t("session.features", { returnObjects: true }) || [];
  const sessionWorkTypes = t("session.work.types", { returnObjects: true }) || [];
  return (
    <section id="session" className={`w-full py-10 md:py-16 lg:py-24 scroll-mt-8 ${sectionBackgrounds.session}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("session.title")}</h2>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {Array.isArray(sessionFeatures) &&
              sessionFeatures.map((feature: any, index: number) => (
                <ScrollReveal key={index} delay={(index + 1) * 100}>
                  <div className="executive-card h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="feature-icon">
                        {index === 0 && <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
                        {index === 1 && <Clock className="h-5 w-5 md:h-6 md:w-6" />}
                        {index === 2 && <Layers className="h-5 w-5 md:h-6 md:w-6" />}
                      </div>
                      <h3 className="text-lg md:text-xl font-medium">{feature.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>
          <div className="space-y-4">
            <p className="text-base md:text-lg">{t("session.work.intro")}</p>
            <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
              {Array.isArray(sessionWorkTypes) &&
                sessionWorkTypes.map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <Check
                      className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                      style={{ color: "hsl(var(--executive-blue))" }}
                    />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
            </div>
            <p className="text-base md:text-lg">{t("session.work.result")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 