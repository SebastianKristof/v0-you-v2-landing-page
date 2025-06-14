import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { CalendarDays } from "lucide-react";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function RoiSection() {
  const { t } = useLanguage();
  const roiTableRows = t("roi.table.rows", { returnObjects: true }) || [];
  return (
    <section id="roi" className={`w-full py-10 md:py-16 lg:py-24 scroll-mt-8 ${sectionBackgrounds.roi}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("roi.title")}</h2>
          </div>
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.approach")}</th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.time")}</th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-left">{t("roi.table.headers.cost")}</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(roiTableRows) &&
                    roiTableRows.map((row: any, index: number) => (
                      <tr
                        key={index}
                        className={`border-b ${index === 4 ? "font-medium" : ""}`}
                        style={index === 4 ? { backgroundColor: "hsla(var(--executive-blue), 0.05)" } : {}}
                      >
                        <td className="py-3 px-2 md:py-4 md:px-4">{row.merged}</td>
                        <td className={`py-3 px-2 md:py-4 md:px-4 ${index === 4 ? "font-bold" : ""}`}>{row.time}</td>
                        <td className={`py-3 px-2 md:py-4 md:px-4 ${index === 4 ? "font-bold" : ""}`}>{row.cost}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className="mx-auto max-w-[600px] mt-8">
          <div className={`text-center text-base md:text-lg font-medium text-executive-dark rounded-md px-4 py-3 mx-auto ${sectionBackgrounds.roiSupport}`}>
            {(() => {
              const supporting = t("roi.supporting");
              // Highlight 'You.v2' in the supporting text
              const parts = supporting.split('You.v2');
              return (
                <>
                  {parts[0]}
                  <span className="text-executive-blue font-bold">You.v2</span>
                  {parts[1]}
                </>
              );
            })()}
          </div>
        </ScrollReveal>
        <div className="flex justify-center mt-8 mb-4">
          <button className="executive-button flex items-center gap-2 justify-center" type="button">
            <CalendarDays className="w-5 h-5" />
            {t("cta.primaryRoi")}
          </button>
        </div>
      </div>
    </section>
  );
} 