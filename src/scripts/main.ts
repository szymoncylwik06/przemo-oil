/**
 * Interakcje strony Przemo-Oil.
 * Zero zależności, wszystko progresywne (działa też bez krytycznych funkcji).
 */

const onReady = (fn: () => void) => {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
};

onReady(() => {
  initHeaderScroll();
  initMobileMenu();
  initActiveLinks();
  initReveal();
  initCopyPhone();
  initLightbox();
  initCallBar();
  initSmoothAnchors();
});

/* ----------------------------------------- nagłówek: tło po scrollu */
function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const update = () => {
    if (window.scrollY > 24) header.setAttribute("data-scrolled", "");
    else header.removeAttribute("data-scrolled");
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* --------------------------------------------------- menu mobilne */
function initMobileMenu() {
  const menu = document.querySelector<HTMLElement>("[data-menu]");
  const openBtn = document.querySelector<HTMLElement>("[data-menu-open]");
  const closeEls = document.querySelectorAll<HTMLElement>("[data-menu-close]");
  const links = document.querySelectorAll<HTMLElement>("[data-menu-link]");
  if (!menu || !openBtn) return;

  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
    document.body.style.overflow = "hidden";
    openBtn.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
    openBtn.setAttribute("aria-expanded", "false");
    window.setTimeout(() => (menu.hidden = true), 300);
  };

  openBtn.addEventListener("click", open);
  closeEls.forEach((el) => el.addEventListener("click", close));
  links.forEach((l) => l.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) close();
  });
}

/* ------------------------------- podświetlanie aktywnej pozycji nav */
function initActiveLinks() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-navlink]"));
  if (!links.length) return;
  const map = new Map<string, HTMLAnchorElement>();
  links.forEach((l) => {
    const id = l.getAttribute("href")?.replace("#", "");
    if (id) map.set(id, l);
  });
  const sections = Array.from(map.keys())
    .map((id) => document.getElementById(id))
    .filter((s): s is HTMLElement => Boolean(s));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.removeAttribute("aria-current"));
          map.get(entry.target.id)?.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* --------------------------------------------- scroll reveal sekcji */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );
  els.forEach((el) => observer.observe(el));
}

/* -------------------------------------------- kopiowanie telefonu */
function initCopyPhone() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-copy]");
  buttons.forEach((btn) => {
    const value = btn.getAttribute("data-copy") || "";
    const label = btn.querySelector<HTMLElement>("[data-copy-label]");
    const original = label?.textContent || "Kopiuj";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        ta.remove();
      }
      btn.classList.add("is-copied");
      if (label) label.textContent = "Skopiowano!";
      window.setTimeout(() => {
        btn.classList.remove("is-copied");
        if (label) label.textContent = original;
      }, 1800);
    });
  });
}

/* ------------------------------------------------------- lightbox */
function initLightbox() {
  const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-gallery] [data-full]"));
  const lb = document.querySelector<HTMLElement>("[data-lightbox]");
  if (!triggers.length || !lb) return;

  const img = lb.querySelector<HTMLImageElement>("[data-lb-img]")!;
  const caption = lb.querySelector<HTMLElement>("[data-lb-caption]")!;
  const closeEls = lb.querySelectorAll<HTMLElement>("[data-lb-close]");
  const prevBtn = lb.querySelector<HTMLElement>("[data-lb-prev]")!;
  const nextBtn = lb.querySelector<HTMLElement>("[data-lb-next]")!;

  const items = triggers.map((t) => ({
    full: t.getAttribute("data-full") || "",
    caption: t.getAttribute("data-caption") || "",
  }));
  let index = 0;
  let lastFocused: HTMLElement | null = null;

  const render = () => {
    const it = items[index];
    img.src = it.full;
    img.alt = it.caption;
    caption.textContent = it.caption;
  };
  const open = (i: number) => {
    index = i;
    lastFocused = document.activeElement as HTMLElement;
    render();
    lb.hidden = false;
    lb.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => lb.classList.add("is-open"));
    document.body.style.overflow = "hidden";
    (closeEls[0] as HTMLElement)?.focus();
  };
  const close = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    window.setTimeout(() => (lb.hidden = true), 250);
    lastFocused?.focus();
  };
  const go = (dir: number) => {
    index = (index + dir + items.length) % items.length;
    render();
  };

  triggers.forEach((t, i) => t.addEventListener("click", () => open(i)));
  closeEls.forEach((el) => el.addEventListener("click", close));
  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
}

/* ------------------------------------------ pasek "Zadzwoń" (mobile) */
function initCallBar() {
  const bar = document.querySelector<HTMLElement>("[data-callbar]");
  if (!bar) return;
  const hero = document.getElementById("top");
  if (!hero || !("IntersectionObserver" in window)) {
    bar.classList.add("is-visible");
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        bar.classList.toggle("is-visible", !entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(hero);
}

/* ----------------------- płynne przewijanie z domknięciem (fallback) */
function initSmoothAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
}
