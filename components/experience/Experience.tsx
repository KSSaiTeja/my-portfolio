"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceIntro, experiences } from "./experience-content";

gsap.registerPlugin(ScrollTrigger);

/** Faint (un-revealed) and full (revealed) ink colors for the scroll fill. */
const DIM = "rgba(51, 51, 51, 0.1)";
const FULL = "rgba(51, 51, 51, 1)";

export function Experience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(
          root.querySelectorAll(
            ".experience__eyebrow, .experience__heading, .experience__lead, .experience__cta",
          ),
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root, start: "top 80%" },
          },
        );

        // Each row fills its text and draws its divider as it scrolls in.
        gsap.utils
          .toArray<HTMLElement>(".experience__row", root)
          .forEach((row) => {
            gsap.fromTo(
              row.querySelectorAll(".experience__token"),
              { color: DIM },
              {
                color: FULL,
                ease: "none",
                stagger: 0.2,
                scrollTrigger: {
                  trigger: row,
                  start: "top 92%",
                  end: "top 64%",
                  scrub: true,
                },
              },
            );

            gsap.fromTo(
              row.querySelector(".experience__row-line"),
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: row,
                  start: "top 94%",
                  end: "top 74%",
                  scrub: true,
                },
              },
            );
          });

        return () => {
          gsap.set(
            root.querySelectorAll(
              ".experience__eyebrow, .experience__heading, .experience__lead, .experience__cta, .experience__token, .experience__row-line",
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
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience__inner">
        <div className="experience__head">
          <div className="experience__intro">
            <p className="experience__eyebrow">{experienceIntro.eyebrow}</p>
            <h2 id="experience-heading" className="experience__heading">
              {experienceIntro.headingLead}
              <span className="experience__heading-accent">
                {experienceIntro.headingAccent}
              </span>
            </h2>
            <p className="experience__lead">{experienceIntro.lead}</p>
          </div>

          <a className="experience__cta" href={experienceIntro.cta.href}>
            {experienceIntro.cta.label}
          </a>
        </div>

        <ul className="experience__list">
          {experiences.map((exp) => (
            <li key={exp.id} className="experience__row">
              <span className="experience__role experience__token">
                {exp.role}
              </span>
              <span className="experience__period experience__token">
                {exp.period}
              </span>
              <span className="experience__company experience__token">
                {exp.company}
              </span>
              <span className="experience__row-line" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
