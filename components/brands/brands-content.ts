export const brandsIntro = {
  heading: "Brands I have worked with",
} as const;

export type Brand = {
  id: string;
  name: string;
  src: string;
  /** Dark tiles keep light-on-black marks readable. */
  tone: "light" | "dark";
};

export const brands: Brand[] = [
  { id: "savart", name: "Savart", src: "/brands/savart.png", tone: "light" },
  {
    id: "nirvana",
    name: "Nirvana by Savart",
    src: "/brands/nirvana.png",
    tone: "light",
  },
  { id: "stardour", name: "Stardour", src: "/brands/stardour.png", tone: "dark" },
  {
    id: "pharma-openings",
    name: "Pharma Openings",
    src: "/brands/pharma-openings.png",
    tone: "light",
  },
  {
    id: "srr-careers",
    name: "SRR Careers",
    src: "/brands/srr-careers.png",
    tone: "light",
  },
  {
    id: "daily-decimals",
    name: "Daily Decimals",
    src: "/brands/daily-decimals.png",
    tone: "light",
  },
  {
    id: "back-benching",
    name: "Back Benching with Vivek",
    src: "/brands/back-benching.png",
    tone: "dark",
  },
  {
    id: "strux-digital",
    name: "Strux Digital",
    src: "/brands/strux-digital.png",
    tone: "light",
  },
  {
    id: "einri-living",
    name: "Einri Living",
    src: "/brands/einri-living.png",
    tone: "light",
  },
  {
    id: "corporate-commerce",
    name: "Corporate Commerce",
    src: "/brands/corporate-commerce.png",
    tone: "light",
  },
  {
    id: "dashboards",
    name: "Dashboards",
    src: "/brands/dashboards.png",
    tone: "light",
  },
];
