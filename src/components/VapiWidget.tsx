import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VapiWidget = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Remove existing widget
    const existingWidget = document.querySelector('vapi-widget');
    if (existingWidget) {
      existingWidget.remove();
    }

    // Create new widget element based on language
    const widget = document.createElement('vapi-widget');
    
    // Common attributes
    widget.setAttribute('public-key', '06f201b5-a1a9-4eb3-b186-61fc72209da1');
    widget.setAttribute('mode', 'voice');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('base-bg-color', '#000000');
    widget.setAttribute('accent-color', '#7300ff');
    widget.setAttribute('cta-button-color', '#008fff');
    widget.setAttribute('cta-button-text-color', '#ffffff');
    widget.setAttribute('border-radius', 'large');
    widget.setAttribute('size', 'full');
    widget.setAttribute('position', 'bottom-right');
    widget.setAttribute('title', 'TALK WITH AI');
    widget.setAttribute('start-button-text', 'Start');
    widget.setAttribute('end-button-text', 'End Call');
    widget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
    widget.setAttribute('chat-placeholder', 'Type your message...');
    widget.setAttribute('voice-show-transcript', 'true');
    widget.setAttribute('consent-required', 'true');
    widget.setAttribute('consent-title', 'Terms and conditions');
    widget.setAttribute('consent-content', 'By clicking &quot;Agree,&quot; and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
    widget.setAttribute('consent-storage-key', 'vapi_widget_consent');
    
    // Language-specific assistant ID
    if (language === 'fa') {
      widget.setAttribute('assistant-id', '7a050423-4743-43ca-b177-784ace553ec8');
    } else {
      widget.setAttribute('assistant-id', '9e9a6aed-0cde-4e78-81c4-82f04d8cf3e0');
    }

    // Add widget to body
    document.body.appendChild(widget);

    return () => {
      // Cleanup on unmount
      const widgetToRemove = document.querySelector('vapi-widget');
      if (widgetToRemove) {
        widgetToRemove.remove();
      }
    };
  }, [language]);

  return null;
};

export default VapiWidget;