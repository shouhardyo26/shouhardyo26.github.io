import { Compass, Lightbulb, TrendingUp, Sparkles, Gamepad2 } from 'lucide-react';
import { Language } from '../types';
import { GOAL_CARDS, TRANSLATIONS } from '../utils/translations';

interface FutureVisionProps {
  language: Language;
}

export default function FutureVision({ language }: FutureVisionProps) {
  const t = TRANSLATIONS[language];

  const goalIcons = [
    <Compass key="1" className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />,
    <Lightbulb key="2" className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />,
    <TrendingUp key="3" className="w-4 h-4 text-[#7656E8]" />,
  ];

  return (
    <section className="py-10 lg:py-12 relative overflow-hidden">
      {/* Subtle background ambient orb */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[250px] bg-[#7656E8]/10 dark:bg-[#7656E8]/10 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left: Inspiring Personal Statement */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-[11px] uppercase tracking-widest font-bold text-[#7656E8] dark:text-[#50BFFF]">
              {t.futureVision.label}
            </p>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.futureVision.heading}
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {t.futureVision.statement.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Note Box + eFootball PES ID Box side-by-side */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
              {/* Closing statement note box */}
              <div className="flex-1 p-3 sm:p-3.5 rounded-xl bg-[#c7f8cd] dark:bg-white/[0.06] border border-emerald-400/50 dark:border-white/10 shadow-sm flex items-center">
                <p className="text-xs sm:text-[13px] font-semibold text-[#1a2806] dark:text-[#A1E342] italic leading-snug">
                  "{t.futureVision.closing}"
                </p>
              </div>

              {/* eFootball PES ID Box */}
              <div className="sm:w-48 p-2.5 sm:p-3 rounded-xl bg-white/95 dark:bg-white/[0.06] border border-slate-300 dark:border-white/10 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7656E8] dark:text-[#50BFFF] uppercase tracking-wider">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#50BFFF] shrink-0" />
                  <span>EFOOTBALL (Pes)</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1 text-xs text-slate-700 dark:text-slate-300">
                  <span
                    style={{
                      width: '100.7188px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="font-mono font-bold text-slate-900 dark:text-[#A1E342] bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-[11px] border border-slate-200 dark:border-white/10"
                  >
                    ST_Arena
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Goal Cards (01 LEARN, 02 CREATE, 03 GROW) */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            {GOAL_CARDS.map((card, idx) => {
              const title = language === 'bn' ? card.titleBn : card.titleEn;
              const desc = language === 'bn' ? card.descBn : card.descEn;

              return (
                <div
                  key={card.number}
                  className="group relative rounded-xl p-3 sm:p-3.5 bg-white/95 dark:bg-[#0B0B17]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm hover:border-[#0284c7]/40 dark:hover:border-white/25 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-400 dark:text-slate-500 group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                      {card.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading text-sm sm:text-base font-bold tracking-wide text-slate-900 dark:text-white">
                          {title}
                        </h3>
                        <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                          {goalIcons[idx]}
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
