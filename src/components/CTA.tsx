import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const CTA = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden p-12 md:p-16 text-center gradient-primary shadow-glow">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-primary-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              {t('cta.subtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center mb-8 ${isRTL ? 'space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6' : 'space-y-4 sm:space-y-0 sm:space-x-6'}`}>
              <Button 
                variant="accent" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://www.ariamehr-ai.com', '_blank')}
              >
                {t('cta.startTrial')}
              </Button>
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40"
                onClick={() => window.open('https://www.ariamehr-ai.com', '_blank')}
              >
                {t('cta.scheduleDemo')}
              </Button>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center text-primary-foreground/70 ${isRTL ? 'space-y-2 sm:space-y-0 sm:space-x-reverse sm:space-x-8' : 'space-y-2 sm:space-y-0 sm:space-x-8'}`}>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('cta.noCreditCard')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('cta.freeTrial')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('cta.support')}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;