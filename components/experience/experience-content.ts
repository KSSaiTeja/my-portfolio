export const experienceIntro = {
  eyebrow: "/ Career",
  headingLead: "Work ",
  headingAccent: "Experience",
  lead: "Where I do my best work: B2C products people use, and the B2B enterprise systems teams run.",
  cta: {
    label: "Download CV",
    href: "/cv/KSSaiTeja-Resume.pdf",
  },
} as const;

export type Experience = {
  id: string;
  role: string;
  period: string;
  company: string;
  /** One line on the kind of product work, B2C or B2B. */
  focus: string;
  /** Company mark in /public/experience. */
  logo: string;
};

export const experiences: Experience[] = [
  {
    id: "zenerative-minds",
    role: "Product Designer",
    period: "Aug 2026 – Present",
    company: "Zenerative Minds",
    focus:
      "B2B. Product design for Tathya, the sovereign agentic platform for decisions in defence, pharma, and healthcare.",
    logo: "/experience/zenerative-minds.png?v=2",
  },
  {
    id: "daily-decimals",
    role: "Head of Design",
    period: "Apr 2026 – Present",
    company: "Daily Decimals",
    focus:
      "B2B. Design direction for client products, AI workflows, and the proposal systems that sell the work.",
    logo: "/experience/daily-decimals.png",
  },
  {
    id: "savart",
    role: "Senior UI/UX Designer",
    period: "May 2024 – Mar 2026",
    company: "Savart",
    focus:
      "B2C and B2B. Consumer fintech for millions, plus the enterprise CRM and research platform behind it.",
    logo: "/experience/savart.svg",
  },
  {
    id: "heamac",
    role: "UI/UX Design Intern",
    period: "Mar 2024",
    company: "Heamac Healthcare",
    focus:
      "B2B healthcare. Mobile-first patterns and a cleaner handoff from design to engineering.",
    logo: "/experience/heamac.png",
  },
];
