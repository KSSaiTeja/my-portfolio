"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneImage } from "./scene-content";

gsap.registerPlugin(ScrollTrigger);

/* Must mirror the Services card timing so the pinned phase lines up exactly. */
const CARD_COUNT = 8;
const SCROLL_PER_CARD = 0.6;

/* Gentle scroll-linked zoom while pinned. Low intensity and only a few slow
   cycles across the whole deck, so it breathes rather than pulses per card. */
const PULSE = 0.04;
const PULSE_CYCLES = 3;
/* Snappy horizontal flip: completes in the first tenth of the pin (right as
   card 02 enters), then holds at 180 (mirrored) through the rest of the deck. */
const FLIP_FRAC = 0.1;
/* Viewport-heights of scroll spent handing the card from Services to About. */
const HANDOFF = 0.6;
/* About fade-out, tied to the About section's bottom edge (fractions of the
   viewport): full opacity while the bottom sits below the fold, fully gone by
   the time it rises to FADE_END — so the card never carries past About. */
const FADE_START = 1.0;
const FADE_END = 0.55;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Anchor = { cx: number; cy: number; w: number };

type SceneCache = {
  baseW: number;
  baseH: number;
  hero: Anchor; // viewport-centre at scroll 0
  services: Anchor; // viewport-centre while pinned (constant)
  p1: number; // scroll where the services pin starts
  p2: number; // scroll where the pin ends
  p3: number; // scroll where the about hand-off completes
};

