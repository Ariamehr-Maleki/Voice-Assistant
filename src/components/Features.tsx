import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "🧠",
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: "⚡",
      title: t('features.speed.title'),
      description: t('features.speed.description')
    },
    {
      icon: "🌍",
      title: t('features.language.title'),
      description: t('features.language.description')
    },
    {
      icon: "🔒",
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: "🎯",
      title: t('features.integration.title'),
      description: t('features.integration.description')
    },
    {
      icon: "📊",
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">{t('features.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group shadow-premium hover:shadow-glow"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;