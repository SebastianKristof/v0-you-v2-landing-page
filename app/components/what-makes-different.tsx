import { useLanguage } from '@/contexts/language-context';
import { CheckCircle, Timer, Cog, Lock } from 'lucide-react';
import Image from 'next/image';

const ICONS = {
  'timer': <Timer className="text-executive-blue w-7 h-7" />,
  'cog': <Cog className="text-executive-gold w-7 h-7" />,
  'check-circle': <CheckCircle className="text-executive-blue w-7 h-7" />,
  'lock': <Lock className="text-executive-gold w-7 h-7" />,
};

export default function WhatMakesDifferent() {
  const { t } = useLanguage();
  const differentiators = t('whatMakesDifferent.differentiators', { returnObjects: true }) || [];
  const quote = t('whatMakesDifferent.quote');
  const title = t('whatMakesDifferent.title');

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Illustration on the left (on desktop) */}
        <div className="md:w-2/5 w-full flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/placeholder-logo.png"
              alt="System Reprogramming Illustration"
              fill
              className="object-contain rounded-xl shadow-lg bg-executive-light-blue/40"
              priority
            />
          </div>
        </div>
        {/* Text content on the right (on desktop) */}
        <div className="md:w-3/5 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <ul className="space-y-6 mb-8">
            {Array.isArray(differentiators) && differentiators.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="shrink-0 transition-transform group-hover:scale-110">
                  {ICONS[item.icon]}
                </span>
                <div>
                  <div className="font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-muted-foreground text-base">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-executive-blue pl-4 italic text-lg text-executive-blue bg-executive-light-blue/30 py-3 rounded-md">
            {quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
} 