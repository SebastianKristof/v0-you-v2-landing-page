import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { sectionBackgrounds } from "@/lib/section-backgrounds";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className={`w-full border-t py-6 md:py-8 ${sectionBackgrounds.footer}`}>
      <div className="section-container">
        <div className="text-center mb-6">
          <span className="block text-lg md:text-xl font-semibold italic" style={{ color: "hsl(var(--executive-gold))" }}>
            {t("footer.tagline")}
          </span>
        </div>
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
            <Link
              href="/privacy"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.links.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.links.terms")}
            </Link>
            <Link
              href="#contact"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.links.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 