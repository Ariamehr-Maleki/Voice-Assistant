import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('howItWorks.setup.title'),
      description: t('howItWorks.setup.description'),
      highlight: t('howItWorks.setup.highlight')
    },
    {
      number: "02",
      title: t('howItWorks.training.title'),
      description: t('howItWorks.training.description'),
      highlight: t('howItWorks.training.highlight')
    },
    {
      number: "03",
      title: t('howItWorks.live.title'),
      description: t('howItWorks.live.description'),
      highlight: t('howItWorks.live.highlight')
    },
    {
      number: "04",
      title: t('howItWorks.optimize.title'),
      description: t('howItWorks.optimize.description'),
      highlight: t('howItWorks.optimize.highlight')
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">{t('howItWorks.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-primary opacity-30 z-0" />
              )}
              
              <Card className="relative z-10 p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group shadow-premium hover:shadow-glow text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </h3>
                
                {/* Highlight */}
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                  {step.highlight}
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;