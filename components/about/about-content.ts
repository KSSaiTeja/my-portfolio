export const aboutContent = {
  eyebrow: "/ About Me",
  headingAccent: "Creative",
  headingRest: " at the Core",
  tagline: "Product designer. B2C and B2B.",
  bio: [
    "I design the products people open, and the systems teams use to run them. Consumer fintech at Savart, sovereign AI at Zenerative Minds, client products at Daily Decimals, and the sites in between.",
    "The work is live: research notes, portfolios, onboarding, landing pages, and the design system that keeps the next feature consistent.",
  ],
  ratingLabel: "Product design for consumer apps and enterprise teams",
  /** Used by the "Copy email" action. */
  email: "saitej4865@gmail.com",
} as const;

export type AboutAction = {
  id: string;
  label: string;
  variant: "primary" | "outline";
  /** When present the action is a link; otherwise it's a button. */
  href?: string;
  icon?: "calendar";
  download?: string;
};

export const aboutActions: AboutAction[] = [
  { id: "call", label: "Schedule a call", variant: "primary", href: "#contact", icon: "calendar" },
  { id: "email", label: "Copy email", variant: "outline" },
  {
    id: "cv",
    label: "Download CV",
    variant: "outline",
    href: "/cv/KSSaiTeja-Resume.pdf",
    download: "KSSaiTeja - Resume.pdf",
  },
];

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  /** Kept in the list, not rendered. */
  hidden?: boolean;
};

export const aboutSocials: SocialLink[] = [
  { id: "x", label: "X (Twitter)", href: "https://x.com", hidden: true },
  { id: "instagram", label: "Instagram", href: "https://instagram.com", hidden: true },
  { id: "youtube", label: "YouTube", href: "https://youtube.com", hidden: true },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/kssaiteja/" },
  { id: "telegram", label: "Telegram", href: "https://telegram.org", hidden: true },
];

/** Scrolling stats marquee shown full-bleed at the bottom of the section. */
export const aboutStats = [
  "Product design, B2C and B2B",
  "Consumer fintech and enterprise tools",
  "Design systems and handoff",
  "Research, flows, and prototypes",
  "Client products and landing pages",
  "Figma, Framer, and Webflow",
] as const;
