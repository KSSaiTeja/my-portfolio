import { heroContent } from "../hero/hero-content";

/** The image asset that travels Hero -> Services -> About. */
export const sceneImage = {
  src: heroContent.portraitSrc,
  alt: heroContent.portraitAlt,
  /** Shown on the flip (back) side. Swap for a Lottie player later. */
  backSrc: "/hero/flipped-portrait.png",
} as const;
