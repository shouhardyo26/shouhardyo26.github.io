import {
  NavItem,
  SkillItem,
  TechItem,
  TimelineCard,
  InterestCard,
  ExploreCard,
  GoalCard,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', labelEn: 'Home', labelBn: 'হোম', href: '#hero' },
  { id: 'about', labelEn: 'About', labelBn: 'সম্পর্কে', href: '#about' },
  { id: 'education', labelEn: 'Education', labelBn: 'শিক্ষা', href: '#education' },
  { id: 'skills', labelEn: 'Skills', labelBn: 'দক্ষতা', href: '#skills' },
  { id: 'contact', labelEn: 'Contact', labelBn: 'যোগাযোগ', href: '#contact' },
];

export const HERO_TITLES_EN = [
  'Student',
  'Technology Enthusiast',
  'AI Explorer',
  'Creative Mind',
  'Aspiring Web Developer',
];

export const HERO_TITLES_BN = [
  'শিক্ষার্থী',
  'প্রযুক্তি অনুরাগী',
  'এআই এক্সপ্লোরার',
  'সৃজনশীল মনন',
  'উদীয়মান ওয়েব ডেভেলপার',
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'ai',
    titleEn: 'Artificial Intelligence (AI)',
    titleBn: 'কৃত্রিম বুদ্ধিমত্তা (AI)',
    descEn: 'Exploring neural networks, modern machine learning fundamentals, and smart automated workflows.',
    descBn: 'নিউরাল নেটওয়ার্ক, আধুনিক মেশিন লার্নিং এবং স্মার্ট অটোমেশন সিস্টেমের গভীর অনুসন্ধান।',
    iconName: 'Cpu',
  },
  {
    id: 'programming',
    titleEn: 'Programming',
    titleBn: 'প্রোগ্রামিং',
    descEn: 'Building algorithmic problem-solving habits and foundational code structures across languages.',
    descBn: 'অ্যালগরিদমিক সমস্যা সমাধান ও যুক্তিভিত্তিক কোডিং কাঠামোর ধারাবাহিক অনুশীলন।',
    iconName: 'Code2',
  },
  {
    id: 'computer-vision',
    titleEn: 'Computer Vision',
    titleBn: 'কম্পিউটার ভিশন',
    descEn: 'Studying real-time object detection, image classification, and visual spatial understanding.',
    descBn: 'অবজেক্ট ডিটেকশন, ইমেজ ক্লাসিফিকেশন এবং দৃশ্যমান ডেটা বিশ্লেষণের প্রযুক্তি চর্চা।',
    iconName: 'Eye',
  },
  {
    id: 'digital-marketing',
    titleEn: 'Digital Marketing',
    titleBn: 'ডিজিটাল মার্কেটিং',
    descEn: 'Understanding digital brand positioning, reach analytics, content funneling, and online engagement.',
    descBn: 'অনলাইন ব্র্যান্ড পজিশনিং, অ্যানালিটিক্স এবং ডিজিটাল অডিয়েন্স এনগেজমেন্ট বিশ্লেষণ।',
    iconName: 'TrendingUp',
  },
  {
    id: 'web-research',
    titleEn: 'Web Research',
    titleBn: 'ওয়েব রিসার্চ',
    descEn: 'Synthesizing verified documentation, technological trends, and rigorous information gathering.',
    descBn: 'অনলাইন তথ্য অনুসন্ধান, তথ্য যাচাই ও গঠনমূলক রিসার্চ তৈরির সুশৃঙ্খল প্রক্রিয়া।',
    iconName: 'Search',
  },
  {
    id: 'website-design',
    titleEn: 'Website Design',
    titleBn: 'ওয়েবসাইট ডিজাইন',
    descEn: 'Crafting responsive layouts, modern interactive interfaces, aesthetic balance, and clean typography.',
    descBn: 'রেসপনসিভ লেআউট, আধুনিক ইন্টারঅ্যাক্টিভ ইন্টারফেস এবং পরিপাটি টাইপোগ্রাফি রূপায়ণ।',
    iconName: 'Layout',
  },
  {
    id: 'social-media',
    titleEn: 'Social Media Management',
    titleBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট',
    descEn: 'Analyzing visual presentation, content rhythm, audience interaction, and platform dynamics.',
    descBn: 'কন্টেন্ট পরিকল্পনা, ভিজ্যুয়াল নান্দনিকতা ও বিভিন্ন প্ল্যাটফর্মের গতিপ্রকৃতি পর্যবেক্ষণ।',
    iconName: 'Share2',
  },
  {
    id: 'ai-tools',
    titleEn: 'AI Tools & Applications',
    titleBn: 'এআই টুলস ও অ্যাপ্লিকেশন',
    descEn: 'Mastering generative AI assistants, developer copilots, prompt design, and cognitive utilities.',
    descBn: 'জেনারেটিভ এআই, ডেভেলপার কো-পাইলট ও আধুনিক কগনিটিভ সফটওয়্যারের বাস্তবমুখী ব্যবহার।',
    iconName: 'Sparkles',
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'GitHub', category: 'Version Control', iconName: 'Github' },
  { name: 'Microsoft Excel', category: 'Data Analysis', iconName: 'FileSpreadsheet' },
  { name: 'Fusion 360', category: '3D CAD & Design', iconName: 'Box' },
  { name: 'Unity Game Engine', category: 'Interactive & 3D', iconName: 'Layers' },
  { name: 'YOLO', category: 'Computer Vision', iconName: 'ScanEye' },
  { name: 'Google Gemini', category: 'Frontier AI', iconName: 'BrainCircuit' },
  { name: 'ChatGPT', category: 'Conversational AI', iconName: 'Bot' },
];

