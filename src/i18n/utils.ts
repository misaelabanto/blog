import { getRelativeLocaleUrl } from 'astro:i18n';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;
export const showDefaultLang = false;

export type Language = keyof typeof languages;

/**
 * Get the language from the URL pathname
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

/**
 * Extract language from content collection ID (e.g., "en/first-post" -> "en")
 */
export function getLangFromId(id: string): Language {
  const [lang] = id.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

/**
 * Get the slug without language prefix (e.g., "en/first-post" -> "first-post")
 */
export function getSlugFromId(id: string): string {
  const parts = id.split('/');
  return parts.length > 1 ? parts.slice(1).join('/') : id;
}

/**
 * Filter collection entries by language
 */
export function filterByLanguage<T extends { id: string }>(
  collection: T[],
  lang: Language
): T[] {
  return collection.filter(item => getLangFromId(item.id) === lang);
}

/**
 * Get the language from browser preferences
 */
export function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return defaultLang;
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang in languages ? (browserLang as Language) : defaultLang;
}

/**
 * Get language from localStorage
 */
export function getStoredLanguage(): Language | null {
  if (typeof localStorage === 'undefined') return null;
  
  const stored = localStorage.getItem('language');
  return stored && stored in languages ? (stored as Language) : null;
}

/**
 * Store language preference in localStorage
 */
export function storeLanguage(lang: Language): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}

/**
 * Detect the preferred language from various sources
 */
export function detectLanguage(url?: URL): Language {
  // 1. URL has priority
  if (url) {
    const urlLang = getLangFromUrl(url);
    if (urlLang !== defaultLang) return urlLang;
  }
  
  // 2. Check stored preference
  const stored = getStoredLanguage();
  if (stored) return stored;
  
  // 3. Check browser language
  const browser = getBrowserLanguage();
  return browser;
}

/**
 * Create a translated path helper
 */
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language = lang): string {
    if (!showDefaultLang && targetLang === defaultLang) {
      return path;
    }
    return getRelativeLocaleUrl(targetLang, path);
  };
}

/**
 * Get the route without locale prefix
 */
export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const [, lang, ...segments] = pathname.split('/');
  
  if (lang in languages) {
    return '/' + segments.join('/');
  }
  
  return pathname;
}

/**
 * Advanced route translation that preserves context
 */
export function translateRoute(currentUrl: URL, targetLang: Language): string {
  const currentLang = getLangFromUrl(currentUrl);
  const translatePath = useTranslatedPath(currentLang);
  
  // If we're already on the target language, return current URL
  if (currentLang === targetLang) {
    return currentUrl.pathname;
  }
  
  const route = getRouteFromUrl(currentUrl);
  
  // Handle special routes
  if (route.startsWith('/blog/')) {
    // For blog posts, we'll go to the blog index in the target language
    // since individual posts might not exist in both languages
    return translatePath('/blog', targetLang);
  }
  
  // Handle other dynamic routes by going to their base
  if (route.includes('[') || route.match(/\/\w+\/\w+/)) {
    // Extract the base path (e.g., '/experience/some-slug' -> '/experience')
    const basePath = '/' + route.split('/').filter(Boolean)[0];
    return translatePath(basePath, targetLang);
  }
  
  // For static routes, translate directly
  return translatePath(route, targetLang);
}

/**
 * Generate alternate language URLs for SEO
 */
export function getAlternateUrls(currentUrl: URL, baseUrl: string): Array<{lang: Language, url: string}> {
  return Object.keys(languages).map(lang => ({
    lang: lang as Language,
    url: baseUrl + translateRoute(currentUrl, lang as Language)
  }));
}

/**
 * Check if a language is supported
 */
export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
}

/**
 * Get localized meta description based on current language
 */
export function getLocalizedMeta(currentLang: Language) {
  const meta = {
    en: {
      siteDescription: "Misael Abanto - Software Engineer, Data Architect, and Startup Builder. Thoughts on technology, systems, and building things that matter.",
      blogDescription: "Technical blog about software engineering, data architecture, startups, and lessons learned building scalable systems.",
      aboutDescription: "Learn more about Misael Abanto, a Peruvian software engineer specialized in fullstack development and data architecture."
    },
    es: {
      siteDescription: "Misael Abanto - Ingeniero de Software, Arquitecto de Datos y Constructor de Startups. Reflexiones sobre tecnología, sistemas y construir cosas que importan.",
      blogDescription: "Blog técnico sobre ingeniería de software, arquitectura de datos, startups y lecciones aprendidas construyendo sistemas escalables.",
      aboutDescription: "Conoce más sobre Misael Abanto, ingeniero de software peruano especializado en desarrollo fullstack y arquitectura de datos."
    }
  };
  
  return meta[currentLang];
} 