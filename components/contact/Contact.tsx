"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  contactCard,
  contactFields,
  contactIntro,
  contactStatuses,
  contactSuccess,
  type ContactStatus,
} from "./contact-content";

gsap.registerPlugin(ScrollTrigger);

type FormValues = {
  fullName: string;
  role: string;
  email: string;
  moreInfo: string;
};

const EMPTY_FORM: FormValues = {
  fullName: "",
  role: "",
  email: "",
  moreInfo: "",
};

export function Contact() {
  const rootRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [status, setStatus] = useState<ContactStatus | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired yet — surface an inline confirmation and reset.
    setSubmitted(true);
    setValues(EMPTY_FORM);
    setStatus(null);
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(root.querySelectorAll(".contact__eyebrow, .contact__heading"), {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 78%" },
        });

        gsap.from([".contact__form", ".contact__card"], {
          y: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".contact__grid", start: "top 82%" },
        });

        return () => {
          gsap.set(
            root.querySelectorAll(
              ".contact__eyebrow, .contact__heading, .contact__form, .contact__card",
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
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact__inner">
        <div className="contact__head">
          <p className="contact__eyebrow">{contactIntro.eyebrow}</p>
          <h2 id="contact-heading" className="contact__heading">
            {contactIntro.headingLead}
            <span className="contact__heading-accent">
              {contactIntro.headingAccent}
            </span>
            {contactIntro.headingTrail}
          </h2>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact__form-title">{contactIntro.formTitle}</h3>
            <p className="contact__form-lead">{contactIntro.formLead}</p>

            {contactFields.map((field) => (
              <div key={field.id} className="contact__field">
                <label className="contact__label" htmlFor={`contact-${field.id}`}>
                  {field.label} <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`contact-${field.id}`}
                  className="contact__input"
                  type={field.type}
                  value={values[field.id]}
                  onChange={(event) => update(field.id, event.target.value)}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                />
              </div>
            ))}

            <fieldset className="contact__fieldset">
              <legend className="contact__label">
                Your status? <span aria-hidden="true">*</span>
              </legend>
              <div className="contact__choices">
                {contactStatuses.map((option) => (
                  <label key={option.id} className="contact__choice">
                    <input
                      type="radio"
                      name="contact-status"
                      value={option.id}
                      checked={status === option.id}
                      onChange={() => setStatus(option.id)}
                      className="contact__radio"
                    />
                    <span className="contact__radio-dot" aria-hidden="true" />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-moreInfo">
                More info <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-moreInfo"
                className="contact__textarea"
                value={values.moreInfo}
                onChange={(event) => update("moreInfo", event.target.value)}
                placeholder="What's this about? Project, hiring, or opportunity?"
                rows={3}
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              Submit
              <span aria-hidden="true">&rsaquo;</span>
            </button>

            <p
              className="contact__success"
              role="status"
              aria-live="polite"
              data-visible={submitted}
            >
              {submitted ? contactSuccess : ""}
            </p>
          </form>

          <aside className="contact__card">
            <Image
              src={contactCard.portraitSrc}
              alt={contactCard.portraitAlt}
              fill
              sizes="(max-width: 880px) 100vw, 33vw"
              className="contact__card-img"
            />
            <div className="contact__card-overlay" aria-hidden="true" />

            <span className="contact__card-badge">{contactCard.badge}</span>

            <div className="contact__card-body">
              <p className="contact__card-copy">{contactCard.body}</p>
              <p className="contact__card-signature">{contactCard.signature}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
