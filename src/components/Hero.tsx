import { useState, useEffect } from 'react';
import { ArrowRight, Download, MessageSquare, Briefcase, MapPin, Sparkles, Terminal } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, HERO_TITLES_EN, HERO_TITLES_BN } from '../utils/translations';

interface HeroProps {
  language: Language;
  onOpenCvModal: () => void;
}

export default function Hero({ language, onOpenCvModal }: HeroProps) {
  const t = TRANSLATIONS[language];
  const titles = language === 'bn' ? HERO_TITLES_BN : HERO_TITLES_EN;

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated titles
  useEffect(() => {
    const currentTitle = titles[titleIndex % titles.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glow Lights */}
      <div
        className="pointer-events-none absolute top-1/4 -left-40 w-96 h-96 bg-[#7656E8]/20 dark:bg-[#7656E8]/20 rounded-full blur-[128px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-[#50BFFF]/15 dark:bg-[#50BFFF]/15 rounded-full blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 w-64 h-64 bg-[#A1E342]/10 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Narrative, Titles & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#A1E342] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-700 dark:text-slate-300">
                {t.hero.kicker}
              </span>
            </div>

            {/* Name Lockup with Bangla secondary identity */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {language === 'bn' ? 'সৌহার্দ্য ইসলাম' : 'Shouhardyo Islam'}
                </h1>
                <span className="font-bangla text-2xl sm:text-3xl font-semibold text-[#0284c7] dark:text-[#50BFFF] tracking-wide">
                  ({t.hero.banglaName})
                </span>
              </div>

              {/* Exact Tagline directly under name */}
              <p className="text-base sm:text-lg lg:text-xl font-medium tracking-wide bg-gradient-to-r from-[#0284c7] via-[#7656E8] to-[#15803d] dark:from-[#A1E342] dark:via-[#50BFFF] dark:to-[#7656E8] bg-clip-text text-transparent">
                "Dream. Learn. Create. Become."
              </p>
            </div>

            {/* Dynamic Animated Professional Titles */}
            <div className="flex items-center gap-2.5 h-10 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 shadow-sm w-fit">
              <Terminal className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-200">
                {displayText}
              </span>
              <span className="w-1.5 h-4 bg-emerald-500 dark:bg-[#A1E342] animate-pulse" />
            </div>

            {/* Exact hero description paragraph (no edits or shortening) */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl text-wrap-balance">
              {language === 'bn'
                ? t.hero.description
                : 'I am Shouhardyo Islam— a student, curious technologist, and creative mind steadily shaping my craft across modern web design, visual storytelling, and digital media, one deliberate step each day.'}
            </p>

            {/* Hero CTA Button Trio */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* 1. Hire Me (Scrolls to Contact) */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7656E8] to-[#0284c7] hover:from-[#6744df] hover:to-[#0369a1] dark:from-[#7656E8] dark:to-[#50BFFF] dark:hover:from-[#6744df] dark:hover:to-[#38bdf8] shadow-[0_4px_20px_rgba(118,86,232,0.35)] hover:shadow-[0_6px_24px_rgba(2,132,199,0.45)] transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>{t.hero.hireBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 2. Explore About Me (Scrolls to Education section) */}
              <button
                type="button"
                onClick={() => scrollToSection('education')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 shadow-sm transition-all cursor-pointer"
              >
                <span>{t.hero.aboutBtn}</span>
              </button>

              {/* 3. Download CV: Opens CV modal preview where user can inspect & download Shouhardyo-Islam-CV.pdf */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-emerald-800 dark:text-[#A1E342] bg-emerald-50 dark:bg-[#A1E342]/10 hover:bg-emerald-100 dark:hover:bg-[#A1E342]/20 border border-emerald-300 dark:border-[#A1E342]/30 shadow-sm transition-all cursor-pointer"
                aria-label={t.hero.downloadCvBtn}
                title={language === 'bn' ? 'সিভি প্রিভিউ ও ডাউনলোড' : 'Preview & Download CV'}
              >
                <Download className="w-4 h-4" />
                <span>{t.hero.downloadCvBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Actual Real Portrait with Cinematic Frame & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative group max-w-[380px] sm:max-w-[420px] w-full">
              {/* Animated Gradient Border Aura */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#7656E8] via-[#50BFFF] to-[#A1E342] opacity-70 blur-xl group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Portrait Container Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B0B17] dark:bg-[#0B0B17] bg-slate-100 border-2 border-white/15 dark:border-white/15 border-slate-300 shadow-2xl aspect-[4/5] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/portrait.jpg`}
                  alt="Shouhardyo Islam Portrait"
                  className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* 1. Top-Left Floating Role Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080B18]/85 dark:bg-[#080B18]/90 bg-slate-900/85 backdrop-blur-md border border-white/15 dark:border-white/20 shadow-lg text-xs font-semibold text-slate-100">
                  <Sparkles className="w-3.5 h-3.5 text-[#50BFFF]" />
                  <span>Student & Creative Gamer</span>
                </div>

                {/* 2. Top-Right "DREAMER" Badge with distinct vibrant neon color (Positioned exactly as requested) */}
                <div
                  style={{
                    paddingLeft: '11px',
                    paddingRight: '11px',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    marginLeft: '0px',
                    marginRight: '-5px',
                    marginTop: '30px',
                  }}
                  className="absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080B18]/85 dark:bg-[#080B18]/90 backdrop-blur-md border border-[#A1E342]/60 shadow-[0_0_14px_rgba(161,227,66,0.35)] text-xs font-extrabold text-[#A1E342] tracking-wider uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A1E342] animate-pulse" />
                  <span>{language === 'bn' ? 'ড্রিমার' : 'DREAMER'}</span>
                </div>

                {/* 3. Bottom Overlay: Smaller Name placed directly above Jashore, Bangladesh badge (Black scrim removed) */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-end z-20 pointer-events-none">
                  <div
                    style={{
                      paddingLeft: '0px',
                      paddingRight: '10px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                      marginLeft: '0px',
                      marginTop: '0px',
                      marginBottom: '-11px',
                      marginRight: '-11px',
                      width: '210px',
                      height: '60px',
                    }}
                    className="pointer-events-auto flex flex-col items-end gap-1.5 px-3.5 py-2 rounded-2xl bg-[#080B18]/80 backdrop-blur-md border border-white/15 shadow-xl"
                  >
                    <h3
                      style={{ marginRight: '2px' }}
                      className="font-heading text-xs sm:text-sm font-bold text-white tracking-wide leading-tight drop-shadow-sm"
                    >
                      {language === 'bn' ? 'সৌহার্দ্য ইসলাম' : 'Shouhardyo Islam'}
                    </h3>
                    <div
                      style={{
                        marginRight: '-3px',
                        marginBottom: '0px',
                        marginTop: '-2px',
                      }}
                      className="px-2.5 py-1 rounded-xl bg-[#50BFFF]/20 border border-[#50BFFF]/45 text-[#50BFFF] text-[11px] font-extrabold tracking-wider uppercase shadow-[0_0_12px_rgba(80,191,255,0.25)] flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#A1E342]" />
                      <span>{language === 'bn' ? 'যশোর, বাংলাদেশ' : 'Jashore, Bangladesh'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
