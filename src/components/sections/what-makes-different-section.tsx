import { useLanguage } from '@/contexts/language-context';
import { CheckCircle, Timer, Cog, Lock } from 'lucide-react';
import Image from 'next/image';

const ICONS = {
  'timer': <Timer className="text-executive-blue w-7 h-7" />,
  'cog': <Cog className="text-executive-gold w-7 h-7" />,
  'check-circle': <CheckCircle className="text-executive-blue w-7 h-7" />,
  'lock': <Lock className="text-executive-gold w-7 h-7" />,
};

export function WhatMakesDifferentSection() {
  const { t } = useLanguage();
  const differentiators = t('whatMakesDifferent.differentiators', { returnObjects: true }) || [];
  const quote = t('whatMakesDifferent.quote');
  const title = t('whatMakesDifferent.title');

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        {/* Illustration on the left (on desktop) */}
        <div className="md:w-2/5 w-full flex justify-center items-center">
          <div className="relative w-full max-w-[36rem] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-executive-light-blue/40">
            <Image
              src="/images/ChatGPT_Image_Mind_Engineering.png"
              alt="System Reprogramming Illustration"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Text content on the right (on desktop) */}
        <div className="md:w-3/5 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {(() => {
              if (!title) return null;
              const parts = title.split('You.v2');
              return (
                <>
                  {parts[0]}
                  <span className="relative text-[hsl(var(--executive-blue-dark))] font-bold inline-block">
                    You.v2
                    <span className="block h-2 w-full mt-1 rounded-full bg-gradient-to-r from-[hsl(var(--executive-blue-dark))] via-[hsl(var(--executive-blue))] to-transparent opacity-80 scale-x-110 -skew-x-12"></span>
                  </span>
                  {parts[1]}
                </>
              );
            })()}
          </h2>
          <ul className="space-y-6 mb-8">
            {Array.isArray(differentiators) && differentiators.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="shrink-0 transition-transform group-hover:scale-110">
                  {ICONS[item.icon] || <CheckCircle className="text-executive-blue w-7 h-7" />}
                </span>
                <div>
                  <div className="font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-muted-foreground text-base">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <blockquote>
            <span className="inline-flex items-center italic text-lg text-executive-blue bg-executive-light-blue/30 py-2 px-4 rounded-md border-l-4 border-executive-blue pl-4">
              {quote}
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
} 