export const TIMELINE_DATA: TimelineCard[] = [
  {
    id: 'foundation',
    labelEn: 'Foundation',
    labelBn: 'ভিত্তি',
    headingEn: 'Primary & Secondary Academic Grounding',
    headingBn: 'প্রাথমিক ও মাধ্যমিক প্রাতিষ্ঠানিক ভিত্তি',
    descEn: 'Developed core analytical thinking, mathematics, language fluency, and an early fascination with computers and information technology.',
    descBn: 'গড়ে উঠেছে মৌলিক গাণিতিক যুক্তি, ভাষাগত দক্ষতা এবং কম্পিউটার ও তথ্যপ্রযুক্তির প্রতি গভীর অনুরাগ।',
  },
  {
    id: 'current-focus',
    labelEn: 'Current Focus',
    labelBn: 'বর্তমান ক্ষেত্র',
    headingEn: 'College Studies & Personal Discipline',
    headingBn: 'কলেজ শিক্ষা ও ব্যক্তিগত শৃঙ্খলা',
    descEn: 'Advancing through formal academic studies with focus, discipline, teamwork, and clear communication while balancing creative digital pursuits.',
    descBn: 'একাডেমিক অধ্যয়নকে পূর্ণ মনোযোগ ও শৃঙ্খলার সাথে এগিয়ে নেওয়ার পাশাপাশি ডিজিটাল সৃজনশীলতার নিয়মিত চর্চা।',
    isCurrent: true,
  },
  {
    id: 'self-directed',
    labelEn: 'Self-Directed',
    labelBn: 'স্ব-উদ্যোগী',
    headingEn: 'Independent Web, Design & Media Exploration',
    headingBn: 'স্বাধীন ওয়েব, ডিজাইন ও মিডিয়া চর্চা',
    descEn: 'Practicing responsive interface design, visual layout systems, graphic composition, and video editing through hands-on personal experiments.',
    descBn: 'বাস্তব প্রজেক্ট এক্সপেরিমেন্টের মাধ্যমে রেসপনসিভ ইউজার ইন্টারফেস, লেআউট আর্কিটেকচার ও ডিজিটাল মিডিয়া শৈলী আয়ত্তকরণ।',
  },
  {
    id: 'next-chapter',
    labelEn: 'Next Chapter',
    labelBn: 'পরবর্তী অধ্যায়',
    headingEn: 'Higher Studies in Technology & Creative Engineering',
    headingBn: 'প্রযুক্তি ও ক্রিয়েটিভ ইঞ্জিনিয়ারিংয়ে উচ্চশিক্ষা',
    descEn: 'Preparing step by step for deeper academic study in computer science, interactive software, and purposeful digital product creation.',
    descBn: 'কম্পিউটার সায়েন্স, ইন্টারঅ্যাক্টিভ সফটওয়্যার ও উদ্ভাবনী ডিজিটাল পণ্য নির্মাণের লক্ষ্যে উচ্চশিক্ষার সুপরিকল্পিত প্রস্তুতি।',
  },
];

