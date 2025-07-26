import React from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import voiceIcon from '@/assets/voice-icon.png';
import VoiceAssistant from '@/components/VoiceAssistant';

const Hero = () => {
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
            <span className="text-gradient">Voice AI</span>
            <br />
            <span className="text-foreground">for customers</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your customer experience with our revolutionary AI voice assistant. 
            <span className="text-accent-gradient font-semibold"> Intelligent, natural, and available 24/7.</span>
          </p>
          
          {/* Voice Assistant Button */}
          <div className="relative z-50 mb-12 flex justify-center">
            <button
              onClick={() => {
                if (window.startVapiCall) {
                  window.startVapiCall();
                }
              }}
              className="group relative w-20 h-20 bg-primary/20 backdrop-blur-lg rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </button>
          </div>
          
          <VoiceAssistant />
          
          {/* Stats */}
          <div className="relative z-40 flex justify-center items-center space-x-8 mb-16 text-sm md:text-base">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.5%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">0.9s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-muted-foreground">Available</div>
            </div>
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