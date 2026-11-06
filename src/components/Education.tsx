import { GraduationCap, Compass, Laptop, Rocket, Sparkles, FileText } from 'lucide-react';
import { Language } from '../types';
import { TIMELINE_DATA, TRANSLATIONS } from '../utils/translations';

interface EducationProps {
  language: Language;
  onOpenCvModal: () => void;
}

export default function Education({ language, onOpenCvModal }: EducationProps) {
  const t = TRANSLATIONS[language];

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'foundation':
        return <GraduationCap className="w-5 h-5 text-[#50BFFF]" />;
      case 'current-focus':
        return <Compass className="w-5 h-5 text-[#A1E342]" />;
      case 'self-directed':
        return <Laptop className="w-5 h-5 text-[#7656E8]" />;
      case 'next-chapter':
        return <Rocket className="w-5 h-5 text-[#50BFFF]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#50BFFF]" />;
    }
  };

  return (
    <section id="education" className="py-10 lg:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-widest font-bold text-[#15803d] dark:text-[#A1E342] mb-1">
              {t.education.label}
            </p>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1.5">
              {t.education.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t.education.subtext}
            </p>
          </div>

          {/* Clean unboxed CV reference badge */}
          <button
            type="button"
            onClick={onOpenCvModal}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 shadow-sm transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#50BFFF]" />
            <span>{t.education.viewCvNote}</span>
          </button>
        </div>

        {/* 4 Connected Learning Stages Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop center / Mobile left) */}
          <div
            className="absolute top-5 bottom-5 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#50BFFF]/40 via-[#A1E342]/60 to-[#7656E8]/40"
            aria-hidden="true"
          />

          <div className="space-y-4 sm:space-y-5">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const label = language === 'bn' ? item.labelBn : item.labelEn;
              const heading = language === 'bn' ? item.headingBn : item.headingEn;
              const desc = language === 'bn' ? item.descBn : item.descEn;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Stage Node Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[#080B18] border-2 border-slate-300 dark:border-white/20 shadow-md z-10">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.isCurrent
                          ? 'bg-emerald-50 dark:bg-[#A1E342]/20 border border-emerald-400 dark:border-[#A1E342]'
                          : 'bg-slate-100 dark:bg-white/5'
                      }`}
                    >
                      {getStageIcon(item.id)}
                    </div>
                  </div>

                  {/* Card Content (Offset for left line on mobile via internal padding, alternates on desktop) */}
                  <div
                    className={`w-full pl-11 sm:pl-12 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                  >
                    <div
                      className={`relative rounded-xl p-3 sm:p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${
                        item.isCurrent
                          ? 'bg-white dark:bg-[#0B0B17]/90 border border-emerald-400 dark:border-[#A1E342]/60 shadow-md dark:shadow-[0_0_16px_rgba(161,227,66,0.1)]'
                          : 'bg-white/95 dark:bg-[#0B0B17]/60 border border-slate-200 dark:border-white/10 shadow-sm'
                      }`}
                    >
                      {/* Label + Active Badge */}
                      <div
                        className={`flex items-center gap-2 mb-1 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#0284c7] dark:text-[#50BFFF]">
                          {label}
                        </span>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-800 dark:text-[#A1E342] bg-emerald-100/80 dark:bg-[#A1E342]/10 px-1.5 py-0.5 rounded-full border border-emerald-300 dark:border-[#A1E342]/30">
                            <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-[#A1E342]" />
                            {language === 'bn' ? 'চলমান পর্যায়' : 'Current Pursuit'}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                        {heading}
                      </h3>

                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
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
