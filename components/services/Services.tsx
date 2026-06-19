"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCards, servicesIntro } from "./services-content";

gsap.registerPlugin(ScrollTrigger);

/** Uniform lip (px) each buried card is nudged down per depth level. */
const DEPTH_LIP = 16;
/** Scale removed per depth level as a card is buried. */
const DEPTH_SCALE = 0.04;
/** Floor so very deep cards don't collapse to nothing. */
const MIN_SCALE = 0.86;
/** Viewport-heights of scroll spent on each incoming card while pinned. */
const SCROLL_PER_CARD = 0.6;
/** Smooth deceleration used for every property transition. */
const EASE = "power3.out";
/** Resting tilt in degrees; cards alternate right / left. */
const TILT = 5;
/** On hover the card swings this many degrees the opposite way. */
const HOVER_TILT = 2;

/**
 * Visual state of a card given how far it sits *below* the active card.
 * depth 0 = active (sharp, full size); deeper = receded + faded into the bg.
 */
function depthState(depth: number) {
  if (depth <= 0) return { y: 0, scale: 1, autoAlpha: 1 };
  const opacity = depth === 1 ? 0.4 : depth === 2 ? 0.12 : 0;
  return {
    y: depth * DEPTH_LIP,
    scale: Math.max(1 - depth * DEPTH_SCALE, MIN_SCALE),
    autoAlpha: opacity,
  };
}

export function Services() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const pin = root.querySelector<HTMLElement>(".services__pin");
        const deck = root.querySelector<HTMLElement>(".services__deck");
        const cards = gsap.utils.toArray<HTMLElement>(".services__card", root);
        if (!pin || !deck || cards.length === 0) return;

        const inners = cards.map(
          (card) => card.querySelector<HTMLElement>(".services__card-inner")!,
        );

        root.dataset.ready = "true";

        // Uniform height (tallest card) so every card in the deck lines up and
        // the buried lips read as one clean stack.
        const sizeDeck = () => {
          inners.forEach((el) => (el.style.height = "auto"));
          const maxH = inners.reduce((m, el) => Math.max(m, el.offsetHeight), 0);
          inners.forEach((el) => (el.style.height = `${maxH}px`));
          deck.style.height = `${maxH + 2 * DEPTH_LIP + 8}px`;
        };
        sizeDeck();
        ScrollTrigger.addEventListener("refreshInit", sizeDeck);

        gsap.set(cards, { transformOrigin: "50% 50%", force3D: true });
        // Card 01 is active and visible by default; the rest wait below the
        // fold at full size, ready to slide up over the deck.
        gsap.set(cards[0], depthState(0));
        cards.slice(1).forEach((card) =>
          gsap.set(card, {
            y: () => window.innerHeight,
            scale: 1,
            autoAlpha: 1,
          }),
        );

        const tl = gsap.timeline({
          defaults: { ease: EASE },
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () =>
              "+=" +
              (cards.length - 1) * window.innerHeight * SCROLL_PER_CARD,
            pin: pin,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Each step: the incoming card rises to the active slot while every
        // card already in the deck recedes exactly one depth level deeper.
        for (let k = 1; k < cards.length; k++) {
          const at = k - 1;
          tl.to(cards[k], { ...depthState(0), duration: 1 }, at);
          for (let j = 0; j < k; j++) {
            tl.to(cards[j], { ...depthState(k - j), duration: 1 }, at);
          }
        }

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", sizeDeck);
          delete root.dataset.ready;
          inners.forEach((el) => (el.style.height = ""));
          deck.style.height = "";
          gsap.set(cards, { clearProps: "transform,opacity,visibility" });
        };
      },
    );

    // The preloader locks scroll and fonts load late — recompute after both.
    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = window.setTimeout(refresh, 300);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="services"
      id="skills"
      aria-label="Services and skills"
    >
      <div className="services__pin">
        <div className="services__inner">
          <div className="services__intro">
            <p className="services__eyebrow">{servicesIntro.eyebrow}</p>
            <h2 className="services__heading">
              {servicesIntro.headingLead}
              <span className="services__heading-accent">
                {servicesIntro.headingAccent}
              </span>
            </h2>
            <p className="services__lead">{servicesIntro.paragraph}</p>
          </div>

          <div className="services__deck">
            <ol className="services__cards">
              {serviceCards.map((card, i) => (
                <li
                  key={card.no}
                  className="services__card"
                  style={
                    {
                      zIndex: i + 1,
                      // First card tilts right (+5°), the next left (−5°), and
                      // so on. Hover swings 2° the opposite way.
                      "--tilt": `${i % 2 === 0 ? TILT : -TILT}deg`,
                      "--tilt-hover": `${i % 2 === 0 ? -HOVER_TILT : HOVER_TILT}deg`,
                    } as CSSProperties
                  }
                >
                  <article className="services__card-inner">
                    <p className="services__card-eyebrow">{card.eyebrow}</p>
                    <h3 className="services__card-title">
                      {card.no}. {card.title}
                    </h3>
                    <p className="services__card-desc">{card.description}</p>
                    <ul className="services__card-tags">
                      {card.tags.map((tag) => (
                        <li key={tag} className="services__card-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <div className="services__media" aria-hidden="true">
            <div className="scene-anchor" data-scene-anchor="services" />
          </div>
        </div>
      </div>
    </section>
  );
}
