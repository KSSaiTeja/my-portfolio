export const testimonialsIntro = {
  eyebrow: "/ Community Trust – Testimonials",
  headingLead: "What ",
  headingAccent: "people",
  headingTrail: " say",
  lead: "Notes from teams I have designed with, on the products that are live.",
} as const;

export type Testimonial = {
  id: string;
  /** Out of 5 — used for the star rating and its accessible label. */
  rating: number;
  quote: string;
  name: string;
  /** Role / engagement type shown under the name. */
  service: string;
  /** City to ground the review. */
  location: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    rating: 5,
    quote:
      "He took a crowded fintech app and made the next step obvious. Onboarding, portfolio, and research notes all read as one product now. Engineering could build from the files without a second meeting to decode them.",
    name: "Harsha Vardhan",
    service: "Product, Savart",
    location: "Hyderabad",
    date: "March 2026",
  },
  {
    id: "t2",
    rating: 5,
    quote:
      "We needed a direction the whole client team could follow, not another deck. He set the flows, the landing pages, and the system we still reuse. Proposals got clearer because the product story was clearer.",
    name: "Meera Krishnan",
    service: "Founder, Daily Decimals",
    location: "Remote",
    date: "June 2026",
  },
  {
    id: "t3",
    rating: 5,
    quote:
      "The site finally looks like the homes we build. Quiet, specific, and easy to walk through on a phone. Clients mention the website before we even start the call.",
    name: "Ananya Rao",
    service: "Einri Living",
    location: "Hyderabad",
    date: "January 2026",
  },
  {
    id: "t4",
    rating: 5,
    quote:
      "Students were bouncing off a page that tried to say everything. He cut it down to the course, the outcome, and one clear apply path. Enquiries started coming in with the right questions.",
    name: "Suresh Babu",
    service: "SRR Careers",
    location: "Vijayawada",
    date: "November 2025",
  },
  {
    id: "t5",
    rating: 5,
    quote:
      "We had a story and no page that could hold it. The launch site he designed feels like the product: one idea, no clutter, and it still looks right months later.",
    name: "Priya Menon",
    service: "Stardour",
    location: "Bengaluru",
    date: "September 2025",
  },
  {
    id: "t6",
    rating: 5,
    quote:
      "Hiring pages in pharma usually look like a notice board. This one explains the role, the company, and what to do next. Candidates tell us the site is why they applied.",
    name: "Kiran Patel",
    service: "Pharma Openings",
    location: "Ahmedabad",
    date: "August 2025",
  },
];
