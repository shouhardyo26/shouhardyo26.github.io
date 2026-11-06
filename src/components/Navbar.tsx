import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Language, Theme } from '../types';
import { NAV_ITEMS, TRANSLATIONS } from '../utils/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export default function Navbar({
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['hero', 'about', 'education', 'skills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const handleTalkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#080B18]/90 backdrop-blur-md py-3 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)] border-b border-slate-200 dark:border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo Zone: ST only with neon green accent dot */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] dark:focus-visible:ring-[#50BFFF] rounded-lg py-1 px-1 shrink-0"
            aria-label="ST Logo - Shouhardyo Islam Portfolio Home"
          >
            <div className="flex items-center">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                ST
              </span>
              <span
                className="w-2 h-2 ml-1 rounded-full bg-emerald-500 dark:bg-[#A1E342] shadow-[0_0_10px_#A1E342] group-hover:scale-125 transition-transform"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-white/5 backdrop-blur-md border border-slate-300 dark:border-white/10 shadow-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const label = language === 'bn' ? item.labelBn : item.labelEn;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-white/15 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 dark:bg-[#A1E342] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Zone: Language Switcher, Theme Toggle, Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg bg-slate-100 dark:bg-white/5 p-0.5 border border-slate-300 dark:border-white/10 text-xs font-semibold shadow-sm">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18] font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18] font-bold shadow-sm font-bangla'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bangla'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-sm transition-colors cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#A1E342]" /> : <Moon className="w-4 h-4 text-[#7656E8]" />}
            </button>

            {/* Let's Talk Button */}
            <button
              type="button"
              onClick={handleTalkClick}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-[#7656E8] to-[#0284c7] hover:from-[#6744df] hover:to-[#0369a1] dark:from-[#7656E8] dark:to-[#50BFFF] dark:hover:from-[#6646d8] dark:hover:to-[#38bdf8] transition-all duration-200 shadow-[0_4px_16px_rgba(118,86,232,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)] whitespace-nowrap cursor-pointer"
            >
              <span>{t.hero.talkBtn}</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-300 dark:text-[#A1E342] group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Action Zone: Language, Let's Talk, Theme, and Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            {/* 1. Mobile Language Switcher (Restored to previous size) */}
            <div className="flex items-center rounded-lg bg-slate-100/90 dark:bg-white/5 p-0.5 border border-slate-300 dark:border-white/10 text-[10px] font-semibold shadow-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18] font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-1.5 py-0.5 rounded transition-colors whitespace-nowrap cursor-pointer font-bangla ${
                  language === 'bn'
                    ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18] font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* 2. Mobile Let's Talk CTA (Restored to previous size) */}
            <button
              type="button"
              onClick={handleTalkClick}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-lg text-white bg-gradient-to-r from-[#7656E8] to-[#0284c7] hover:from-[#6744df] hover:to-[#0369a1] dark:from-[#7656E8] dark:to-[#50BFFF] shadow-[0_2px_10px_rgba(118,86,232,0.3)] active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              aria-label={t.hero.talkBtn}
            >
              <span>{t.hero.talkBtn}</span>
              <Sparkles className="w-2.5 h-2.5 text-emerald-300 dark:text-[#A1E342]" />
            </button>

            {/* 3. Mobile Theme Toggle Button */}
            <button
              type="button"
              onClick={onThemeToggle}
              className="p-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs cursor-pointer active:scale-95 transition-transform"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#A1E342]" /> : <Moon className="w-3.5 h-3.5 text-[#7656E8]" />}
            </button>

            {/* 4. Mobile Hamburger / Close Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-xs focus:outline-none cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#080B18]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-xl transition-all">
          <div className="flex flex-col gap-2 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const label = language === 'bn' ? item.labelBn : item.labelEn;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
            {/* Language Switcher Mobile */}
            <div className="flex items-center rounded-lg bg-slate-100 dark:bg-white/5 p-1 border border-slate-300 dark:border-white/10 text-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded font-semibold ${
                  language === 'en' ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18]' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-3 py-1.5 rounded font-semibold font-bangla ${
                  language === 'bn' ? 'bg-[#0284c7] dark:bg-[#50BFFF] text-white dark:text-[#080B18]' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                বাংলা
              </button>
            </div>

            <button
              type="button"
              onClick={handleTalkClick}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-[#7656E8] to-[#0284c7] dark:from-[#7656E8] dark:to-[#50BFFF] shadow-md"
            >
              {t.hero.talkBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
