import {
  X,
  Download,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Award,
  Cpu,
} from 'lucide-react';
import { Language } from '../types';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function CVModal({ isOpen, onClose, language }: CVModalProps) {
  if (!isOpen) return null;

  const pdfUrl = `${import.meta.env.BASE_URL}assets/Shouhardyo-Islam-CV.pdf`;

  const triggerDownload = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error('Fetch failed');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Shouhardyo-Islam-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Shouhardyo-Islam-CV.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0B0B17] rounded-2xl border border-slate-300 dark:border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080B18]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#7656E8]/10 text-[#7656E8]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'bn' ? 'সৌহার্দ্য ইসলাম — অফিসিয়াল সিভি' : 'Shouhardyo Islam — Official CV'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'bn' ? 'যাচাইকৃত প্রাতিষ্ঠানিক ও প্রযুক্তিগত জীবনবৃত্তান্ত' : 'Verified Academic & Technical Curriculum Vitae'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Shouhardyo-Islam-CV.pdf"
              onClick={triggerDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#0284c7] hover:bg-[#0369a1] dark:bg-[#50BFFF] dark:hover:bg-[#38bdf8] text-white dark:text-[#080B18] transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'ডাউনলোড PDF' : 'Download PDF'}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: CV Download & Credentials Page */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-h-[620px] bg-slate-50 dark:bg-[#080B18]/90">
          <div className="space-y-6">
              {/* Document Header Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0B17] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    SHOUHARDYO ISLAM
                  </h4>
                  <p className="text-xs font-semibold text-[#0284c7] dark:text-[#50BFFF] mt-0.5 uppercase tracking-wider">
                    Student · AI & Technology Enthusiast · Aspiring Web Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Manirampur, Jashore, Khulna, Bangladesh · shouhardyoislam@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={pdfUrl}
                    download="Shouhardyo-Islam-CV.pdf"
                    onClick={triggerDownload}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#0284c7] hover:bg-[#0369a1] dark:bg-[#A1E342] text-white dark:text-[#080B18] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'পিডিএফ ডাউনলোড (মূল কপি)' : 'Save PDF (Original)'}</span>
                  </a>
                </div>
              </div>

              {/* Verified Academic Credentials Section */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0B17] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
                  <GraduationCap className="w-5 h-5 text-[#0284c7] dark:text-[#50BFFF]" />
                  <h5 className="font-bold text-slate-900 dark:text-white">
                    Verified Academic Records (Official CV)
                  </h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* HSC */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#15803d] dark:text-[#A1E342]">Currently Studying</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Session 2026–2027</span>
                    </div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Higher Secondary Certificate (HSC)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Manirampur Govt. Degree College · Science Group
                    </p>
                  </div>

                  {/* SSC */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0284c7] dark:text-[#50BFFF]">GPA 5.00 (A+)</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">2025</span>
                    </div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Secondary School Certificate (SSC)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Board of Intermediate and Secondary Education
                    </p>
                  </div>

                  {/* JSC */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0284c7] dark:text-[#50BFFF]">GPA 5.00</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">2022</span>
                    </div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Junior School Certificate (JSC)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Academic Excellence Recognition
                    </p>
                  </div>

                  {/* PSC */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0284c7] dark:text-[#50BFFF]">GPA 5.00</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">2019</span>
                    </div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Primary School Certificate (PSC)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Foundational Academic Honors
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools & Professional Focus */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0B17] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
                  <Cpu className="w-5 h-5 text-[#7656E8]" />
                  <h5 className="font-bold text-slate-900 dark:text-white">
                    Verified Tools & Technologies
                  </h5>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['GitHub', 'Microsoft Excel', 'Fusion 360', 'Unity Game Engine', 'YOLO', 'Google Gemini', 'ChatGPT'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 bg-slate-50 dark:bg-[#080B18] border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#50BFFF]" />
              Manirampur Govt. Degree College
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#A1E342]" />
              Science Group · Academic Session 2026–2027
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Shouhardyo-Islam-CV.pdf"
              onClick={triggerDownload}
              className="font-bold text-[#0284c7] dark:text-[#A1E342] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'ফাইল ডাউনলোড' : 'Download Shouhardyo-Islam-CV.pdf'}</span>
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">|</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#50BFFF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>{language === 'bn' ? 'পূর্ণ স্ক্রিনে খুলুন' : 'Open in new tab'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
