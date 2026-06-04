import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domena produkcyjna. Po podpięciu własnej domeny (np. https://przemo-oil.pl)
// zmienić tutaj i w src/data/site.ts -> domain, następnie git push (auto-redeploy).
const SITE = 'https://przemo-oil.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  // Pasek narzędzi dev (logo Astro w rogu) — wyłączony, też lokalnie.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Optymalizacja lokalnych assetów do WebP przez sharp.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
