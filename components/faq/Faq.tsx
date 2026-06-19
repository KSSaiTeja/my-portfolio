"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqIntro, faqs, type Faq as FaqItem } from "./faq-content";

gsap.registerPlugin(ScrollTrigger);

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `${item.id}-panel`;
  const buttonId = `${item.id}-button`;

  return (
    <li className={`faq__item${open ? " faq__item--open" : ""}`}>
      <h3 className="faq__question-wrap">
        <button
          type="button"
          id={buttonId}
          className="faq__question"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq__question-text">{item.question}</span>
          <span className="faq__icon" aria-hidden="true" />
        </button>
      </h3>

      {/* Grid-rows 0fr→1fr gives a smooth, dependency-free height animation
          while keeping the answer in the DOM for assistive tech. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq__panel"
      >
        <div className="faq__panel-inner">
          <p className="faq__answer">{item.answer}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  const rootRef = useRef<HTMLElement>(null);
  // Single-open accordion; the first question starts expanded (matches design).
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(root.querySelectorAll(".faq__eyebrow, .faq__heading"), {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 78%" },
        });

        gsap.from(root.querySelectorAll(".faq__item"), {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".faq__list", start: "top 85%" },
        });

        return () => {
          gsap.set(
            root.querySelectorAll(".faq__eyebrow, .faq__heading, .faq__item"),
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
      className="faq"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="faq__inner">
        <div className="faq__head">
          <p className="faq__eyebrow">{faqIntro.eyebrow}</p>
          <h2 id="faq-heading" className="faq__heading">
            {faqIntro.headingLead}
            <span className="faq__heading-accent">{faqIntro.headingAccent}</span>
            {faqIntro.headingTrail}
          </h2>
        </div>

        <ul className="faq__list">
          {faqs.map((item) => (
            <FaqRow
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() =>
                setOpenId((current) => (current === item.id ? null : item.id))
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
