import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sectionBackgrounds } from "@/lib/section-backgrounds";
import Image from "next/image";

// Avatar image paths (even=female, odd=male)
const femaleAvatars = [
  "/images/client-avatar-2-female.jpg",
  "/images/client-avatar-4-female.jpg",
  "/images/client-avatar-7-female.jpg",
];
const maleAvatars = [
  "/images/client-avatar-1-male.jpg",
  "/images/client-avatar-5-male.jpg",
  "/images/client-avatar-6-male.jpg",
];

const TIME = "10:42";

// Messenger backgrounds from config
const messengerBg = [
  sectionBackgrounds.clientStoriesCard1,
  sectionBackgrounds.clientStoriesCard2,
  sectionBackgrounds.clientStoriesCard3,
];

export function ClientStoriesSection() {
  const { t } = useLanguage();
  const stories = t("clientStories.stories", { returnObjects: true }) as Array<{
    message: string;
    name: string;
    title: string;
  }>;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Helper: scroll to a card by index
  const scrollToCard = useCallback((idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(".client-story-card");
    const card = cards[idx];
    if (card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        card.offsetLeft - container.offsetLeft - (containerRect.width - cardRect.width) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  // When activeIndex changes (from button/dot), scroll to that card
  useEffect(() => {
    scrollToCard(activeIndex);
  }, [activeIndex, scrollToCard]);

  // On manual scroll, update activeIndex to the most centered card (debounced)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    function onScroll() {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const cards = container.querySelectorAll<HTMLElement>(".client-story-card");
        const containerRect = container.getBoundingClientRect();
        let minDiff = Infinity;
        let idx = 0;
        cards.forEach((card, i) => {
          const cardRect = card.getBoundingClientRect();
          // Distance from card center to container center
          const diff = Math.abs(
            (cardRect.left + cardRect.right) / 2 - (containerRect.left + containerRect.right) / 2
          );
          if (diff < minDiff) {
            minDiff = diff;
            idx = i;
          }
        });
        setActiveIndex(idx);
      }, 100); // debounce
    }
    container.addEventListener("scroll", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  function scrollLeft() {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }
  function scrollRight() {
    setActiveIndex((i) => Math.min(i + 1, stories.length - 1));
  }

  return (
    <section id="client-stories" className={`w-full py-16 scroll-mt-8 ${sectionBackgrounds.clientStories}`}>
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <h2 className="section-title text-center">{t("clientStories.title")}</h2>
          <div className="relative">
            {/* Left button */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 border shadow rounded-full p-2 disabled:opacity-40 transition"
              onClick={scrollLeft}
              disabled={activeIndex === 0}
              aria-label="Scroll left"
              type="button"
            >
              <ArrowLeft className="w-5 h-5 text-executive-blue" />
            </button>
            {/* Scrollable cards */}
            <div
              ref={scrollRef}
              className="flex flex-row gap-6 overflow-x-auto pb-4 px-8 scroll-smooth"
              tabIndex={0}
              aria-label="Client stories carousel"
            >
              {/* Left spacer for centering first card */}
              <div
                aria-hidden="true"
                className="flex-shrink-0 min-w-[16px] md:min-w-[calc(50vw-200px)] lg:min-w-[calc(50vw-240px)]"
              />
              {stories.map((story, i) => {
                const { message, name, title } = story;
                const bg = messengerBg[i % messengerBg.length];
                // Even index: female, Odd index: male
                const isFemale = i % 2 === 0;
                const avatarList = isFemale ? femaleAvatars : maleAvatars;
                const avatarSrc = avatarList[Math.floor(i / 2) % avatarList.length];
                return (
                  <div
                    key={i}
                    className={`client-story-card min-w-[320px] max-w-xs flex-shrink-0 rounded-2xl shadow-lg border relative ${bg}`}
                    style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
                  >
                    {/* Messenger header */}
                    <div className="flex items-center gap-3 px-4 py-2 border-b bg-white/60 rounded-t-2xl">
                      <span className="flex-shrink-0">
                        <Image
                          src={avatarSrc}
                          alt={isFemale ? "Female client avatar" : "Male client avatar"}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                      </span>
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
              {/* Right spacer for centering last card */}
              <div
                aria-hidden="true"
                className="flex-shrink-0 min-w-[16px] md:min-w-[calc(50vw-200px)] lg:min-w-[calc(50vw-240px)]"
              />
            </div>
            {/* Right button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 border shadow rounded-full p-2 disabled:opacity-40 transition"
              onClick={scrollRight}
              disabled={activeIndex === stories.length - 1}
              aria-label="Scroll right"
              type="button"
            >
              <ArrowRight className="w-5 h-5 text-executive-blue" />
            </button>
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${i === activeIndex ? "bg-executive-blue border-executive-blue scale-110" : "bg-warm-accent border-executive-blue/40"}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to story ${i + 1}`}
                type="button"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ClientStoriesSection; 