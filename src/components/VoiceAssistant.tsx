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
      position: "bottom-right",
      offset: "40px",
      width: "60px",
      height: "60px",
      idle: {
        color: {
          50: "#3b82f6",
          100: "#1d4ed8",
          200: "#1e40af",
          300: "#1e3a8a",
          400: "#172554",
          500: "#0f172a",
        },
        type: "pill",
        icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`
      },
      loading: {
        color: {
          50: "#8b5cf6",
          100: "#7c3aed",
          200: "#6d28d9",
          300: "#5b21b6",
          400: "#4c1d95",
          500: "#3c1361",
        },
        type: "pill",
        icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="3"/></svg>`
      },
      active: {
        color: {
          50: "#eab308",
          100: "#ca8a04",
          200: "#a16207",
          300: "#854d0e",
          400: "#713f12",
          500: "#422006",
        },
        type: "pill",
        icon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`
      }
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
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div className={className} />;
};

export default VoiceAssistant;