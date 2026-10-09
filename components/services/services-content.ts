export type ServiceCard = {
  /** Two-digit display number, e.g. "01" */
  no: string;
  /** Small handwritten eyebrow above the title */
  eyebrow: string;
  title: string;
  description: string;
  /** Rendered as a bulleted (disc) list, matching the Figma design */
  tags: string[];
};

export const servicesIntro = {
  eyebrow: "/ Services, Skills, Abilities",
  headingLead: "What I do ",
  headingAccent: "best?",
  paragraph:
    "I design products people use and the systems teams run behind them. Consumer fintech, client products, and the interfaces that connect both.",
} as const;

export const serviceCards: ServiceCard[] = [
  {
    no: "01",
    eyebrow: "B2C and B2B",
    title: "Product Design",
    description:
      "I take a product from the first flow to something a team can ship. Onboarding, research, goals, and the enterprise tools that sit behind a consumer app.",
    tags: [
      "Consumer fintech flows",
      "Enterprise CRM and research tools",
      "Scope, journeys, and prototypes",
      "Founder and product-team reviews",
    ],
  },
  {
    no: "02",
    eyebrow: "Clear to use",
    title: "UI/UX",
    description:
      "Screens, states, and the path between them. I design for the person using the product and for the engineer picking it up next.",
    tags: [
      "User journeys and wireframes",
      "Usability and edge states",
      "Mobile-first patterns",
      "Figma handoff with fewer gaps",
    ],
  },
  {
    no: "03",
    eyebrow: "Live on the web",
    title: "Web & Landing Pages",
    description:
      "Marketing sites and product pages that explain the offer and hold up on a phone. Built to be launched, not just presented.",
    tags: [
      "Product and campaign landings",
      "Figma, Framer, and Webflow",
      "Responsive layout",
      "Launch pages and client sites",
    ],
  },
  {
    no: "04",
    eyebrow: "Built to repeat",
    title: "Design Systems",
    description:
      "Shared type, color, and components so the next feature looks like it belongs. Used across consumer products and the internal tools beside them.",
    tags: [
      "Tokens, components, and patterns",
      "Documentation for engineering",
      "Consistent product UI",
      "Figma libraries teams can reuse",
    ],
  },
];
