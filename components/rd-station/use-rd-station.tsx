'use client'

// hooks/useRDStation.js
import { useEffect } from 'react';

export const useRDStation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation.js';
    script.async = true;
    script.id = 'rdstation-javascript-integration';
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
};
