/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUp } from 'lucide-react';
import { Language, Theme } from './types';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import FutureVision from './components/FutureVision';
import Skills from './components/Skills';
import BeyondTheDesk from './components/BeyondTheDesk';
import WhatIDo from './components/WhatIDo';
import MotivationalQuote from './components/MotivationalQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'bn' ? 'bn' : 'en';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync language with localStorage
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  // Sync theme with HTML class and localStorage
  const handleThemeToggle = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  // Track scroll progress and toggle scroll-to-top arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollY > 260);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (document.body) {
      document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/90 dark:bg-[#080B18] text-slate-900 dark:text-[#F5F5FA] transition-colors duration-300 relative selection:bg-[#7656E8]/30 selection:text-white">
      {/* Top Reading Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#7656E8] via-[#0284c7] to-[#15803d] dark:via-[#50BFFF] dark:to-[#A1E342] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Desktop-Only BMW Sports Car Cursor */}
      <CustomCursor />

      {/* 01. Navigation */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />

      <main>
        {/* 02. Hero */}
        <Hero language={language} onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 03. About Me */}
        <About language={language} />

        {/* 04. Education & Learning Journey */}
        <Education language={language} onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 05. Future Vision & Personal Goals */}
        <FutureVision language={language} />

        {/* 06 & 07. Skills & Expertise + Software & Technology */}
        <Skills language={language} />

        {/* 08. Beyond the Desk */}
        <BeyondTheDesk language={language} />

        {/* 09. What I Do & Explore */}
        <WhatIDo language={language} />

        {/* 10. Personal Motivational Quote */}
        <MotivationalQuote language={language} />

        {/* 11. Contact */}
        <Contact language={language} />
      </main>

      {/* 12. Footer */}
      <Footer language={language} onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Verified CV Preview & Download Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        language={language}
      />

      {/* Floating Eye-Catching Scroll-to-Top Arrow Button (Appears only when scrolled down from the top page) */}
      {mounted &&
        createPortal(
          <button
            id="floating-scroll-to-top"
            type="button"
            onClick={handleScrollToTop}
            aria-label={language === 'bn' ? 'উপরে যান' : 'Scroll to top'}
            title={language === 'bn' ? 'উপরে যান' : 'Back to top'}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '14px',
              zIndex: 99999,
              opacity: showScrollTop ? 1 : 0,
              pointerEvents: showScrollTop ? 'auto' : 'none',
              transform: showScrollTop ? 'scale(1)' : 'scale(0.75)',
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#7656E8] via-[#0284c7] to-[#10b981] dark:from-[#7656E8] dark:via-[#50BFFF] dark:to-[#A1E342] text-white border-2 border-white shadow-[0_0_20px_rgba(118,86,232,0.8),0_4px_14px_rgba(2,132,199,0.5)] hover:shadow-[0_0_28px_rgba(80,191,255,0.95)] hover:scale-115 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
          </button>,
          document.body
        )}
    </div>
  );
}
