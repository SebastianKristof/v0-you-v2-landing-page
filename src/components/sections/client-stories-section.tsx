import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";

// Simple SVG avatar placeholders
const FemaleAvatar = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="20" cy="20" r="20" fill="#E0BBE4" />
    <ellipse cx="20" cy="25" rx="10" ry="7" fill="#fff" />
    <ellipse cx="20" cy="16" rx="7" ry="7" fill="#fff" />
    <ellipse cx="20" cy="16" rx="5" ry="5" fill="#E0BBE4" />
  </svg>
);
const MaleAvatar = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="20" cy="20" r="20" fill="#A3C9E2" />
    <ellipse cx="20" cy="25" rx="10" ry="7" fill="#fff" />
    <ellipse cx="20" cy="16" rx="7" ry="7" fill="#fff" />
    <ellipse cx="20" cy="16" rx="5" ry="5" fill="#A3C9E2" />
  </svg>
);

const TIME = "10:42";

// Messenger backgrounds
const messengerBg = [
  "bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]", // iMessage-like
  "bg-gradient-to-br from-[#e4e9f7] to-[#a7bfe8]", // Telegram-like
  "bg-gradient-to-br from-[#d2f8d2] to-[#a6e3a1]", // WhatsApp-like
];

export function ClientStoriesSection() {
  const { t } = useLanguage();
  const stories = t("clientStories.stories", { returnObjects: true }) as Array<{
    message: string;
    name: string;
    title: string;
  }>;
  return (
    <section id="client-stories" className="w-full py-16 bg-white">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("clientStories.title")}</h2>
          <div className="flex flex-row gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {stories.map((story, i) => {
              const { message, name, title } = story;
              const Avatar = i % 2 === 0 ? FemaleAvatar : MaleAvatar;
              const bg = messengerBg[i % messengerBg.length];
              return (
                <div
                  key={i}
                  className={`min-w-[320px] max-w-xs flex-shrink-0 rounded-2xl shadow-lg border snap-center relative ${bg}`}
                  style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
                >
                  {/* Messenger header */}
                  <div className="flex items-center gap-3 px-4 py-2 border-b bg-white/60 rounded-t-2xl">
                    <span className="flex-shrink-0"><Avatar /></span>
                    <span className="font-semibold text-executive-dark text-sm">{name}</span>
                    {title && <span className="text-xs text-muted-foreground ml-2">{title}</span>}
                  </div>
                  {/* Chat bubble */}
                  <div className="px-4 py-6">
                    <div className="bg-white/80 rounded-xl px-4 py-3 text-base md:text-lg text-executive-dark shadow-sm relative">
                      {message}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ClientStoriesSection; 