"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  portfolioIntro,
  portfolioFeature,
  projects,
  type Project,
} from "./portfolio-content";

gsap.registerPlugin(ScrollTrigger);

/** Card media: real screenshot when present, otherwise a tidy placeholder. */
function ProjectMedia({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false);
  const showImage = project.image && !errored;

  return (
    <div className="portfolio__card-media">
      {showImage ? (
        <Image
          src={project.image as string}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="portfolio__card-image"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="portfolio__card-placeholder">{project.title}</span>
      )}
    </div>
  );
}

export function Portfolio() {
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
            ".portfolio__eyebrow, .portfolio__heading, .portfolio__lead, .portfolio__cta-link",
          ),
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root, start: "top 78%" },
          },
        );

        gsap.from(root.querySelectorAll(".portfolio__card"), {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".portfolio__grid",
            start: "top 82%",
          },
        });

        gsap.from(".portfolio__feature", {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          // Drop the leftover inline transform so the CSS hover tilt can apply.
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".portfolio__feature",
            start: "top 88%",
          },
        });

        return () => {
          gsap.set(
            root.querySelectorAll(
              ".portfolio__eyebrow, .portfolio__heading, .portfolio__lead, .portfolio__cta-link, .portfolio__card, .portfolio__feature",
            ),
            { clearProps: "all" },
          );
        };
      },
    );

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
      className="portfolio"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio__inner">
        <div className="portfolio__head">
          <div className="portfolio__intro">
            <p className="portfolio__eyebrow">{portfolioIntro.eyebrow}</p>
            <h2 id="portfolio-heading" className="portfolio__heading">
              {portfolioIntro.headingLead}
              <span className="portfolio__heading-accent">
                {portfolioIntro.headingAccent}
              </span>
            </h2>
            <p className="portfolio__lead">{portfolioIntro.lead}</p>
          </div>

          <a className="portfolio__cta-link" href={portfolioIntro.cta.href}>
            {portfolioIntro.cta.label}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <ul className="portfolio__grid">
          {projects.map((project) => (
            <li key={project.id} className="portfolio__card">
              <a className="portfolio__card-link" href={project.href}>
                <ProjectMedia project={project} />
              </a>
            </li>
          ))}
        </ul>

        <a className="portfolio__feature" href={portfolioFeature.href}>
          <span className="portfolio__feature-banner" aria-hidden="true" />

          <span className="portfolio__feature-kicker">
            {portfolioFeature.kicker}
          </span>
          <span className="portfolio__feature-title">
            {portfolioFeature.title}
          </span>
          <span className="portfolio__feature-caption">
            {portfolioFeature.caption}
          </span>
        </a>
      </div>
    </section>
  );
}
