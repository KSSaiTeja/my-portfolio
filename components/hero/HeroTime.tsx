"use client";

import { getHeroTimeLabel, useHeroTime } from "./hero-time";

type HeroTimeProps = {
  className?: string;
};

export function HeroTime({ className = "" }: HeroTimeProps) {
  const time = useHeroTime();

  return <p className={className}>{getHeroTimeLabel(time)}</p>;
}
