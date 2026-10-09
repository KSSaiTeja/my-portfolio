export const portfolioIntro = {
  eyebrow: "/ Portfolio Projects",
  headingLead: "Selected ",
  headingAccent: "Work Samples",
  lead: "Product design for consumer apps and the B2B systems behind them. Fintech, client products, and the sites in between.",
} as const;

export type Project = {
  id: string;
  title: string;
  href: string;
  /** Screenshot in /public/portfolio. When absent a placeholder shows. */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "daily-decimals",
    title: "Daily Decimals",
    href: "https://dailydecimals.com",
    image: "/portfolio/daily-decimals.jpg",
  },
  {
    id: "vridanta",
    title: "Vridanta",
    href: "https://vridanta.com",
    image: "/portfolio/vridanta.jpg",
  },
  {
    id: "pharma-openings",
    title: "Pharma Openings",
    href: "https://pharmaopenings.com",
    image: "/portfolio/pharma-openings.jpg",
  },
  {
    id: "srr-careers",
    title: "SRR Careers",
    href: "https://srrcareers.in",
    image: "/portfolio/srr-careers.jpg",
  },
  {
    id: "einri-living",
    title: "Einri Living",
    href: "https://einriliving.com",
    image: "/portfolio/einri-living.jpg",
  },
  {
    id: "savart",
    title: "Savart",
    href: "https://savart.com",
    image: "/portfolio/savart.jpg",
  },
  {
    id: "stardour",
    title: "Stardour",
    href: "https://stardour.com",
    image: "/portfolio/stardour.jpg",
  },
  {
    id: "savart-nirvana",
    title: "Nirvana by Savart",
    href: "https://savart.com/nirvana",
    image: "/portfolio/savart-nirvana.jpg",
  },
  {
    id: "nirvana-webinar",
    title: "Nirvana Webinar",
    href: "https://nirvanabysavart.vercel.app/",
    image: "/portfolio/nirvana-by-savart.jpg",
  },
  {
    id: "gen4-live-stats",
    title: "Gen4 Live Stats",
    href: "https://gen4-live-stats.vercel.app",
    image: "/portfolio/gen4-live-stats.jpg",
  },
  {
    id: "gen4-launch",
    title: "Gen4 Launch",
    href: "https://gen4-launch.vercel.app",
    image: "/portfolio/gen4-launch.jpg",
  },
  {
    id: "ccge",
    title: "CCGE",
    href: "https://ccge.in",
    image: "/portfolio/ccge.jpg",
  },
  {
    id: "corporate-commerce",
    title: "Corporate Commerce",
    href: "https://corporatecommerce.in/",
    image: "/portfolio/corporate-commerce.jpg",
  },
  {
    id: "sri-comforts",
    title: "Sri Comforts",
    href: "https://sricomforts.com/",
    image: "/portfolio/sri-comforts.jpg",
  },
  {
    id: "guiderhubb",
    title: "GuiderHub",
    href: "https://guiderhubb.com",
    image: "/portfolio/guiderhubb.jpg",
  },
];
