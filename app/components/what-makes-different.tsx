import { CheckCircle, Timer, Cog, Lock } from 'lucide-react';
import Image from 'next/image';

const DIFFERENTIATORS = [
  {
    icon: <Timer className="text-executive-blue w-7 h-7" />,
    title: 'Structured 17-day sprint',
    desc: 'Not an open-ended process—get results fast with a proven protocol.'
  },
  {
    icon: <Cog className="text-executive-gold w-7 h-7" />,
    title: 'Personal engineering, not therapy',
    desc: 'Uses subconscious methods (regression, parts work) framed as personal engineering.'
  },
  {
    icon: <CheckCircle className="text-executive-blue w-7 h-7" />,
    title: 'Clear, lasting outcome',
    desc: 'Internal reprogramming that sticks—not just coping tools or advice.'
  },
  {
    icon: <Lock className="text-executive-gold w-7 h-7" />,
    title: 'Confidential & deep',
    desc: 'A safe space for complex emotional, behavioral, or compulsive patterns.'
  },
];

export default function WhatMakesDifferent() {
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
            What Makes <span className="gradient-text">You.v2</span> Different?
          </h2>
          <ul className="space-y-6 mb-8">
            {DIFFERENTIATORS.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="shrink-0 transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <div>
                  <div className="font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-muted-foreground text-base">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-executive-blue pl-4 italic text-lg text-executive-blue bg-executive-light-blue/30 py-3 rounded-md">
            "Other programs help you cope. We rewrite the code."
          </blockquote>
        </div>
      </div>
    </section>
  );
} 