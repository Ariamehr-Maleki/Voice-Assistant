import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t, isRTL } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-gradient font-forbes">Ariamehr AI</span>
              <span className="text-muted-foreground font-normal"> Agency</span>
            </span>
          </div>
          
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.features')}
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="https://www.ariamehr-ai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.aboutUs')}
            </a>
          </nav>
          
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSwitcher />
            <Button variant="ghost" className="hidden md:inline-flex">
              {t('header.signIn')}
            </Button>
            <Button variant="premium" size="default">
              {t('header.getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;