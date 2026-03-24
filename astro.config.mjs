// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // Add lastmod to all sitemap entries
        if (!item.lastmod) {
          item.lastmod = new Date().toISOString();
        }
        return item;
      },
    }),
    mermaid({
      autoTheme: true 
    }),
    icon()
  ],
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
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
