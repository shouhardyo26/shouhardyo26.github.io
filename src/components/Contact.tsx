import { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Send,
  Facebook,
  Instagram,
  ArrowUpRight,
  Loader2,
} from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import {
  validateContactForm,
  formatMailtoUrl,
  formatGmailComposeUrl,
  formatWhatsAppUrl,
} from '../utils/validation';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = TRANSLATIONS[language];
  const formRef = useRef<HTMLFormElement>(null);

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [sentDetails, setSentDetails] = useState<ContactFormData | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setStatus('sending');
    const snapshot = { ...formData };
    setSentDetails(snapshot);

    // Submit natively to FormSubmit endpoint targeting hidden iframe (bypasses CORS restrictions)
    if (formRef.current) {
      formRef.current.submit();
    }

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0284c7] dark:text-[#50BFFF] mb-1.5">
            {t.contact.label}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            {t.contact.heading}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            {/* Email Card */}
            <div className="rounded-xl p-3.5 sm:p-4.5 bg-white/95 dark:bg-[#0B0B17]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#0284c7]/10 dark:bg-[#50BFFF]/10 text-[#0284c7] dark:text-[#50BFFF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {t.contact.emailLabel}
                    </p>
                    <a
                      href="mailto:shouhardyoislam@gmail.com"
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-[#0284c7] dark:hover:text-[#50BFFF] transition-colors break-all"
                    >
                      shouhardyoislam@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('shouhardyoislam@gmail.com', 'email')}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#A1E342]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copiedType === 'email' && (
                <p className="text-xs text-emerald-600 dark:text-[#A1E342] mt-1 font-medium">{t.contact.copySuccess}</p>
              )}
            </div>

            {/* Phone Card */}
            <div className="rounded-xl p-3.5 sm:p-4.5 bg-white/95 dark:bg-[#0B0B17]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#A1E342]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {t.contact.phoneLabel}
                    </p>
                    <a
                      href="tel:+8801319873020"
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-[#A1E342] transition-colors"
                    >
                      +880 1319-873020
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('+8801319873020', 'phone')}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#A1E342]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copiedType === 'phone' && (
                <p className="text-xs text-emerald-600 dark:text-[#A1E342] mt-1 font-medium">{t.contact.copySuccess}</p>
              )}
            </div>

            {/* WhatsApp Card */}
            <a
              href="http://wa.me/+8801319873020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#0B0B17]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm hover:border-emerald-500/50 group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.contact.whatsappLabel}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    +880 1319-873020
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Social Connection Cards (Facebook & Instagram only) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href="https://www.facebook.com/shouhardyo.islam.9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '370px', height: '55.3333px', maxWidth: '100%' }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/95 dark:bg-[#0B0B17]/60 border border-slate-200 dark:border-white/10 hover:border-[#1877F2]/50 shadow-sm transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    Facebook
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1877F2] transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/myself_shouhardyo_20/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '370px', maxWidth: '100%' }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/95 dark:bg-[#0B0B17]/60 border border-slate-200 dark:border-white/10 hover:border-[#E1306C]/50 shadow-sm transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    Instagram
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#E1306C] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <iframe
              name="contact_hidden_iframe"
              id="contact_hidden_iframe"
              title="Form Submission Target"
              className="hidden"
              aria-hidden="true"
            />
            <form
              ref={formRef}
              action="https://formsubmit.co/shouhardyoislam@gmail.com"
              method="POST"
              target="contact_hidden_iframe"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl p-5 sm:p-6 bg-white/95 dark:bg-[#0B0B17]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg space-y-3.5"
            >
              {/* FormSubmit Configuration Fields to deliver straight to shouhardyoislam@gmail.com */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value={formData.subject ? `[Portfolio] ${formData.subject}` : `Message from ${formData.name || 'Visitor'}`}
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your message! Shouhardyo Islam has received your email and will get back to you shortly."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.form.nameLabel} <span className="text-emerald-600 dark:text-[#A1E342]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.form.namePlaceholder}
                    className={`w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-white/5 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-white/10'
                    } text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0284c7] dark:focus:ring-[#50BFFF] transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.form.emailLabel} <span className="text-emerald-600 dark:text-[#A1E342]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-white/5 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-white/10'
                    } text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0284c7] dark:focus:ring-[#50BFFF] transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  {t.contact.form.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0284c7] dark:focus:ring-[#50BFFF] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  {t.contact.form.messageLabel} <span className="text-emerald-600 dark:text-[#A1E342]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  className={`w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-white/5 border ${
                    errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-white/10'
                  } text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0284c7] dark:focus:ring-[#50BFFF] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2.5 px-5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7656E8] to-[#0284c7] hover:from-[#6646d8] hover:to-[#0369a1] dark:from-[#7656E8] dark:to-[#50BFFF] dark:hover:from-[#6646d8] dark:hover:to-[#38bdf8] shadow-[0_4px_14px_rgba(118,86,232,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.contact.form.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.form.submitBtn}</span>
                  </>
                )}
              </button>

              {/* Direct Quick Links */}
              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>{language === 'bn' ? 'অথবা সরাসরি পাঠান:' : 'Or reach directly via:'}</span>
                <div
                  style={{ width: '250.781px', height: '30.3333px' }}
                  className="flex items-center gap-2.5"
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shouhardyoislam@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '80.5417px', height: '40px', display: 'inline-flex', alignItems: 'center' }}
                    className="text-[#0284c7] dark:text-[#50BFFF] hover:underline font-semibold flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ea4335]" />
                    Gmail Web
                  </a>
                  <span>•</span>
                  {/* WhatsApp Quick Action Button with enlarged logo as requested */}
                  <a
                    href="http://wa.me/+8801319873020"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '120.333px', height: '30.3333px', display: 'inline-flex', alignItems: 'center' }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-[#25D366] border border-emerald-500/30 font-bold hover:scale-105 transition-all text-xs"
                    title="Open WhatsApp Chat (+880 1319-873020)"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Success Notification Panel */}
              {status === 'success' && sentDetails && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-[#A1E342]" />
                    <span>{t.contact.form.successMsg}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    {language === 'bn'
                      ? 'বার্তাটি shouhardyoislam@gmail.com এ পাঠানো হয়েছে। আপনি চাইলে নিচে ক্লিক করে জিমেইলে বা হোয়াটসঅ্যাপেও সরাসরি পাঠাতে পারেন:'
                      : 'Message dispatched to shouhardyoislam@gmail.com. You can also send a direct one-click copy via Gmail or WhatsApp:'}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=shouhardyoislam@gmail.com&su=${encodeURIComponent(sentDetails.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(sentDetails.message + '\n\n---\nFrom: ' + sentDetails.name + ' (' + sentDetails.email + ')')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#ea4335] text-white hover:bg-[#d93025] transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{t.contact.form.openGmailBtn}</span>
                    </a>
                    <a
                      href={`http://wa.me/+8801319873020?text=${encodeURIComponent('Hello Shouhardyo, I am ' + sentDetails.name + ' (' + sentDetails.email + '). ' + sentDetails.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span>{t.contact.form.openWhatsAppBtn}</span>
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
