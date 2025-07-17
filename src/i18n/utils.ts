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
 * Check if a language is supported
 */
export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
} 