"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awards, awardsIntro } from "./awards-content";

gsap.registerPlugin(ScrollTrigger);

/** Un-revealed (faint) and revealed (full) ink colors for the scroll fill. */
const DIM = "rgba(51, 51, 51, 0.1)";
const FULL = "rgba(51, 51, 51, 1)";

/** Split a string into word <span>s, preserving the whitespace between them. */
function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\s+)/).map((chunk, i) =>
        chunk.trim() === "" ? (
          <span key={i}>{chunk}</span>
        ) : (
          <span key={i} className="awards__word">
            {chunk}
          </span>
        ),
      )}
    </>
  );
}

export function Awards() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        // Eyebrow + heading rise into place (the accent color is untouched).
        gsap.from(
          root.querySelectorAll(".awards__eyebrow, .awards__heading"),
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root, start: "top 80%" },
          },
        );

        // Each award row fills its cells and draws its divider as it enters.
        gsap.utils.toArray<HTMLElement>(".awards__row", root).forEach((row) => {
          gsap.fromTo(
            row.querySelectorAll(".awards__token"),
            { color: DIM },
            {
              color: FULL,
              ease: "none",
              stagger: 0.25,
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 62%",
                scrub: true,
              },
            },
          );

          gsap.fromTo(
            row.querySelector(".awards__row-line"),
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 92%",
                end: "top 72%",
                scrub: true,
              },
            },
          );
        });

        // Closing statement: large copy that fills word-by-word on its way up.
        const closing = root.querySelector(".awards__closing");
        if (closing) {
          gsap.fromTo(
            closing.querySelectorAll(".awards__word"),
            { color: DIM },
            {
              color: FULL,
              ease: "none",
              stagger: 1,
              scrollTrigger: {
                trigger: closing,
                start: "top 82%",
                end: "bottom 60%",
                scrub: true,
              },
            },
          );
        }

        return () => {
          gsap.set(
            root.querySelectorAll(
              ".awards__word, .awards__token, .awards__row-line, .awards__eyebrow, .awards__heading",
            ),
            { clearProps: "all" },
          );
        };
      },
    );

    // Fonts/preloader settle late — recompute trigger positions afterwards.
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
      className="awards"
      id="awards"
      aria-labelledby="awards-heading"
    >
      <div className="awards__inner">
        <p className="awards__eyebrow">{awardsIntro.eyebrow}</p>

        <h2 id="awards-heading" className="awards__heading">
          <span className="awards__heading-accent">
            {awardsIntro.headingAccent}
          </span>
          {awardsIntro.headingRest}
        </h2>

        <div className="awards__lead">
          {awardsIntro.lead.map((paragraph) => (
            <p key={paragraph} className="awards__lead-text">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="awards__list">
          {awards.map((award) => (
            <li key={award.id} className="awards__row">
              <span className="awards__title awards__token">{award.title}</span>
              <span className="awards__org awards__token">{award.org}</span>
              <span className="awards__date awards__token">{award.date}</span>
              <span className="awards__row-line" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <p className="awards__closing">
          <Words text={awardsIntro.closing} />
        </p>
      </div>
    </section>
  );
}
