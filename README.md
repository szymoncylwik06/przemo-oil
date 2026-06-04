# Przemo-Oil - strona wizytówkowa

Statyczna strona one-page sklepu **Przemo-Oil** (oleje, płyny i smary) w Siedlcach.
Zbudowana w **Astro 5 + Tailwind 4**. Wykonanie: SC Digital Marketing.

- **Live:** https://przemo-oil.vercel.app
- **Repo:** https://github.com/szymoncylwik06/przemo-oil

## Uruchomienie lokalne

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build / podgląd produkcji

```bash
npm run build    # generuje statyczny output do dist/
npm run preview  # serwuje dist/ lokalnie
```

## Struktura

```
src/
  data/site.ts        # JEDNO źródło prawdy: kontakt, asortyment, marki, nawigacja
  layouts/Base.astro  # <head>, SEO, Open Graph, schema.org (LocalBusiness)
  components/          # Nav, Hero, About, Products, Brands, Gallery, Lightbox, Contact, Footer, MobileCallBar
  pages/index.astro   # złożenie strony
  pages/robots.txt.ts # dynamiczny robots.txt
  styles/global.css   # design system (kolory, typografia, animacje)
  scripts/main.ts     # interakcje (menu, reveal, lightbox, kopiowanie telefonu)
  assets/
    images/           # zdjęcia hero/tła (Pexels, licencja darmowa)
    facebook/          # 7 grafik promocyjnych klienta (galeria)
public/               # favicon.svg, og-image.jpg
```

## Do potwierdzenia z klientem (TODO)

- [ ] **Godziny otwarcia** - obecnie placeholder (`src/data/site.ts` -> `hours`), oznaczony na stronie jako „do potwierdzenia". Po podaniu zaktualizować też `openingHoursSpecification` w `src/layouts/Base.astro`.
- [ ] **Własna domena (opcjonalnie)** - strona działa na `przemo-oil.vercel.app`. Po podpięciu domeny (np. `przemo-oil.pl`) zmienić `site` w `astro.config.mjs` oraz `domain` w `src/data/site.ts`, potem `git push` (auto-redeploy). Wpływa na canonical, sitemap i Open Graph.

## Deploy

Strona jest wdrożona na **Vercel** i połączona z repo GitHub:
**każdy `git push` na `main` uruchamia automatyczny re-deploy** produkcji.

Deploy z linii poleceń (Vercel CLI, projekt już zlinkowany w `.vercel/`):

```bash
vercel            # podgląd (preview deployment)
vercel --prod     # deploy produkcyjny
vercel logs       # logi
vercel ls         # lista deploymentów
```

## Dane firmy

- **Adres:** ul. Zambrowska 42, 08-110 Siedlce
- **Telefon:** 604 473 573
- **E-mail:** przemo-oil@wp.pl
- **Facebook:** profil aktywny (link w stopce)
- **Marki:** Castrol, Mobil, Shell, Total, Texaco, Repsol, Cepsa, Eurol, K2
