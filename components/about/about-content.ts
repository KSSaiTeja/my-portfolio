export const aboutContent = {
  eyebrow: "/ About Me",
  headingAccent: "Creative",
  headingRest: " at the Core",
  tagline: "Designer. Marketer. Founder. Problem-solver.",
  bio: [
    "With 13 years of experience, I bridge my creativity and my ability to adapt quickly, solve problems across departments, and produce work that strengthens brands, drive revenue growth and when given a chance, support teams through leadership.",
    "My impact is incomparable.",
  ],
  ratingLabel: "Trusted by over 130+ clients",
  /** Used by the "Copy email" action. */
  email: "saiteja@example.com",
} as const;

export type AboutAction = {
  id: string;
  label: string;
  variant: "primary" | "outline";
  /** When present the action is a link; otherwise it's a button. */
  href?: string;
  icon?: "calendar";
};

export const aboutActions: AboutAction[] = [
  { id: "call", label: "Schedule a call", variant: "primary", href: "#contact", icon: "calendar" },
  { id: "email", label: "Copy email", variant: "outline" },
  { id: "cv", label: "Download CV", variant: "outline", href: "/cv.pdf" },
];

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export const aboutSocials: SocialLink[] = [
  { id: "x", label: "X (Twitter)", href: "https://x.com" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "telegram", label: "Telegram", href: "https://telegram.org" },
];

/** Scrolling stats marquee shown full-bleed at the bottom of the section. */
export const aboutStats = [
  "13+ Years of Experience",
  "600+ Successful Projects",
  "130+ Reviews-Testimonials",
  "100% Customer Satisfaction Rate",
  "50+ Leading Platform Experiences",
  "9 Certificates",
  "Top Graphic Design Voice Award",
] as const;
