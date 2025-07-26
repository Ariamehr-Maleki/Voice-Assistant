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
    startVapiCall?: () => void;
  }
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const assistant = "ad229fba-f9a6-4a8f-8cd8-0d94bd51ba95";
    const apiKey = "4b25a6fd-b2a8-4582-8b46-ec0bd6a74bfa";
    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "60px",
      height: "60px",
      style: {
        display: 'none' // Hide the default Vapi button
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
        
        // Create a global function to start the call
        window.startVapiCall = () => {
          // Simulate click on the hidden Vapi button
          const vapiButton = document.querySelector('[data-vapi-button]') as HTMLElement;
          if (vapiButton) {
            vapiButton.click();
          } else {
            // If the button doesn't exist yet, try to find any button with Vapi styling
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
              if (button.style.position === 'fixed' || button.textContent?.includes('vapi') || button.className?.includes('vapi')) {
                button.click();
              }
            });
          }
        };
        
        setIsLoaded(true);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (window.startVapiCall) {
        delete window.startVapiCall;
      }
    };
  }, []);

  return null;
};

export default VoiceAssistant;