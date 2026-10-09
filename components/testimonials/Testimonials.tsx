"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  testimonialsIntro,
  testimonials,
  type Testimonial,
} from "./testimonials-content";

gsap.registerPlugin(ScrollTrigger);

const COLUMN_COUNT = 3;

/** Split the testimonials round-robin into vertical columns. */
function toColumns(items: Testimonial[]): Testimonial[][] {
  const columns: Testimonial[][] = Array.from({ length: COLUMN_COUNT }, () => []);
  items.forEach((item, i) => columns[i % COLUMN_COUNT].push(item));
  return columns;
}

/** Accessible star rating: filled stars up to `rating`, hollow for the rest. */
function Stars({ rating }: { rating: number }) {
  const total = 5;
  return (
    <div
      className="testimonials__stars"
      role="img"
      aria-label={`Rated ${rating} out of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <svg
          key={i}
          className={
            i < rating
              ? "testimonials__star testimonials__star--on"
              : "testimonials__star"
          }
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="testimonials__card">
      <Stars rating={item.rating} />

      <blockquote className="testimonials__quote">{item.quote}</blockquote>

      <figcaption className="testimonials__person">
        <span className="testimonials__name">{item.name}</span>
        <span className="testimonials__service">
          {item.service} · {item.location}
        </span>
        <span className="testimonials__date">{item.date}</span>
      </figcaption>
    </figure>
  );
}

/** One vertical track. Content is rendered twice so the CSS marquee loops
    seamlessly; the duplicate is hidden from assistive tech. */
function Column({ items, down }: { items: Testimonial[]; down: boolean }) {
  return (
    <div className="testimonials__col">
      <div
        className={`testimonials__track${down ? " testimonials__track--down" : ""}`}
      >
        <div className="testimonials__group">
          {items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
        <div className="testimonials__group" aria-hidden="true">
          {items.map((item) => (
            <TestimonialCard key={`${item.id}-clone`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mobile-only carousel: one card at a time, auto-advancing, no dots/controls.
    The interval only runs while the mobile breakpoint matches and motion is
    allowed, so it's idle on desktop and respects reduced-motion. */
function MobileCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(
      "(max-width: 640px) and (prefers-reduced-motion: no-preference)",
    );
    let timer: number | undefined;

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    const start = () => {
      stop();
      timer = window.setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, 4500);
    };
    const sync = () => {
      if (mq.matches) start();
      else {
        stop();
        setIndex(0);
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, [items.length]);

  return (
    <div
      className="testimonials__carousel"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="testimonials__carousel-viewport">
        <div
          className="testimonials__carousel-track"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {items.map((item, i) => (
            <div
              className="testimonials__carousel-slide"
              key={item.id}
              aria-hidden={i !== index}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const rootRef = useRef<HTMLElement>(null);
  const columns = toColumns(testimonials);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(
          root.querySelectorAll(
            ".testimonials__eyebrow, .testimonials__heading, .testimonials__lead",
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

        gsap.from(".testimonials__wall", {
          y: 40,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials__wall", start: "top 85%" },
        });

        return () => {
          gsap.set(
            root.querySelectorAll(
              ".testimonials__eyebrow, .testimonials__heading, .testimonials__lead, .testimonials__wall",
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
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials__inner">
        <div className="testimonials__head">
          <p className="testimonials__eyebrow">{testimonialsIntro.eyebrow}</p>
          <h2 id="testimonials-heading" className="testimonials__heading">
            {testimonialsIntro.headingLead}
            <span className="testimonials__heading-accent">
              {testimonialsIntro.headingAccent}
            </span>
            {testimonialsIntro.headingTrail}
          </h2>
          <p className="testimonials__lead">{testimonialsIntro.lead}</p>
        </div>

        <div className="testimonials__wall">
          {columns.map((col, i) => (
            <Column key={i} items={col} down={i % 2 === 1} />
          ))}
        </div>

        <MobileCarousel items={testimonials} />
      </div>
    </section>
  );
}
