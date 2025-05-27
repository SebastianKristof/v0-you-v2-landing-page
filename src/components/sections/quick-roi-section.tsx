import { useLanguage } from "@/contexts/language-context";

export function QuickRoiSection() {
  const { t } = useLanguage();
  // Card data for easier mapping
  const cards = [
    {
      key: "therapy",
      title: t("quickRoi.therapy.title"),
      duration: t("quickRoi.therapy.duration"),
      comment: t("quickRoi.therapy.comment"),
    },
    {
      key: "coaching",
      title: t("quickRoi.coaching.title"),
      duration: t("quickRoi.coaching.duration"),
      comment: t("quickRoi.coaching.comment"),
    },
    {
      key: "medication",
      title: t("quickRoi.medication.title"),
      duration: t("quickRoi.medication.duration"),
      comment: t("quickRoi.medication.comment"),
    },
    {
      key: "selfHelp",
      title: t("quickRoi.selfHelp.title"),
      duration: t("quickRoi.selfHelp.duration"),
      comment: t("quickRoi.selfHelp.comment"),
    },
  ];
  const youv2 = {
    key: "youv2",
    title: t("quickRoi.youv2.title"),
    duration: t("quickRoi.youv2.duration"),
    comment: t("quickRoi.youv2.comment"),
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6">
      {/* Mobile/Tablet: 2x2 grid + full-width You.v2 row */}
      <div className="grid grid-cols-2 md:hidden rounded-xl border bg-white/50 shadow overflow-hidden">
        {/* First row */}
        <div className="p-4 text-center border-b border-r bg-white/80">
          <p className="text-xs font-medium text-muted-foreground mb-1">{cards[0].title}</p>
          <p className="font-bold">{cards[0].duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{cards[0].comment}</p>
        </div>
        <div className="p-4 text-center border-b bg-white/80">
          <p className="text-xs font-medium text-muted-foreground mb-1">{cards[1].title}</p>
          <p className="font-bold">{cards[1].duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{cards[1].comment}</p>
        </div>
        {/* Second row */}
        <div className="p-4 text-center border-r bg-white/80">
          <p className="text-xs font-medium text-muted-foreground mb-1">{cards[2].title}</p>
          <p className="font-bold">{cards[2].duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{cards[2].comment}</p>
        </div>
        <div className="p-4 text-center bg-white/80">
          <p className="text-xs font-medium text-muted-foreground mb-1">{cards[3].title}</p>
          <p className="font-bold">{cards[3].duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{cards[3].comment}</p>
        </div>
        {/* Third row: You.v2 full width */}
        <div className="col-span-2 p-4 text-center bg-[hsla(var(--executive-blue),0.05)] border-t">
          <p className="text-xs font-medium text-[hsl(var(--executive-blue))] mb-1">{youv2.title}</p>
          <p className="font-bold text-lg">{youv2.duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{youv2.comment}</p>
        </div>
      </div>
      {/* Desktop: 5-column grid */}
      <div className="hidden md:grid grid-cols-5 divide-x text-sm md:text-base rounded-xl border bg-white/50 shadow overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.key}
            className="p-4 text-center bg-white/80"
          >
            <p className="text-xs md:text-sm font-medium text-muted-foreground mb-1">{card.title}</p>
            <p className="font-bold">{card.duration}</p>
            <p className="text-xs italic text-muted-foreground mt-1">{card.comment}</p>
          </div>
        ))}
        <div className="p-4 text-center bg-[hsla(var(--executive-blue),0.05)]">
          <p className="text-xs md:text-sm font-medium text-[hsl(var(--executive-blue))] mb-1">{youv2.title}</p>
          <p className="font-bold text-lg">{youv2.duration}</p>
          <p className="text-xs italic text-muted-foreground mt-1">{youv2.comment}</p>
        </div>
      </div>
    </div>
  );
} 