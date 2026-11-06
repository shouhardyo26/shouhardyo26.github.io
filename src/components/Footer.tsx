import { ArrowUp, FileText } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  language: Language;
  onOpenCvModal: () => void;
}

export default function Footer({ language, onOpenCvModal }: FooterProps) {
  const t = TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#080B18] relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo ST with verified spelling সৌহার্দ্য */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                ST
              </span>
              <span className="w-1.5 h-1.5 ml-1 rounded-full bg-emerald-500 dark:bg-[#A1E342]" />
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'bn' ? 'সৌহার্দ্য ইসলাম · ব্যক্তিগত পোর্টফোলিও' : 'Shouhardyo Islam · Personal Portfolio'}
            </span>
          </div>

          {/* Center: Tagline & CV Link */}
          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <span className="italic">"Dream. Learn. Create. Become."</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1 text-[#0284c7] dark:text-[#50BFFF] hover:underline cursor-pointer font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.cvText}</span>
            </button>
          </div>

          {/* Right: Copyright & Back to top button */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end text-right">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} {t.footer.rights}
              </p>
              <p
                style={{
                  width: '120.521px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
                className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-tight"
              >
                developed by shouhardyo
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer shadow-sm"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
