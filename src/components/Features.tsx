import React from 'react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "Advanced AI Intelligence",
      description: "Powered by cutting-edge neural networks that understand context, emotion, and intent with human-like comprehension."
    },
    {
      icon: "⚡",
      title: "Lightning Fast Response",
      description: "Sub-50ms response times ensure natural, real-time conversations without awkward pauses or delays."
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      description: "Communicate fluently in over 40 languages with native accent recognition and cultural understanding."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with GDPR, HIPAA, and SOC 2 Type II standards."
    },
    {
      icon: "🎯",
      title: "Smart Integration",
      description: "Seamlessly connects with your existing CRM, helpdesk, and business tools through powerful APIs."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Real-time insights into conversation patterns, customer satisfaction, and performance metrics."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">Premium Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of voice AI technology with features designed for enterprise excellence.
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