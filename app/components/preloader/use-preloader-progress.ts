"use client";

import { useEffect, useState } from "react";

const MIN_DURATION_MS = 2200;
const TICK_MS = 16;

/**
 * Blends a timed ramp with document readiness so the counter feels smooth
 * but still waits for the page before finishing.
 */
export function usePreloaderProgress() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    let loadDone = document.readyState === "complete";

    const onLoad = () => {
      loadDone = true;
    };

    if (!loadDone) {
      window.addEventListener("load", onLoad);
    }

    const tick = () => {
      const elapsed = performance.now() - start;
      const timeProgress = Math.min(elapsed / MIN_DURATION_MS, 1);
      const loadProgress = loadDone ? 1 : Math.min(elapsed / (MIN_DURATION_MS * 1.4), 0.92);
      const next = Math.floor(Math.min(timeProgress, loadProgress) * 100);

      setProgress(next);

      if (next >= 100 && loadDone) {
        setIsReady(true);
        return;
      }

      frame = window.setTimeout(tick, TICK_MS);
    };

    tick();

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(frame);
    };
  }, []);

  return { progress, isReady };
}
