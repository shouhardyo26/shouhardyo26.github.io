import { Quote } from 'lucide-react';
import { Language } from '../types';

interface MotivationalQuoteProps {
  language: Language;
}

export default function MotivationalQuote({ language }: MotivationalQuoteProps) {
  return (
    <section
      style={{ width: '770px', height: '245.167px', maxWidth: '100%', margin: '0 auto' }}
      className="py-8 lg:py-10 relative overflow-hidden"
    >
      {/* Cinematic dark background & subtle blue/purple lights */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#7656E8]/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-[#50BFFF]/10 rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          style={{ width: '690px', height: '180.167px', maxWidth: '100%' }}
          className="relative rounded-2xl p-6 sm:p-8 bg-white/95 dark:bg-[#0B0B17]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm max-w-2xl mx-auto transition-all flex flex-col justify-center"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-3 shadow-sm">
            <Quote className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />
          </div>

          <blockquote className="space-y-2">
            {language === 'bn' ? (
              <p className="font-bangla text-base sm:text-lg lg:text-xl font-semibold leading-relaxed text-slate-900 dark:text-white max-w-xl mx-auto">
                "স্বপ্ন সেটা নয় যা তুমি ঘুমিয়ে দেখ,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#15803d] to-[#7656E8] dark:from-[#50BFFF] dark:via-[#A1E342] dark:to-[#7656E8] underline decoration-[#0284c7]/40 dark:decoration-[#50BFFF]/40 underline-offset-4">
                  স্বপ্ন সেটাই যা তোমাকে ঘুমোতে দেয় না।
                </span>
                "
              </p>
            ) : (
              <p className="font-heading italic text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-900 dark:text-white max-w-xl mx-auto">
                "Dream is not that which you see while sleeping,{' '}
                <span className="not-italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#15803d] to-[#7656E8] dark:from-[#50BFFF] dark:via-[#A1E342] dark:to-[#7656E8] underline decoration-[#0284c7]/40 dark:decoration-[#50BFFF]/40 underline-offset-4">
                  it is something that does not let you sleep.
                </span>
                "
              </p>
            )}

            <footer className="pt-2">
              <cite className="not-italic text-xs font-bold tracking-widest uppercase text-[#0284c7] dark:text-[#50BFFF]">
                — {language === 'bn' ? 'সৌহার্দ্য' : 'Shouhardyo'}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
