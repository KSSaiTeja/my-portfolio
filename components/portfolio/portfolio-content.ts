export const portfolioIntro = {
  eyebrow: "/ Portfolio Projects",
  headingLead: "Selected ",
  headingAccent: "Work Samples",
  lead: "A carefully picked showcase of projects that highlight my commitment to this design industry.",
  cta: {
    label: "Complete Portfolio",
    href: "#portfolio",
  },
} as const;

export const portfolioFeature = {
  kicker: "Click here to see my",
  title: "Complete Portfolio",
  caption: "Updated portfolio showcase, as of September, 2025.",
  href: "#portfolio",
} as const;

export type Project = {
  id: string;
  /** Short label shown over the placeholder until a real screenshot is added. */
  title: string;
  href: string;
  /** Optional screenshot in /public/portfolio. When absent a placeholder shows. */
  image?: string;
};

// To show a real screenshot, drop the file in /public/portfolio and set its
// `image` path (the commented value next to each project below).
export const projects: Project[] = [
  {
    id: "p1",
    title: "Jewelry E-commerce",
    href: "#portfolio",
    // image: "/portfolio/work-1.png",
  },
  {
    id: "p2",
    title: "Mobile App Showcase",
    href: "#portfolio",
    // image: "/portfolio/work-2.png",
  },
  {
    id: "p3",
    title: "Digital Services Site",
    href: "#portfolio",
    // image: "/portfolio/work-3.png",
  },
  {
    id: "p4",
    title: "Social Media Campaigns",
    href: "#portfolio",
    // image: "/portfolio/work-4.png",
  },
];
