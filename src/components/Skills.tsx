import {
  Cpu,
  Code2,
  Eye,
  TrendingUp,
  Search,
  Layout,
  Share2,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { SKILLS_DATA, TRANSLATIONS } from '../utils/translations';

interface SkillsProps {
  language: Language;
}

export default function Skills({ language }: SkillsProps) {
  const t = TRANSLATIONS[language];

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Cpu className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'programming':
        return <Code2 className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      case 'computer-vision':
        return <Eye className="w-4 h-4 text-[#7656E8]" />;
      case 'digital-marketing':
        return <TrendingUp className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'web-research':
        return <Search className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      case 'website-design':
        return <Layout className="w-4 h-4 text-[#7656E8]" />;
      case 'social-media':
        return <Share2 className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
      case 'ai-tools':
        return <Sparkles className="w-4 h-4 text-[#15803d] dark:text-[#A1E342]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#0284c7] dark:text-[#50BFFF]" />;
    }
  };

  return (
    <section id="skills" className="py-10 lg:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#0284c7] dark:text-[#50BFFF] mb-1">
            {t.skills.label}
          </p>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1.5">
            {t.skills.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t.skills.subtext}
          </p>
        </div>

        {/* 8 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {SKILLS_DATA.map((skill, index) => {
            const title = language === 'bn' ? skill.titleBn : skill.titleEn;
            const desc = language === 'bn' ? skill.descBn : skill.descEn;

            return (
              <div
                key={skill.id}
                className="group relative rounded-xl p-3 sm:p-3.5 bg-white/95 dark:bg-[#0B0B17]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#0284c7]/40 dark:hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0284c7] dark:group-hover:text-[#50BFFF] transition-colors">
                  {title}
                </h3>

                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {desc}
                </p>

                {/* Subtle bottom line hover effect */}
                <div
                  className="absolute inset-x-3 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0284c7]/20 dark:via-[#7656E8]/30 to-transparent group-hover:via-[#15803d]/50 dark:group-hover:via-[#A1E342]/60 transition-all"
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