export function ScrollPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const desktop = window.matchMedia("(min-width: 1025px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let cache: SceneCache | null = null;
    let enabled = false;
    // The About elements are read LIVE every frame (not cached doc-coords) so the
    // landing/fade always tracks their real position and can never freeze.
    let aboutEl: HTMLElement | null = null;
    let aboutSectionEl: HTMLElement | null = null;
    const ease = gsap.parseEase("power3.inOut");

    const getAnchor = (name: string) =>
      document.querySelector<HTMLElement>(`[data-scene-anchor="${name}"]`);

    const measure = () => {
      const hero = getAnchor("hero");
      const services = getAnchor("services");
      aboutEl = getAnchor("about");
      aboutSectionEl = document.querySelector<HTMLElement>(".about");
      const pin = document.querySelector<HTMLElement>(".services__pin");
      if (!hero || !services || !aboutEl || !aboutSectionEl || !pin) {
        cache = null;
        return;
      }

      const scrollY = window.scrollY;
      const heroRect = hero.getBoundingClientRect();
      const servicesRect = services.getBoundingClientRect();
      const pinRect = pin.getBoundingClientRect();

      const baseW = heroRect.width;
      const baseH = heroRect.height;

      // Lock the floating card to the hero anchor's box so scale === 1 there.
      card.style.width = `${baseW}px`;
      card.style.height = `${baseH}px`;

      const pinDocTop = pinRect.top + scrollY;
      const pinLen = (CARD_COUNT - 1) * window.innerHeight * SCROLL_PER_CARD;

      cache = {
        baseW,
        baseH,
        hero: {
          cx: heroRect.left + heroRect.width / 2,
          cy: heroRect.top + scrollY + heroRect.height / 2, // centre at scroll 0
          w: heroRect.width,
        },
        services: {
          cx: servicesRect.left + servicesRect.width / 2,
          // viewport centre is constant during the pin (pin top === 0):
          cy: servicesRect.top + scrollY - pinDocTop + servicesRect.height / 2,
          w: servicesRect.width,
        },
        p1: pinDocTop,
        p2: pinDocTop + pinLen,
        p3: pinDocTop + pinLen + window.innerHeight * HANDOFF,
      };
    };

    const render = (s: number) => {
      if (!cache) {
        measure();
        if (!cache) return;
      }
      const { baseW, baseH, hero, services } = cache;

      let cx: number;
      let cy: number;
      let width: number;
      let ry = 0;
      let pulse = 1;
      let alpha = 1;

      if (s <= cache.p1) {
        // Phase 1: travel from the hero into the right column, flat & upright.
        const t = ease(clamp01(s / cache.p1));
        cx = lerp(hero.cx, services.cx, t);
        cy = lerp(hero.cy, services.cy, t);
        width = lerp(baseW, services.w, t);
      } else if (s <= cache.p2) {
        // Phase 2: pinned on the right. The flip snaps in immediately as card 02
        // enters, then holds mirrored; the zoom pulses once per card, evenly.
        cx = services.cx;
        cy = services.cy;
        width = services.w;
        const p = (s - cache.p1) / (cache.p2 - cache.p1);
        ry = 180 * clamp01(p / FLIP_FRAC);
        const frac = (p * PULSE_CYCLES) % 1;
        pulse = 1 + PULSE * Math.sin(frac * Math.PI);
      } else {
        // Phase 3 + termination: un-flip back to the original (180 -> 360) while
        // handing off onto the About track (read LIVE so it scrolls in flow),
        // then fade out as the About section's bottom rises — stops at About.
        const t = ease(clamp01((s - cache.p2) / (cache.p3 - cache.p2)));
        // Read the About elements LIVE every frame so the landing/fade always
        // tracks their real position and can never freeze or carry over.
        const aEl = getAnchor("about") ?? aboutEl;
        const aSec =
          document.querySelector<HTMLElement>(".about") ?? aboutSectionEl;
        if (!aEl || !aSec) return;
        const a = aEl.getBoundingClientRect();
        const sec = aSec.getBoundingClientRect();
        cx = lerp(services.cx, a.left + a.width / 2, t);
        cy = lerp(services.cy, a.top + a.height / 2, t);
        width = lerp(services.w, a.width, t);
        ry = lerp(180, 360, t);
        const vh = window.innerHeight;
        // Fade out as the About section's bottom rises into view, and force it
        // fully hidden once the section is past — so it stops at About.
        alpha =
          sec.bottom <= 0
            ? 0
            : clamp01((sec.bottom - vh * FADE_END) / (vh * (FADE_START - FADE_END)));
      }

      gsap.set(card, {
        x: cx - baseW / 2,
        y: cy - baseH / 2,
        scale: (width / baseW) * pulse,
        rotationX: 0,
        rotationY: ry,
        rotation: 0,
        autoAlpha: alpha,
        transformOrigin: "50% 50%",
      });
    };

    // Driven every animation frame off the live scroll position via gsap.ticker,
    // so nothing (a ScrollTrigger refresh, the Services pin, a re-sort) can ever
    // leave the card frozen — render always runs and re-reads live geometry.
    const tick = () => render(window.scrollY);
    const onRefresh = () => {
      measure();
      render(window.scrollY);
    };

    const enable = () => {
      if (enabled) return;
      enabled = true;
      card.dataset.active = "true";
      document.body.dataset.scene = "on";
      measure();
      render(window.scrollY);
      // Re-measure whenever any ScrollTrigger (e.g. the Services pin) refreshes.
      ScrollTrigger.addEventListener("refresh", onRefresh);
      gsap.ticker.add(tick);
    };

    const disable = () => {
      if (!enabled) {
        cache = null;
        return;
      }
      enabled = false;
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(tick);
      cache = null;
      delete card.dataset.active;
      delete document.body.dataset.scene;
      gsap.set(card, { clearProps: "all" });
      card.style.width = "";
      card.style.height = "";
    };

    const sync = () => {
      if (desktop.matches && !reduced.matches) enable();
      else disable();
    };

    sync();
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    // Re-measure once the preloader unlocks scroll and fonts settle.
    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = window.setTimeout(refresh, 350);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      disable();
    };
  }, []);

  return (
    <div ref={cardRef} className="scene-portrait" aria-hidden="true">
      <div className="scene-portrait__card">
        <div className="scene-portrait__face scene-portrait__face--front">
          <Image
            src={sceneImage.src}
            alt=""
            fill
            sizes="270px"
            className="scene-portrait__image"
          />
        </div>
        <div className="scene-portrait__face scene-portrait__face--back">
          <Image
            src={sceneImage.backSrc}
            alt=""
            fill
            sizes="270px"
            className="scene-portrait__image"
          />
        </div>
      </div>
    </div>
  );
}
