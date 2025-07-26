import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Quick Setup",
      description: "Install our SDK in minutes with just a few lines of code. No complex configuration required.",
      highlight: "5 minutes setup"
    },
    {
      number: "02",
      title: "AI Training",
      description: "Our AI learns your business context, tone, and specific requirements automatically.",
      highlight: "Smart learning"
    },
    {
      number: "03",
      title: "Go Live",
      description: "Deploy instantly and start serving customers with intelligent voice interactions.",
      highlight: "Instant deployment"
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Monitor performance and let our AI continuously improve based on real conversations.",
      highlight: "Continuous improvement"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our streamlined process designed for modern businesses.
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