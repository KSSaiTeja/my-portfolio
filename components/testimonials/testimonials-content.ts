export const testimonialsIntro = {
  eyebrow: "/ Community Trust – Testimonials",
  headingLead: "What ",
  headingAccent: "people",
  headingTrail: " say",
  lead: "A few thoughts from people who have experienced the value of working together.",
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
      "I reached out to Nik for a full website redesign and honestly he understood the brief better than I explained it. No back and forth, no drama, just clean work delivered on time. Really glad I found him.",
    name: "Sai Teja Kommineni",
    service: "Founder, D2C Brand",
    location: "Vijayawada",
    date: "March 2026",
  },
  {
    id: "t2",
    rating: 5,
    quote:
      "We needed help with vibe coding and design direction for our early-stage team. Nik jumped in, set up the system properly, and the whole team's output improved within a couple of weeks. Genuinely talented.",
    name: "Anjali Reddy",
    service: "Product Designer",
    location: "Hyderabad",
    date: "February 2026",
  },
  {
    id: "t3",
    rating: 5,
    quote:
      "Worked with Nik on a tight-deadline Webflow build. He kept everything moving, communicated clearly, and shipped exactly what we agreed on. Would hire again without thinking twice.",
    name: "Karthik Iyer",
    service: "Engineering Lead",
    location: "Bengaluru",
    date: "January 2026",
  },
  {
    id: "t4",
    rating: 5,
    quote:
      "I wanted minimal but premium, and that's exactly what I got. The design still feels fresh months later, and clients keep asking who built our site.",
    name: "Lakshmi Prasanna",
    service: "Marketing Head",
    location: "Guntur",
    date: "December 2025",
  },
  {
    id: "t5",
    rating: 5,
    quote:
      "Fast, reliable and seriously good with the small details. He turned a very rough idea into a polished product. His design sense is just on another level.",
    name: "Mohammed Imran",
    service: "Co-Founder, SaaS",
    location: "Hyderabad",
    date: "November 2025",
  },
  {
    id: "t6",
    rating: 5,
    quote:
      "Got Nik through a referral and we sorted everything over a quick call. Smooth communication, delivered well within the timeline, and the final result was better than I had imagined.",
    name: "Divya Nair",
    service: "Brand Consultant",
    location: "Bengaluru",
    date: "October 2025",
  },
  {
    id: "t7",
    rating: 5,
    quote:
      "He built me a site I can't stop looking at. Took his time to actually understand my business before touching the design. Fully recommend, will definitely come back.",
    name: "Venkatesh Naidu",
    service: "Restaurant Owner",
    location: "Tirupati",
    date: "September 2025",
  },
  {
    id: "t8",
    rating: 5,
    quote:
      "Professional and very client-focused throughout. Highly recommend working with him.",
    name: "Sandhya Rao",
    service: "Startup Founder",
    location: "Bengaluru",
    date: "August 2025",
  },
  {
    id: "t9",
    rating: 5,
    quote:
      "Perfectionist in every sense. Pays maximum attention to detail and still delivers on time. We use his services regularly now for our client projects.",
    name: "Abdul Rahman Khan",
    service: "Agency Owner",
    location: "Hyderabad",
    date: "July 2025",
  },
];