export const GOAL_CARDS: GoalCard[] = [
  {
    number: '01',
    titleEn: 'LEARN',
    titleBn: 'শেখা',
    descEn: 'Keep exploring technology, AI, and new ideas.',
    descBn: 'প্রযুক্তি, কৃত্রিম বুদ্ধিমত্তা ও নতুন চিন্তার অন্বেষণ অব্যাহত রাখা।',
  },
  {
    number: '02',
    titleEn: 'CREATE',
    titleBn: 'সৃষ্টি',
    descEn: 'Turn imagination and knowledge into meaningful digital experiences.',
    descBn: 'কল্পনা ও জ্ঞানকে সার্থক ডিজিটাল অভিজ্ঞতায় রূপান্তর করা।',
  },
  {
    number: '03',
    titleEn: 'GROW',
    titleBn: 'বিকাশ',
    descEn: 'Develop discipline, creativity, and technical understanding for the future.',
    descBn: 'ভবিষ্যতের জন্য শৃঙ্খলা, সৃজনশীলতা ও প্রযুক্তিগত দক্ষতার বিকাশ ঘটানো।',
  },
];

export const INTEREST_CARDS: InterestCard[] = [
  {
    id: 'football',
    iconName: 'Trophy',
    titleEn: 'Football',
    titleBn: 'ফুটবল',
    descEn: 'Team spirit, rhythm & focus on the pitch',
    descBn: 'মাঠের দলগত ঐক্য, ছন্দ ও স্থির একাগ্রতা',
  },
  {
    id: 'gaming',
    iconName: 'Gamepad2',
    titleEn: 'Gaming',
    titleBn: 'গেমিং',
    descEn: 'Strategy, interactive worlds & quick decisions',
    descBn: 'রণকৌশল, ইন্টারঅ্যাক্টিভ জগৎ ও দ্রুত সিদ্ধান্ত গ্রহণ',
  },
  {
    id: 'gardening',
    iconName: 'Sprout',
    titleEn: 'Gardening',
    titleBn: 'বাগান করা',
    descEn: 'Patience, nurturing greenery & connecting with nature',
    descBn: 'সবুজের যত্ন, ধৈর্য এবং প্রকৃতির সাথে আত্মিক সংযোগ',
  },
  {
    id: 'travelling',
    iconName: 'Compass',
    titleEn: 'Travelling',
    titleBn: 'ভ্রমণ',
    descEn: 'Exploring new places, cultures & fresh perspectives',
    descBn: 'নতুন স্থান ও সংস্কৃতির অন্বেষণ এবং নতুন দৃষ্টিভঙ্গি অর্জন',
  },
  {
    id: 'technology',
    iconName: 'Terminal',
    titleEn: 'Technology',
    titleBn: 'প্রযুক্তি',
    descEn: 'Exploring modern web tools, AI & digital craft',
    descBn: 'আধুনিক ওয়েব প্রযুক্তি, এআই ও ডিজিটাল কারুশিল্পের চর্চা',
  },
  {
    id: 'creative-work',
    iconName: 'Sparkles',
    titleEn: 'Creative Work',
    titleBn: 'সৃজনশীল কর্ম',
    descEn: 'Visual experiments, layout studies & concepts',
    descBn: 'ভিজ্যুয়াল এক্সপেরিমেন্ট, লেআউট ভাবনা ও কনসেপ্ট ডিজাইন',
  },
];

