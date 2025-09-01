import { defaultLang, languages, type Language } from '@/i18n/utils';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = context.url;
  const pathname = url.pathname;

  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_') ||
    pathname.includes('.') ||
    pathname.startsWith('/api/')
  ) {
    return next();
  }

  // Check if URL already has a locale
  const [, potentialLocale] = pathname.split('/');
  const hasLocale = potentialLocale && potentialLocale in languages;

  // If accessing root path without locale, detect and redirect to preferred language
  if (pathname === '/') {
    const preferredLang = detectLanguageFromRequest(context.request);

    // Only redirect if preferred language is not the default
    if (preferredLang !== defaultLang) {
      const redirectUrl = getRelativeLocaleUrl(preferredLang, '/');
      return context.redirect(redirectUrl, 302);
    }
  }

  // If accessing a path without locale prefix, check if user prefers non-default language
  if (!hasLocale && pathname !== '/') {
    const preferredLang = detectLanguageFromRequest(context.request);

    // Only redirect if preferred language is not the default
    if (preferredLang !== defaultLang) {
      const redirectUrl = getRelativeLocaleUrl(preferredLang, pathname);
      return context.redirect(redirectUrl, 302);
    }
  }

  return next();
});

function detectLanguageFromRequest(request: Request): Language {
  // In static builds, we can't access headers during build time
  // Language detection is now handled client-side
  return defaultLang;
} 