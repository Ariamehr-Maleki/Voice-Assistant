import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-xs font-medium px-3 py-1 h-7 ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === 'fa' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fa')}
        className={`text-xs font-medium px-3 py-1 h-7 ${
          language === 'fa' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        فا
      </Button>
    </div>
  );
};

export default LanguageSwitcher;