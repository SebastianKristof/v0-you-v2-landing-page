import React, { useState, useEffect, Suspense } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/contexts/language-context";

interface LegalModalProps {
  type: "privacy" | "terms";
  trigger: React.ReactNode;
}

export function LegalModal({ type, trigger }: LegalModalProps) {
  const { language } = useLanguage();
  const lang = language || "en";
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      fetch(`/legal/${type}.${lang}.md`)
        .then((res) => {
          if (!res.ok) throw new Error("File not found");
          return res.text();
        })
        .then(setContent)
        .catch(() => setContent("Sorry, the document could not be loaded."))
        .finally(() => setLoading(false));
    }
  }, [open, type, lang]);

  // Replace {{DATE}} with today's date in the loaded markdown
  const displayContent = content.replace(/\{\{DATE\}\}/g, new Date().toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US"));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {type === "privacy" ? (lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy") : (lang === "ru" ? "Условия использования" : "Terms & Conditions")}
          </DialogTitle>
        </DialogHeader>
        <Suspense fallback={<div>Loading...</div>}>
          {loading ? <div>Loading...</div> : (
            <div className="prose max-w-none [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1">
              <ReactMarkdown
                components={{
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                }}
              >{displayContent}</ReactMarkdown>
            </div>
          )}
        </Suspense>
      </DialogContent>
    </Dialog>
  );
} 