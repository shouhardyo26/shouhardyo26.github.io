import { Trophy, Gamepad2, Sprout, Compass, Terminal, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { INTEREST_CARDS, TRANSLATIONS } from '../utils/translations';

interface BeyondTheDeskProps {
  language: Language;
}

export default function BeyondTheDesk({ language }: BeyondTheDeskProps) {
  const t = TRANSLATIONS[language];

  const getInterestIcon = (name: string) => {
    switch (name) {
      case 'Trophy':
        return <Trophy className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-4 h-4 text-[#7656E8]" />;
      case 'Sprout':
        return <Sprout className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#7656E8]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
    }
  };

  return (
    <section className="py-10 lg:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact introductory prose */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#15803d] dark:text-[#A1E342] mb-1">
            {t.interests.label}
          </p>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            {t.interests.heading}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {t.interests.intro}
          </p>
        </div>

        {/* Two-Column Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {INTEREST_CARDS.map((item) => {
            const title = language === 'bn' ? item.titleBn : item.titleEn;
            const desc = language === 'bn' ? item.descBn : item.descEn;

            return (
              <div
                key={item.id}
                className="group relative rounded-xl p-3 sm:p-3.5 bg-white/95 dark:bg-[#0B0B17]/75 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#0284c7]/50 dark:hover:border-[#50BFFF]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform">
                    {getInterestIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {desc}
                </p>

                {item.id === 'gaming' && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-1 text-[11px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wider">
                      EFOOTBALL (Pes)
                    </span>
                    <span
                      style={{
                        width: '80.3125px',
                        height: '21.3333px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="font-mono font-bold text-[#0284c7] dark:text-[#A1E342] bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 dark:border-white/10"
                    >
                      ID: ST_Arena
                    </span>
                  </div>
                )}

                <div
                  className="absolute inset-x-3 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0284c7]/20 dark:via-[#50BFFF]/20 to-transparent group-hover:via-[#0284c7]/50 dark:group-hover:via-[#50BFFF]/50 transition-all"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
