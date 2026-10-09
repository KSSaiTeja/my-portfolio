"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "greeting" | "exiting" | "complete";

const GREETINGS = [
  "Hello",
  "నమస్కారం",
  "नमस्ते",
  "வணக்கம்",
  "ನಮಸ್ಕಾರ",
  "നമസ്കാരം",
  "નમસ્તે",
  "ନମସ୍କାର",
] as const;

const GREETING_MS = 260;
const FADE_MS = 120;
const HOLD_LAST_MS = 220;
const EXIT_DURATION_MS = 1200;

function wait(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(id);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

export function Preloader() {
  const [phase, setPhase] = useState<Phase>("greeting");
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const pageLoadedRef = useRef(false);
  const startedRef = useRef(false);

  useEffect(() => {
    pageLoadedRef.current = document.readyState === "complete";
  }, []);

  const startExit = useCallback(() => {
    setTextVisible(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPhase("exiting");
      });
    });
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setPhase("complete");
      document.body.classList.add("is-loaded");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "#060606";

    const abort = new AbortController();
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const onLoad = () => {
      pageLoadedRef.current = true;
    };

    window.addEventListener("load", onLoad);

    const run = async () => {
      try {
        for (let i = 0; i < GREETINGS.length; i++) {
          if (abort.signal.aborted) return;

          setIndex(i);
          setTextVisible(true);
          await wait(GREETING_MS, abort.signal);

          if (i < GREETINGS.length - 1) {
            setTextVisible(false);
            await wait(FADE_MS, abort.signal);
          }
        }

        await wait(HOLD_LAST_MS, abort.signal);

        while (!pageLoadedRef.current && !abort.signal.aborted) {
          await wait(80, abort.signal);
        }

        if (abort.signal.aborted) return;

        document.body.style.backgroundColor = previousBackground;
        startExit();
        exitTimer = setTimeout(() => {
          setPhase("complete");
          document.body.classList.add("is-loaded");
          document.body.style.overflow = previousOverflow;
          document.body.style.backgroundColor = previousBackground;
          document.documentElement.style.backgroundColor = "";
        }, EXIT_DURATION_MS);
      } catch {
        // aborted
      }
    };

    void run();

    return () => {
      abort.abort();
      window.removeEventListener("load", onLoad);
      if (exitTimer) clearTimeout(exitTimer);
      document.body.style.overflow = previousOverflow;
      document.body.style.backgroundColor = previousBackground;
    };
  }, [startExit]);

  const isExiting = phase === "exiting";

  return (
    <div
      className="preloader"
      data-phase={phase}
      aria-live={phase === "complete" ? "off" : "polite"}
      aria-hidden={phase === "complete"}
      aria-label="Loading portfolio"
    >
      <div
        className={`preloader__panel preloader__panel--top${isExiting ? " preloader__panel--exit" : ""}`}
      />
      <div
        className={`preloader__panel preloader__panel--bottom${isExiting ? " preloader__panel--exit" : ""}`}
      />

      <div
        className={`preloader__content${isExiting ? " preloader__content--exit" : ""}`}
      >
        <p
          className={`preloader__greeting${textVisible ? " preloader__greeting--visible" : ""}`}
        >
          {GREETINGS[index]}
        </p>
      </div>
    </div>
  );
}
