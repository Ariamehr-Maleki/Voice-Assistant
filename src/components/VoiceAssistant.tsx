import React, { useEffect, useState } from 'react';

interface VoiceAssistantProps {
  className?: string;
}

declare global {
  interface Window {
    vapiSDK: {
      run: (config: {
        apiKey: string;
        assistant: string;
        config: Record<string, any>;
      }) => void;
      stop: () => void;
      start: () => void;
    };
    vapiInstance: any;
  }
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const assistant = "ad229fba-f9a6-4a8f-8cd8-0d94bd51ba95";
    const apiKey = "4b25a6fd-b2a8-4582-8b46-ec0bd6a74bfa";

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    
    script.onload = function () {
      if (window.vapiSDK) {
        window.vapiInstance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: {
            position: "relative",
            offset: "0px",
            width: "0px",
            height: "0px",
            idle: { type: "pill", color: "transparent" },
            loading: { type: "pill", color: "transparent" },
            active: { type: "pill", color: "transparent" },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleVoiceClick = () => {
    if (window.vapiInstance) {
      setIsLoading(true);
      if (isActive) {
        window.vapiInstance.stop();
        setIsActive(false);
      } else {
        window.vapiInstance.start();
        setIsActive(true);
      }
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <button
      onClick={handleVoiceClick}
      className={`relative z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${className || ''}`}
      style={{ 
        zIndex: 9999,
        background: isActive 
          ? 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-glow)))' 
          : 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))'
      }}
    >
      {isLoading ? (
        <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full" />
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
      )}
      
      {/* Pulse animation when active */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-glow animate-ping opacity-75" />
      )}
    </button>
  );
};

export default VoiceAssistant;