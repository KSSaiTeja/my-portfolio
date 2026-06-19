"use client";

import { useSyncExternalStore } from "react";
import { heroContent } from "./hero-content";

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

type Listener = () => void;

let currentTime = "";
const listeners = new Set<Listener>();
let intervalId: ReturnType<typeof setInterval> | undefined;

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function ensureTicker() {
  if (intervalId !== undefined) return;

  const update = () => {
    currentTime = formatTime(heroContent.timezone);
    emit();
  };

  update();
  intervalId = setInterval(update, 30_000);
}

function subscribe(listener: Listener) {
  ensureTicker();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && intervalId !== undefined) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  };
}

function getSnapshot() {
  return currentTime;
}

function getServerSnapshot() {
  return "";
}

export function useHeroTime() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function getHeroTimeLabel(time: string) {
  return `${heroContent.location} - ${time || "--:--"} ${heroContent.timezoneLabel}`;
}
