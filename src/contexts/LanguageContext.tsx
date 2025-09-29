import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation dictionaries
const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.aboutUs': 'About Us',
    'header.signIn': 'Sign In',
    'header.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Voice AI',
    'hero.titleSuffix': 'for customers',
    'hero.subtitle': 'Transform your customer experience with our revolutionary AI voice assistant.',
    'hero.subtitleHighlight': ' Intelligent, natural, and available 24/7.',
    'hero.tryNow': 'Try Voice AI Now',
    'hero.watchDemo': 'Watch Demo',
    'hero.uptime': 'Uptime',
    'hero.responseTime': 'Response Time',
    'hero.available': 'Available',
    
    // Features
    'features.title': 'Premium Features',
    'features.subtitle': 'Experience the next generation of voice AI technology with features designed for enterprise excellence.',
    'features.ai.title': 'Advanced AI Intelligence',
    'features.ai.description': 'Powered by cutting-edge neural networks that understand context, emotion, and intent with human-like comprehension.',
    'features.speed.title': 'Lightning Fast Response',
    'features.speed.description': 'Sub-50ms response times ensure natural, real-time conversations without awkward pauses or delays.',
    'features.language.title': 'Multi-Language Support',
    'features.language.description': 'Communicate fluently in over 40 languages with native accent recognition and cultural understanding.',
    'features.security.title': 'Enterprise Security',
    'features.security.description': 'Bank-grade encryption and compliance with GDPR, HIPAA, and SOC 2 Type II standards.',
    'features.integration.title': 'Smart Integration',
    'features.integration.description': 'Seamlessly connects with your existing CRM, helpdesk, and business tools through powerful APIs.',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.description': 'Real-time insights into conversation patterns, customer satisfaction, and performance metrics.',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Get started in minutes with our streamlined process designed for modern businesses.',
    'howItWorks.setup.title': 'Quick Setup',
    'howItWorks.setup.description': 'Install our SDK in minutes with just a few lines of code. No complex configuration required.',
    'howItWorks.setup.highlight': '5 minutes setup',
    'howItWorks.training.title': 'AI Training',
    'howItWorks.training.description': 'Our AI learns your business context, tone, and specific requirements automatically.',
    'howItWorks.training.highlight': 'Smart learning',
    'howItWorks.live.title': 'Go Live',
    'howItWorks.live.description': 'Deploy instantly and start serving customers with intelligent voice interactions.',
    'howItWorks.live.highlight': 'Instant deployment',
    'howItWorks.optimize.title': 'Scale & Optimize',
    'howItWorks.optimize.description': 'Monitor performance and let our AI continuously improve based on real conversations.',
    'howItWorks.optimize.highlight': 'Continuous improvement',
    
    // CTA
    'cta.title': 'Ready to Transform Your Customer Experience?',
    'cta.subtitle': 'Join thousands of businesses already using our AI voice technology to deliver exceptional customer service.',
    'cta.startTrial': 'Start Free Trial',
    'cta.scheduleDemo': 'Schedule Demo',
    'cta.noCreditCard': 'No credit card required',
    'cta.freeTrial': '14-day free trial',
    'cta.support': '24/7 support',
    
    // Footer
    'footer.description': 'Revolutionizing customer interactions with premium AI voice technology. Building the future of conversational AI, one voice at a time.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.apiDocs': 'API Docs',
    'footer.integrations': 'Integrations',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.contactUs': 'Contact Us',
    'footer.status': 'Status',
    'footer.privacy': 'Privacy',
    'footer.copyright': '© 2025 Ariamehr AI Agency. All rights reserved.',
    'footer.builtWith': 'Built with ❤️ for the future of AI'
  },
  fa: {
    // Header
    'nav.features': 'ویژگی‌ها',
    'nav.howItWorks': 'نحوه کار',
    'nav.pricing': 'قیمت‌گذاری',
    'nav.aboutUs': 'درباره ما',
    'header.signIn': 'ورود',
    'header.getStarted': 'شروع کنید',
    
    // Hero
    'hero.title': 'هوش مصنوعی صوتی',
    'hero.titleSuffix': 'برای مشتریان',
    'hero.subtitle': 'تجربه مشتریان خود را با دستیار صوتی هوش مصنوعی انقلابی ما متحول کنید.',
    'hero.subtitleHighlight': ' هوشمند، طبیعی و ۲۴/۷ در دسترس.',
    'hero.tryNow': 'هوش مصنوعی صوتی را امتحان کنید',
    'hero.watchDemo': 'تماشای نمونه',
    'hero.uptime': 'آپ‌تایم',
    'hero.responseTime': 'زمان پاسخ',
    'hero.available': 'در دسترس',
    
    // Features
    'features.title': 'ویژگی‌های ممتاز',
    'features.subtitle': 'نسل بعدی فناوری هوش مصنوعی صوتی را با ویژگی‌هایی که برای تعالی سازمانی طراحی شده‌اند، تجربه کنید.',
    'features.ai.title': 'هوش مصنوعی پیشرفته',
    'features.ai.description': 'توسط شبکه‌های عصبی پیشرفته که زمینه، احساسات و قصد را با درک انسان‌مانند می‌فهمند، قدرت می‌گیرد.',
    'features.speed.title': 'پاسخ فوق‌سریع',
    'features.speed.description': 'زمان پاسخ زیر ۵۰ میلی‌ثانیه مکالمات طبیعی و بلادرنگ بدون مکث‌های ناخوشایند را تضمین می‌کند.',
    'features.language.title': 'پشتیبانی چند زبانه',
    'features.language.description': 'با بیش از ۴۰ زبان با تشخیص لهجه محلی و درک فرهنگی روان ارتباط برقرار کنید.',
    'features.security.title': 'امنیت سازمانی',
    'features.security.description': 'رمزگذاری درجه بانکی و انطباق با استانداردهای GDPR، HIPAA و SOC 2 Type II.',
    'features.integration.title': 'یکپارچه‌سازی هوشمند',
    'features.integration.description': 'به طور یکپارچه با CRM، helpdesk و ابزارهای تجاری موجود شما از طریق APIهای قدرتمند متصل می‌شود.',
    'features.analytics.title': 'تحلیل‌های پیشرفته',
    'features.analytics.description': 'بینش‌های بلادرنگ در الگوهای مکالمه، رضایت مشتری و معیارهای عملکرد.',
    
    // How It Works
    'howItWorks.title': 'نحوه کار',
    'howItWorks.subtitle': 'در دقایقی با فرآیند ساده‌شده‌ای که برای کسب‌وکارهای مدرن طراحی شده، شروع کنید.',
    'howItWorks.setup.title': 'راه‌اندازی سریع',
    'howItWorks.setup.description': 'SDK ما را در دقایق با تنها چند خط کد نصب کنید. هیچ پیکربندی پیچیده‌ای لازم نیست.',
    'howItWorks.setup.highlight': 'راه‌اندازی ۵ دقیقه‌ای',
    'howItWorks.training.title': 'آموزش هوش مصنوعی',
    'howItWorks.training.description': 'هوش مصنوعی ما زمینه کسب‌وکار، لحن و نیازهای خاص شما را به طور خودکار یاد می‌گیرد.',
    'howItWorks.training.highlight': 'یادگیری هوشمند',
    'howItWorks.live.title': 'فعال‌سازی',
    'howItWorks.live.description': 'فوراً مستقر کنید و شروع به خدمت‌رسانی به مشتریان با تعاملات صوتی هوشمند کنید.',
    'howItWorks.live.highlight': 'استقرار فوری',
    'howItWorks.optimize.title': 'مقیاس‌گذاری و بهینه‌سازی',
    'howItWorks.optimize.description': 'عملکرد را نظارت کنید و اجازه دهید هوش مصنوعی ما بر اساس مکالمات واقعی به طور مداوم بهبود یابد.',
    'howItWorks.optimize.highlight': 'بهبود مداوم',
    
    // CTA
    'cta.title': 'آماده متحول کردن تجربه مشتریان خود هستید؟',
    'cta.subtitle': 'به هزاران کسب‌وکاری که از فناوری صوتی هوش مصنوعی ما برای ارائه خدمات استثنایی به مشتریان استفاده می‌کنند، بپیوندید.',
    'cta.startTrial': 'شروع دوره آزمایشی رایگان',
    'cta.scheduleDemo': 'زمان‌بندی نمایش',
    'cta.noCreditCard': 'کارت اعتباری لازم نیست',
    'cta.freeTrial': 'دوره آزمایشی ۱۴ روزه رایگان',
    'cta.support': 'پشتیبانی ۲۴/۷',
    
    // Footer
    'footer.description': 'انقلاب در تعاملات مشتری با فناوری هوش مصنوعی صوتی ممتاز. ساختن آینده هوش مصنوعی مکالمه‌ای، یک صدا در یک زمان.',
    'footer.product': 'محصول',
    'footer.features': 'ویژگی‌ها',
    'footer.pricing': 'قیمت‌گذاری',
    'footer.apiDocs': 'مستندات API',
    'footer.integrations': 'یکپارچه‌سازی‌ها',
    'footer.support': 'پشتیبانی',
    'footer.helpCenter': 'مرکز راهنمایی',
    'footer.contactUs': 'تماس با ما',
    'footer.status': 'وضعیت',
    'footer.privacy': 'حریم خصوصی',
    'footer.copyright': '© ۲۰۲۵ آریامهر ای‌آی ایجنسی. تمام حقوق محفوظ است.',
    'footer.builtWith': 'با ❤️ برای آینده هوش مصنوعی ساخته شده'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'fa';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};