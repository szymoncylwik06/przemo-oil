/**
 * Centralne dane strony Przemo-Oil.
 * Jedno źródło prawdy: kontakt, nawigacja, asortyment, marki.
 * Wszystkie teksty bazują na materiałach klienta (posty FB, brief).
 */

export const site = {
  name: "Przemo-Oil",
  legalName: "PRZEMO-OIL",
  tagline: "Oleje · płyny · smary",
  shortDesc: "Sklep z olejami, płynami i smarami w Siedlcach. Sprawdzone marki, hurt i detal.",
  domain: "https://przemo-oil.vercel.app",
} as const;

export const contact = {
  phoneDisplay: "604 473 573",
  phoneHref: "tel:+48604473573",
  phoneRaw: "+48 604 473 573",
  email: "przemo-oil@wp.pl",
  emailHref: "mailto:przemo-oil@wp.pl",
  street: "ul. Zambrowska 42",
  postal: "08-110",
  city: "Siedlce",
  region: "mazowieckie",
  country: "Polska",
  facebook: "https://www.facebook.com/profile.php?id=100063367801179",
  /** Zapytanie do osadzonej mapy Google. */
  mapQuery: "Zambrowska 42, 08-110 Siedlce",
  /** Współrzędne przybliżone dla schema.org (Siedlce, ul. Zambrowska). */
  geo: { lat: 52.1772, lng: 22.2895 },
} as const;

/**
 * Godziny otwarcia - PLACEHOLDER do potwierdzenia z klientem.
 * Po potwierdzeniu zaktualizować wartości oraz `openingHoursSchema` niżej.
 */
export const hours = {
  unconfirmed: true,
  rows: [
    { day: "Poniedziałek - Piątek", time: "8:00 - 18:00" },
    { day: "Sobota", time: "8:00 - 14:00" },
    { day: "Niedziela", time: "Zamknięte" },
  ],
} as const;

export const nav = [
  { label: "O nas", href: "#o-nas" },
  { label: "Asortyment", href: "#asortyment" },
  { label: "Marki", href: "#marki" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export type Product = {
  id: string;
  name: string;
  desc: string;
  icon: string; // klucz w ProductIcon.astro
};

export const products: Product[] = [
  {
    id: "silnikowe",
    name: "Oleje silnikowe",
    desc: "Mineralne, półsyntetyczne i syntetyczne - do silników benzynowych, diesla i LPG.",
    icon: "engine",
  },
  {
    id: "przekladniowe",
    name: "Oleje przekładniowe",
    desc: "Do skrzyń manualnych, automatycznych oraz mostów i przekładni napędowych.",
    icon: "gearbox",
  },
  {
    id: "hydrauliczne",
    name: "Oleje hydrauliczne",
    desc: "Do układów hydraulicznych maszyn, sprzętu budowlanego i rolniczego.",
    icon: "hydraulic",
  },
  {
    id: "chlodnicze",
    name: "Płyny chłodnicze",
    desc: "Gotowe płyny i koncentraty - ochrona przed zamarzaniem i przegrzaniem silnika.",
    icon: "coolant",
  },
  {
    id: "spryskiwacze",
    name: "Płyny do spryskiwaczy",
    desc: "Letnie i zimowe - skutecznie usuwają brud, nie zamarzają i nie zostawiają smug.",
    icon: "washer",
  },
  {
    id: "smary",
    name: "Smary",
    desc: "Smary stałe i półpłynne do łożysk, zawiasów, prowadnic i podzespołów.",
    icon: "grease",
  },
];

/** Marki partnerskie - kolejność jak w materiałach klienta. */
export const brands = [
  "Castrol",
  "Mobil",
  "Shell",
  "Total",
  "Texaco",
  "Repsol",
  "Cepsa",
  "Eurol",
  "K2",
] as const;

/** Grafiki promocyjne z Facebooka (galeria z lightboxem). */
export const galleryImages = [
  { src: "fb-1-telefon-oleje.jpg", alt: "Przemo-Oil - oferta olejów silnikowych, przekładniowych i hydraulicznych" },
  { src: "fb-2-oferta-pomarancz.jpg", alt: "Przemo-Oil - pełna oferta płynów, smarów i olejów" },
  { src: "fb-7-potrzebujesz-hurt-detal.jpg", alt: "Przemo-Oil - potrzebujesz oleju, płynu lub smaru? Hurt i detal" },
  { src: "fb-5-k2-zapraszamy.jpg", alt: "Przemo-Oil - produkty K2 i wymiana oleju, zapraszamy" },
  { src: "fb-4-oferujemy-czerwony.jpg", alt: "Przemo-Oil - oferujemy oleje i płyny eksploatacyjne" },
  { src: "fb-6-oferujemy-szary.jpg", alt: "Przemo-Oil - oferta olejów i płynów do spryskiwaczy" },
  { src: "fb-3-kolaz-zapraszamy.jpg", alt: "Przemo-Oil - kolaż produktów, zapraszamy do sklepu w Siedlcach" },
] as const;

/** Krótkie wyróżniki zaufania (pasek pod hero). */
export const trustPoints = [
  "9 sprawdzonych marek",
  "Hurt i detal",
  "Doradztwo przy wyborze",
  "Siedlce, ul. Zambrowska 42",
] as const;
