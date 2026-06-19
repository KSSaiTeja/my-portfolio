export const awardsIntro = {
  eyebrow: "/ International Credibility",
  headingAccent: "Awards",
  headingRest: " and Recognition",
  lead: [
    "Awards aren’t everything, but they signal impact, taste, and execution.",
    "I hold my work to high standards and consistently deliver at that level. Being recognized across leading international platforms matters, it reflects both the work and the thinking behind it.",
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
  { id: "a1", title: "WD Website Favorite", org: "WD Awards", date: "April 3, 2026" },
  { id: "a2", title: "Project of The Day", org: "Astonishing Awards", date: "March 22, 2026" },
  { id: "a3", title: "Site of The Day Nominee", org: "Awwwards", date: "March 21, 2026" },
  { id: "a4", title: "Best Website Nominee", org: "WD Awards", date: "March 17, 2026" },
  { id: "a5", title: "Portfolio of The Day", org: "Foliobin", date: "March 03, 2026" },
  { id: "a6", title: "Site of The Month", org: "Web Design Awards", date: "March, 2026" },
  { id: "a7", title: "Site Highlight", org: "Foliobin", date: "February 20, 2026" },
  { id: "a8", title: "Site of The Day", org: "Web Design Awards", date: "Nov 24, 2025" },
  { id: "a9", title: "Site of The Day", org: "CSS Nectar", date: "October 8, 2025" },
  { id: "a10", title: "Site of The Day", org: "Web Guru Awards", date: "October 3, 2025" },
];
