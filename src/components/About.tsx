import { BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const t = TRANSLATIONS[language];

  const cardIcons = [
    <BookOpen key="1" className="w-5 h-5 text-[#0284c7] dark:text-[#50BFFF]" />,
    <Layers key="2" className="w-5 h-5 text-[#7656E8]" />,
    <ShieldCheck key="3" className="w-5 h-5 text-[#15803d] dark:text-[#A1E342]" />,
  ];

  return (
    <section id="about" className="py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0284c7] dark:text-[#50BFFF] mb-1.5">
            {t.about.label}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.about.heading}
          </h2>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t.about.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {t.about.cards.map((card, idx) => (
            <div
              key={card.label}
              className="group relative rounded-xl p-4 sm:p-5 bg-white/95 dark:bg-[#0B0B17]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#0284c7]/40 dark:hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  {card.label}
                </span>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  {cardIcons[idx]}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                "{card.desc}"
              </p>

              {/* Bottom Subtle Ambient Border Glow */}
              <div
                className="absolute inset-x-4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0284c7]/20 dark:via-[#50BFFF]/30 to-transparent group-hover:via-[#0284c7]/50 dark:group-hover:via-[#50BFFF]/70 transition-all"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