export const EXPLORE_CARDS: ExploreCard[] = [
  {
    number: '01',
    headingEn: 'Artificial Intelligence & Technology',
    headingBn: 'কৃত্রিম বুদ্ধিমত্তা ও প্রযুক্তি',
    descEn: 'Following how AI works and where technology is heading.',
    descBn: 'এআই কীভাবে কাজ করে এবং প্রযুক্তির ভবিষ্যৎ অভিমুখ কী তা পর্যবেক্ষণ।',
    iconName: 'Brain',
  },
  {
    number: '02',
    headingEn: 'Website Design',
    headingBn: 'ওয়েবসাইট ডিজাইন',
    descEn: 'Learning to design clean, responsive and good-looking web pages.',
    descBn: 'পরিপাটি, রেসপনসিভ ও দৃষ্টিনন্দন ওয়েব ইন্টারফেস ডিজাইনের সাধনা।',
    iconName: 'Monitor',
  },
  {
    number: '03',
    headingEn: 'Digital Marketing',
    headingBn: 'ডিজিটাল মার্কেটিং',
    descEn: 'Understanding how ideas and brands reach people online.',
    descBn: 'অনলাইনে কীভাবে চিন্তা ও ব্র্যান্ড মানুষের কাছে পৌঁছায় তা বোঝা।',
    iconName: 'Target',
  },
  {
    number: '04',
    headingEn: 'Social Media Management',
    headingBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট',
    descEn: 'Exploring content, audiences and how platforms work.',
    descBn: 'কন্টেন্ট কৌশল, দর্শক রুচি ও সোশ্যাল প্ল্যাটফর্মের অ্যালগরিদম অনুধাবন।',
    iconName: 'Users',
  },
  {
    number: '05',
    headingEn: 'Web Research',
    headingBn: 'ওয়েব রিসার্চ',
    descEn: 'Finding, checking and organising information online.',
    descBn: 'ইন্টারনেট থেকে সঠিক তথ্য আহরণ, যাচাই ও সুসংগঠিত করা।',
    iconName: 'Compass',
  },
  {
    number: '06',
    headingEn: 'Computer Vision',
    headingBn: 'কম্পিউটার ভিশন',
    descEn: 'Curious about teaching computers to see, with tools like YOLO.',
    descBn: 'YOLO-র মতো আধুনিক টুল দিয়ে কম্পিউটারকে দেখতে শেখানোর কৌতূহল।',
    iconName: 'Eye',
  },
];

