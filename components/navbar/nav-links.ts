export type NavLink = {
  label: string;
  href: string;
  chevron?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio", chevron: true },
  { label: "Reviews", href: "#testimonials" },
];

export const contactLink = {
  label: "Contact me",
  href: "#contact",
} as const;
