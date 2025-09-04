// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [
    mdx(),
    sitemap(),
    mermaid({
      autoTheme: true 
    })
  ],
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "redirect"
    },
    fallback: {
      es: "en"
    }
  },
  vite: {
     plugins: [tailwindcss()]
  }
});
