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
    };
  }
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const assistant = "ad229fba-f9a6-4a8f-8cd8-0d94bd51ba95";
    const apiKey = "4b25a6fd-b2a8-4582-8b46-ec0bd6a74bfa";
    const buttonConfig = {
      show: false, // Hide the default button since we're creating our own
    };

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    
    script.onload = function () {
      if (window.vapiSDK) {
        window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        });
        setIsReady(true);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleClick = () => {
    if (window.vapiSDK && isReady) {
      // Trigger the voice assistant
      const vapiButton = document.querySelector('[data-vapi-button]') as HTMLElement;
      if (vapiButton) {
        vapiButton.click();
      } else {
        // Fallback: manually trigger if button not found
        window.vapiSDK.run({
          apiKey: "4b25a6fd-b2a8-4582-8b46-ec0bd6a74bfa",
          assistant: "ad229fba-f9a6-4a8f-8cd8-0d94bd51ba95",
          config: { show: true },
        });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center p-6 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${className}`}
      style={{ zIndex: 1000 }}
    >
      <svg width="75" height="75" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
      </svg>
    </button>
  );
};

export default VoiceAssistant;