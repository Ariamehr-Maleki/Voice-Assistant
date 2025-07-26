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
    const buttonConfig = {};

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
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default VoiceAssistant;