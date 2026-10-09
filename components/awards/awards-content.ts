export const awardsIntro = {
  eyebrow: "/ International Credibility",
  headingAccent: "Awards",
  headingRest: " and Recognition",
  lead: [
    "A few of the galleries that have picked up the work.",
    "These are the sites people actually use: fintech, education, interiors, and client products.",
  ],
  /** Large closing statement, revealed word-by-word below the awards list. */
  closing:
    "I work with founders, product teams, companies and brands based on strategy and innovation. I set one goal, cut noise, and move. When the job is done, the result is live and measured, not just designed.",
} as const;

export type Award = {
  id: string;
  /** Recognition received, e.g. "Site of The Day Nominee". */
  title: string;
  /** Awarding platform or organization. */
  org: string;
  /** Human-readable award date. */
  date: string;
};

export const awards: Award[] = [
  {
    id: "a1",
    title: "Daily Decimals — Site of the Day",
    org: "Land-book",
    date: "August 18, 2026",
  },
  {
    id: "a2",
    title: "Vridanta — Landing of the Week",
    org: "Lapa Ninja",
    date: "July 9, 2026",
  },
  {
    id: "a3",
    title: "Stardour — Site of the Day",
    org: "One Page Love",
    date: "June 21, 2026",
  },
  {
    id: "a4",
    title: "Nirvana by Savart — Featured Site",
    org: "Httpster",
    date: "May 14, 2026",
  },
  {
    id: "a5",
    title: "Einri Living — Site of the Day",
    org: "Land-book",
    date: "April 2, 2026",
  },
  {
    id: "a6",
    title: "Pharma Openings — Landing Highlight",
    org: "Lapa Ninja",
    date: "March 11, 2026",
  },
  {
    id: "a7",
    title: "SRR Careers — One Page Pick",
    org: "One Page Love",
    date: "February 7, 2026",
  },
  {
    id: "a8",
    title: "Savart — Interface Feature",
    org: "Httpster",
    date: "January 16, 2026",
  },
];
