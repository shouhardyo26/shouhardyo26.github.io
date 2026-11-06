import { Brain, Monitor, Target, Users, Compass, Eye } from 'lucide-react';
import { Language } from '../types';
import { EXPLORE_CARDS, TRANSLATIONS } from '../utils/translations';

interface WhatIDoProps {
  language: Language;
}

export default function WhatIDo({ language }: WhatIDoProps) {
  const t = TRANSLATIONS[language];

  const getExploreIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      case 'Target':
        return <Target className="w-4 h-4 text-[#7656E8]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      case 'Eye':
        return <Eye className="w-4 h-4 text-[#7656E8]" />;
      default:
        return <Brain className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
    }
  };

  return (
    <section className="py-8 lg:py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-5 sm:mb-6">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#0284c7] dark:text-[#50BFFF] mb-1">
            {t.explore.label}
          </p>
          <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
            {t.explore.heading}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 italic">
            "{t.explore.intro}"
          </p>
        </div>

        {/* 6 Compact Numbered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {EXPLORE_CARDS.map((card) => {
            const heading = language === 'bn' ? card.headingBn : card.headingEn;
            const desc = language === 'bn' ? card.descBn : card.descEn;

            return (
              <div
                key={card.number}
                className="group relative rounded-xl p-3 sm:p-3.5 bg-white/95 dark:bg-[#0B0B17]/60 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#0284c7]/40 dark:hover:border-white/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-heading font-extrabold text-[11px] text-[#15803d] dark:text-[#A1E342]">
                    {card.number}
                  </span>
                  <div className="p-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {getExploreIcon(card.iconName)}
                  </div>
                </div>

                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white mb-0.5 group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                  {heading}
                </h3>

                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
