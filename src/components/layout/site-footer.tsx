import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { LegalModal } from "@/components/legal-modal";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="w-full border-t py-6 md:py-8 bg-white">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg">You.v2</span>
            <span
              className="text-xs font-semibold uppercase px-1.5 py-0.5 rounded-md"
              style={{ backgroundColor: "hsl(var(--executive-gold))", color: "hsl(var(--executive-dark))" }}
            >
              Intensive
            </span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <LegalModal
              type="privacy"
              trigger={<button className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">{t("footer.links.privacy")}</button>}
            />
            <LegalModal
              type="terms"
              trigger={<button className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">{t("footer.links.terms")}</button>}
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 