export const TRANSLATIONS = {
  en: {
    hero: {
      kicker: "HELLO, I'M",
      name: 'Shouhardyo Islam',
      banglaName: 'সৌহার্দ্য',
      tagline: 'Dream. Learn. Create. Become.',
      description:
        'I am Shouhardyo Islam— a student, curious technologist, and creative mind steadily shaping my craft across modern web design, visual storytelling, and digital media, one deliberate step each day.',
      talkBtn: "Let's Talk",
      hireBtn: 'Hire Me',
      aboutBtn: 'Explore About Me',
      downloadCvBtn: 'Download CV',
      location: 'Manirampur, Bangladesh',
    },
    about: {
      label: 'ABOUT ME',
      heading: 'More Than Just a Student.',
      description:
        "I'm Shouhardyo Islam, a student from Manirampur, Jashore, Bangladesh. My journey is shaped by curiosity, creativity, and a growing interest in technology.\n\nI enjoy exploring modern web design, artificial intelligence, visual storytelling, and digital media. I believe meaningful progress comes from consistent learning, creative thinking, and the courage to experiment.\n\nRather than rushing toward recognition, I focus on building my skills, discovering new possibilities, and becoming better through every experience.",
      cards: [
        {
          label: 'Mindset',
          title: 'Consistent Daily Learning',
          desc: 'Believing that small improvements, repeated every day, create meaningful long-term progress.',
        },
        {
          label: 'Creative Focus',
          title: 'Web, Visuals & Digital Media',
          desc: 'Exploring the connection between modern web experiences, visual storytelling, and creative digital expression.',
        },
        {
          label: 'Core Principle',
          title: 'Authenticity Over Noise',
          desc: 'Valuing genuine creativity, thoughtful work, and personal growth over unnecessary attention.',
        },
      ],
    },
    education: {
      label: 'EDUCATION & GROWTH',
      heading: 'A Journey of Learning.',
      subtext: 'Structured academics balanced with self-directed digital exploration.',
      viewCvNote: 'Detailed academic examinations are documented in verified CV.',
    },
    futureVision: {
      label: 'LOOKING AHEAD',
      heading: 'Building Tomorrow, One Step at a Time.',
      statement:
        "I don't believe meaningful growth happens overnight. Every new skill, every experiment, and every challenge is another step toward the person I want to become.\n\nMy ambition is to explore the deeper possibilities of Artificial Intelligence, Computer Science, creative engineering, and digital innovation.\n\nI want to build things that are not only visually impressive but also useful, thoughtful, and meaningful.\n\nThe journey is still beginning — and I am committed to learning, creating, and improving every day.",
      closing: 'Great things take time. I am building my future, one deliberate step at a time.',
    },
    skills: {
      label: 'WHAT I KNOW & EXPLORE',
      heading: 'Skills & Creative Interests.',
      subtext: 'Areas of active hands-on study, experimentation, and curiosity.',
      toolsLabel: 'SOFTWARE & TECHNOLOGY',
      toolsHeading: 'Tools & Ecosystems in Practice',
    },
    interests: {
      label: 'BEYOND THE DESK',
      heading: 'Personal Interests & Everyday Inspiration',
      intro:
        'Beyond screens and study desks, football, gaming, gardening, travelling, and creative exploration keep my perspective fresh. To me, hobbies are not merely ways to pass free hours — they sharpen observation and open new doors of thought.',
    },
    explore: {
      label: 'WHAT I DO & EXPLORE',
      heading: "Areas I'm Learning and Exploring.",
      intro: "Areas I'm learning and exploring — as a student, not a business.",
    },
    quote: {
      text: 'Dream is not that which you see while sleeping, it is something that does not let you sleep.',
      attribution: '— Shouhardyo',
    },
    contact: {
      label: 'CONTACT',
      heading: "Let's Start a Conversation.",
      description:
        'Whether you want to exchange ideas, discuss technology, share creativity, or simply connect — feel free to reach out.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      facebookLabel: 'Facebook',
      instagramLabel: 'Instagram',
      copySuccess: 'Copied to clipboard!',
      copyText: 'Copy',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'e.g. Shakib Ahmed',
        emailLabel: 'Your Email',
        emailPlaceholder: 'e.g. shakib@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'e.g. Exploring Technology Collaboration',
        messageLabel: 'Your Message',
        messagePlaceholder: 'Write your thoughts, inquiry or note here...',
        submitBtn: 'Send Message',
        sendingBtn: 'Sending to shouhardyoislam@gmail.com...',
        successMsg: 'Message sent! It has been dispatched to shouhardyoislam@gmail.com.',
        openGmailBtn: 'Open in Gmail (Web)',
        openWhatsAppBtn: 'Send via WhatsApp',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Crafted with curiosity and intent.',
      backToTop: 'Back to top',
      cvText: 'Verified Academic CV',
      stayInTouchTitle: 'Stay in Touch',
      stayInTouchDesc: 'Occasional notes on tech experiments, learning, and web projects.',
      emailPlaceholder: 'Enter your email address',
      subscribeBtn: 'Subscribe',
      subscribedMsg: 'Thank you for connecting! Subscribed successfully.',
    },
  },
  bn: {
    hero: {
      kicker: 'নমস্কার / আসসালামু আলাইকুম, আমি',
      name: 'সৌহার্দ্য ইসলাম',
      banglaName: 'সৌহার্দ্য',
      tagline: 'Dream. Learn. Create. Become.',
      description:
        'আমি সৌহার্দ্য ইসলাম — একজন শিক্ষার্থী, প্রযুক্তির কৌতূহলী অনুসারী এবং সৃজনশীল মনন, যিনি প্রতিদিন এক পা এক পা করে আধুনিক ওয়েব ডিজাইন, ভিজ্যুয়াল স্টোরিটেলিং ও ডিজিটাল মিডিয়ায় নিজের দক্ষতা গড়ে তুলছেন।',
      talkBtn: 'যোগাযোগ করুন',
      hireBtn: 'হায়ার করুন (Hire Me)',
      aboutBtn: 'আমার সম্পর্কে জানুন',
      downloadCvBtn: 'সিভি ডাউনলোড',
      location: 'মনিরামপুর, বাংলাদেশ',
    },
    about: {
      label: 'আমার সম্পর্কে',
      heading: 'কেবল একজন ছাত্রের চেয়েও বেশি কিছু।',
      description:
        'আমি সৌহার্দ্য ইসলাম, বাংলাদেশের খুলনা বিভাগের যশোর জেলার মনিরামপুরের একজন শিক্ষার্থী। আমার পথচলা পরিচালিত হচ্ছে কৌতূহল, সৃজনশীলতা এবং প্রযুক্তির প্রতি এক অবিচল আগ্রহের দ্বারা।\n\nআমি আধুনিক ওয়েব ডিজাইন, কৃত্রিম বুদ্ধিমত্তা, ভিজ্যুয়াল স্টোরিটেলিং এবং ডিজিটাল মিডিয়ার সংযোগ অন্বেষণ করতে ভালোবাসি। আমি বিশ্বাস করি ধারাবাহিক শিক্ষা, ইতিবাচক সৃজনশীল চিন্তা এবং পরীক্ষা-নিরীক্ষা করার সাহসই দীর্ঘস্থায়ী রূপান্তর ঘটায়।\n\nঅযথা প্রচারের পেছনে না ছুটে আমি নিজের দক্ষতা বাড়ানো, নতুন সম্ভাবনার সন্ধান এবং প্রতিটি অভিজ্ঞতার মাধ্যমে নিজেকে ছাড়িয়ে যাওয়ায় বিশ্বাসী।',
      cards: [
        {
          label: 'মনোভাব',
          title: 'প্রতিদিনের অবিচল শেখা',
          desc: 'বিশ্বাস করি যে প্রতিদিনের ছোট্ট ছোট্ট উন্নতি ও ধারাবাহিকতাই দীর্ঘমেয়াদে বড় ও তাৎপর্যপূর্ণ অর্জনের জন্ম দেয়।',
        },
        {
          label: 'সৃজনশীল মনোযোগ',
          title: 'ওয়েব, ভিজ্যুয়াল ও ডিজিটাল মিডিয়া',
          desc: 'আধুনিক ওয়েব ইন্টারফেস, ভিজ্যুয়াল গল্প বলা এবং ডিজিটাল সৃজনশীলতার সংযোগসূত্র আবিষ্কারের প্রয়াস।',
        },
        {
          label: 'মূল নীতি',
          title: 'কোলাহলের ঊর্ধ্বে সততা',
          desc: 'অযথা দৃষ্টি আকর্ষণের চেয়ে সত্যিকারের সৃষ্টিশীলতা, গভীর মনোযোগ এবং আত্মিক বিকাশকে বেশি গুরুত্ব দিই।',
        },
      ],
    },
    education: {
      label: 'শিক্ষা ও অগ্রগতি',
      heading: 'শেখার এক নিরন্তর অভিযাত্রা।',
      subtext: 'প্রাতিষ্ঠানিক শৃঙ্খলা ও স্বাধীন ডিজিটাল উদ্ভাবনের ভারসাম্য।',
      viewCvNote: 'বিস্তারিত একাডেমিক ফলাফল ও পরীক্ষার রেকর্ড সংরক্ষিত সিভিতে রয়েছে।',
    },
    futureVision: {
      label: 'ভবিষ্যতের ভাবনা',
      heading: 'ধাপে ধাপে আগামীর বিনির্মাণ।',
      statement:
        'আমি বিশ্বাস করি না যে রাতারাতি কোনো গভীর ও অর্থপূর্ণ পরিবর্তন সম্ভব। প্রতিটি নতুন দক্ষতা, প্রতিটি পরীক্ষা-নিরীক্ষা এবং প্রতিটি চ্যালেঞ্জ আমাকে সেই মানুষটি হওয়ার দিকে এগিয়ে নেয়, যা আমি হতে চাই।\n\nআমার স্বপ্ন কৃত্রিম বুদ্ধিমত্তা (AI), কম্পিউটার সায়েন্স, ক্রিয়েটিভ ইঞ্জিনিয়ারিং এবং ডিজিটাল উদ্ভাবনের গভীর সম্ভাবনার দুয়ারে পৌঁছানো।\n\nআমি এমন কিছু সৃষ্টি করতে চাই যা কেবল দৃষ্টিনন্দনই নয়, বরং মানুষের কাজে লাগে, চিন্তাশীল এবং অর্থবহ।\n\nএই অভিযাত্রা মাত্র শুরু — এবং আমি প্রতিদিন শিখতে, গড়তে ও নিজের সীমানা বাড়াতে প্রতিশ্রুতিবদ্ধ।',
      closing: 'মহৎ সৃষ্টি সময় নেয়। আমি প্রতিটি সচেতন পদক্ষেপে আমার ভবিষ্যৎ গড়ে তুলছি।',
    },
    skills: {
      label: 'দক্ষতা ও অন্বেষণ',
      heading: 'দক্ষতা ও সৃজনশীল আগ্রহ।',
      subtext: 'সক্রিয় চর্চা, অনুসন্ধান ও ব্যবহারিক কৌতূহলের ক্ষেত্রসমূহ।',
      toolsLabel: 'সফটওয়্যার ও প্রযুক্তি',
      toolsHeading: 'ব্যবহারিক ইকোসিস্টেম ও টুলস',
    },
    interests: {
      label: 'পড়ার টেবিলের বাইরে',
      heading: 'ব্যক্তিগত আগ্রহ ও প্রাত্যহিক অনুপ্রেরণা',
      intro:
        'কম্পিউটারের পর্দা আর পড়াশোনার টেবিল ছাড়িয়ে ফুটবল, গেমিং, বাগান করা, ভ্রমণ ও সৃষ্টিশীল চর্চা আমার চিন্তাধারাকে সতেজ রাখে। আমার কাছে শখ মানে কেবল অলস সময় কাটানো নয় — এগুলো পর্যবেক্ষণশক্তি শাণিত করে এবং ভাবনার নতুন দিগন্ত খুলে দেয়।',
    },
    explore: {
      label: 'যা শিখি ও চর্চা করি',
      heading: 'যে ক্ষেত্রগুলো আমি শিখছি ও অন্বেষণ করছি।',
      intro: 'যে ক্ষেত্রগুলো আমি শিখছি ও অন্বেষণ করছি — একজন শিক্ষার্থী হিসেবে, কোনো বাণিজ্যিক ব্যবসা হিসেবে নয়।',
    },
    quote: {
      text: 'স্বপ্ন সেটা নয় যা তুমি ঘুমিয়ে দেখ, স্বপ্ন সেটাই যা তোমাকে ঘুমোতে দেয় না।',
      attribution: '— সৌহার্দ্য',
    },
    contact: {
      label: 'যোগাযোগ',
      heading: 'আসুন একটি সুন্দর আলাপ শুরু করি।',
      description:
        'কোনো গঠনমূলক চিন্তার আদান-প্রদান, প্রযুক্তি আলোচনা, সৃজনশীল ভাবনা ভাগাভাগি কিংবা নিছক যোগাযোগের জন্য — সবসময় আপনার স্বাগতম।',
      emailLabel: 'ইমেইল',
      phoneLabel: 'ফোন',
      whatsappLabel: 'হোয়াটসঅ্যাপ',
      facebookLabel: 'ফেসবুক',
      instagramLabel: 'ইনস্টাগ্রাম',
      copySuccess: 'ক্লিপবোর্ডে কপি হয়েছে!',
      copyText: 'কপি',
      form: {
        nameLabel: 'আপনার নাম',
        namePlaceholder: 'যেমন: সাকিব আহমেদ',
        emailLabel: 'আপনার ইমেইল',
        emailPlaceholder: 'যেমন: shakib@example.com',
        subjectLabel: 'বিষয়',
        subjectPlaceholder: 'যেমন: প্রযুক্তি নিয়ে আলোচনা',
        messageLabel: 'আপনার বার্তা',
        messagePlaceholder: 'আপনার বার্তা বা প্রশ্নটি এখানে লিখুন...',
        submitBtn: 'বার্তা পাঠান',
        sendingBtn: 'shouhardyoislam@gmail.com এ পাঠানো হচ্ছে...',
        successMsg: 'বার্তা পাঠানো হয়েছে! এটি সরাসরি shouhardyoislam@gmail.com এ পৌঁছেছে।',
        openGmailBtn: 'জিমেলে পাঠান (ওয়েব)',
        openWhatsAppBtn: 'হোয়াটসঅ্যাপে পাঠান',
      },
    },
    footer: {
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      tagline: 'কৌতূহল ও নিষ্ঠার সাথে নির্মিত।',
      backToTop: 'উপরে যান',
      cvText: 'যাচাইকৃত একাডেমিক সিভি',
      stayInTouchTitle: 'যোগাযোগে থাকুন',
      stayInTouchDesc: 'প্রযুক্তিগত চিন্তা, নতুন শেখা ও ওয়েব উদ্ভাবনের পরিচ্ছন্ন আপডেট পান।',
      emailPlaceholder: 'আপনার ইমেইল ঠিকানা দিন',
      subscribeBtn: 'সাবস্ক্রাইব',
      subscribedMsg: 'ধন্যবাদ! আপনি সফলভাবে যুক্ত হয়েছেন।',
    },
  },
};
