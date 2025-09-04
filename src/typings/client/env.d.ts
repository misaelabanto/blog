/// <reference types="astro/client" />

// Google Analytics types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }

  var gtag: (...args: any[]) => void;
  var dataLayer: any[];
}

export { };

