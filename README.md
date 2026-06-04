# Przemo-Oil — strona wizytówkowa

Statyczna strona one-page sklepu **Przemo-Oil** (oleje, płyny i smary) w Siedlcach.
Zbudowana w **Astro 5 + Tailwind 4**. Wykonanie: SC Digital Marketing.

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
  styles/global.css   # design system (kolory, typografia, animacje)
  scripts/main.ts     # interakcje (menu, reveal, lightbox, kopiowanie telefonu)
  assets/
    images/           # zdjęcia hero/tła (Pexels, licencja darmowa)
    facebook/          # 7 grafik promocyjnych klienta (galeria)
public/               # favicon.svg, og-image.jpg
```

## Do potwierdzenia z klientem (TODO)

- [ ] **Godziny otwarcia** — obecnie placeholder (`src/data/site.ts` → `hours`), oznaczony na stronie jako „do potwierdzenia". Po podaniu zaktualizować też `openingHoursSpecification` w `src/layouts/Base.astro`.
- [ ] **Domena docelowa** — ustawiona tymczasowo `https://przemo-oil.pl` w `astro.config.mjs` (`site`) oraz `src/data/site.ts` (`domain`). Zmienić na faktyczną domenę przed publikacją (wpływa na canonical, sitemap, Open Graph).

## Deploy (Vercel)

1. Wypchnąć repo na GitHub.
2. W Vercel: **Import Project** → wybrać repo. Astro jest wykrywane automatycznie
   (build: `npm run build`, output: `dist`). Brak zmiennych środowiskowych.
3. Po podpięciu domeny zaktualizować `site`/`domain` (punkt TODO wyżej) i przebudować.

## Dane firmy

- **Adres:** ul. Zambrowska 42, 08-110 Siedlce
- **Telefon:** 604 473 573
- **E-mail:** przemo-oil@wp.pl
- **Facebook:** profil aktywny (link w stopce)
- **Marki:** Castrol, Mobil, Shell, Total, Texaco, Repsol, Cepsa, Eurol, K2
