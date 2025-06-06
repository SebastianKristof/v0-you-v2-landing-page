import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { CalendarDays } from "lucide-react";

export function ProblemSection() {
  const { t } = useLanguage();
  const problemCards = t("problem.cards", { returnObjects: true }) || [];
  return (
    <section
      className="w-full py-10 md:py-16 lg:py-24"
      style={{ backgroundColor: "hsl(var(--white))" }}
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-base md:text-lg lg:text-xl italic text-muted-foreground">{t("problem.quote")}</p>
            <h2 className="section-title">{t("problem.title")}</h2>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-executive-light-blue/60 to-white/80 pointer-events-none -z-10" />
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {Array.isArray(problemCards) &&
                problemCards.map((text: string, index: number) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div
                      className={`executive-card h-full flex items-start gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 1 ? 'md:mt-8' : ''}`}
                    >
                      <div className="w-1.5 h-8 md:h-12 rounded-full bg-executive-blue mr-3 mt-1" />
                      <p className="text-sm md:text-base text-muted-foreground flex-1">{text}</p>
                    </div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base md:text-lg">{t("problem.conclusion1")}</p>
            <p className="text-base md:text-lg">{t("problem.conclusion2")}</p>
          </div>
          <div className="flex justify-center mt-8 mb-4">
            <button className="executive-button flex items-center gap-2 px-8 py-3 text-lg" type="button">
              <CalendarDays className="w-5 h-5" />
              {t("cta.primaryProblem")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 