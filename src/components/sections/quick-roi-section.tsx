import { useLanguage } from "@/contexts/language-context";

export function QuickRoiSection() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 divide-x text-sm md:text-base">
      <div className="p-3 md:p-4 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.therapy.title")}</p>
        <p className="font-medium">{t("quickRoi.therapy.duration")}</p>
        <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.therapy.comment")}</p>
      </div>
      <div className="p-3 md:p-4 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.coaching.title")}</p>
        <p className="font-medium">{t("quickRoi.coaching.duration")}</p>
        <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.coaching.comment")}</p>
      </div>
      <div className="p-3 md:p-4 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.medication.title")}</p>
        <p className="font-medium">{t("quickRoi.medication.duration")}</p>
        <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.medication.comment")}</p>
      </div>
      <div className="p-3 md:p-4 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">{t("quickRoi.selfHelp.title")}</p>
        <p className="font-medium">{t("quickRoi.selfHelp.duration")}</p>
        <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.selfHelp.comment")}</p>
      </div>
      <div className="p-3 md:p-4 text-center" style={{ backgroundColor: "hsla(var(--executive-blue), 0.05)" }}>
        <p className="text-xs md:text-sm font-medium" style={{ color: "hsl(var(--executive-blue))" }}>
          {t("quickRoi.youv2.title")}
        </p>
        <p className="font-bold">{t("quickRoi.youv2.duration")}</p>
        <p className="text-xs italic text-muted-foreground mt-1">{t("quickRoi.youv2.comment")}</p>
      </div>
    </div>
  );
} 