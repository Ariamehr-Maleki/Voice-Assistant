import React, { useEffect } from 'react';

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
    };
  }
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className }) => {
  useEffect(() => {
    const assistant = "ad229fba-f9a6-4a8f-8cd8-0d94bd51ba95";
    const apiKey = "4b25a6fd-b2a8-4582-8b46-ec0bd6a74bfa";
    const buttonConfig = {
      position: "relative",
      offset: "0px",
      width: "60px",
      height: "60px",
      idle: {
        color: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))`,
        type: "pill",
        title: "Talk with AI Assistant",
        subtitle: "Click to start conversation",
        icon: `https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/microphone.svg`,
      },
      loading: {
        color: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/loading.svg`,
      },
      active: {
        color: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-glow)))`,
        type: "pill",
        title: "AI Assistant is listening",
        subtitle: "Speak now",
        icon: `https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/microphone-active.svg`,
      },
    };

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    
    script.onload = function () {
      if (window.vapiSDK) {
        // Wait for the container to be in the DOM
        setTimeout(() => {
          const container = document.getElementById('vapi-button-container');
          if (container) {
            window.vapiSDK.run({
              apiKey: apiKey,
              assistant: assistant,
              config: {
                ...buttonConfig,
                container: container,
              },
            });
          }
        }, 100);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="vapi-button-container" 
      className={`relative z-50 w-fit h-fit pointer-events-auto ${className || ''}`}
      style={{ 
        zIndex: 9999,
        position: 'relative',
        pointerEvents: 'auto'
      }}
    />
  );
};

export default VoiceAssistant;