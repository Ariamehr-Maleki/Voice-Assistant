import React from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import voiceIcon from '@/assets/voice-icon.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float glow-primary opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float glow-secondary opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-float glow-accent opacity-50" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Voice Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={voiceIcon} 
                alt="Voice AI" 
                className="w-24 h-24 animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">{t('hero.title')}</span>
            <br />
            <span className="text-foreground">{t('hero.titleSuffix')}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
            <span className="text-accent-gradient font-semibold">{t('hero.subtitleHighlight')}</span>
          </p>
          
          {/* Stats */}
          <div className={`relative z-40 flex justify-center items-center mb-8 text-sm md:text-base ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.5%</div>
              <div className="text-muted-foreground">{t('hero.uptime')}</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">900ms</div>
              <div className="text-muted-foreground">{t('hero.responseTime')}</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-muted-foreground">{t('hero.available')}</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className={`relative z-40 flex flex-col sm:flex-row items-center justify-center mb-16 ${isRTL ? 'space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6' : 'space-y-4 sm:space-y-0 sm:space-x-6'}`}>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://www.ariamehr-ai.com', '_blank')}
            >
              {t('hero.tryNow')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-gray-300 hover:border-gray-400 text-white font-semibold px-8 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300"
              onClick={() => window.open('https://www.ariamehr-ai.com', '_blank')}
            >
              {t('hero.watchDemo')}
            </Button>
          </div>
          
          </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;