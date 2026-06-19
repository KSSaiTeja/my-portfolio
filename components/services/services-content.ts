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
    "I lead brands, teams, and projects – creating design, web, video, and marketing solutions that help businesses grow and make a real impact.",
} as const;

export const serviceCards: ServiceCard[] = [
  {
    no: "01",
    eyebrow: "Top performing",
    title: "Web Design",
    description:
      "I design no-code websites that are responsive, mobile-friendly, and SEO-ready. Every site is built for usability, speed, and modern design.",
    tags: [
      "Figma",
      "Framer",
      "Webflow",
      "Vercel",
      "WordPress",
      "Elementor",
      "Avada",
      "Experienced with AI builders",
    ],
  },
  {
    no: "02",
    eyebrow: "MVP Go-to-market",
    title: "Product Design",
    description:
      "I build ideas from concept to GTM and scale them into real products. I focus on scope, flows, and aligning features with what users actually need.",
    tags: [
      "MVP Design",
      "Pitch Decks",
      "Brand Identity",
      "Product Positioning",
      "Marketing Collateral",
      "Investor Presentations",
    ],
  },
  {
    no: "03",
    eyebrow: "User Focused",
    title: "UI/UX Systems",
    description:
      "I design user journeys, wireframes, and prototypes that make digital products easy to use. Testing and research keep the experience grounded in reality.",
    tags: [
      "Figma",
      "Framer",
      "Webflow",
      "WordPress",
      "Elementor",
      "Avada",
      "Vercel, Lovable, Bolt, +10 other AI platforms",
    ],
  },
  {
    no: "04",
    eyebrow: "Brand Defining",
    title: "Graphic Design",
    description:
      "Highly skilled in creating digital visuals, banners, ads, and posts to deliver clear messaging and engage.",
    tags: [
      "Adobe Creative Suite, Photoshop, Illustrator",
      "Figma, FigJam, Canva",
      "Branding, logos, and visual identity design",
      "Marketing materials: flyers, brochures, posters",
      "Social media visuals and campaigns",
      "Typography and layout design",
    ],
  },
  {
    no: "05",
    eyebrow: "Detail Driven + AI",
    title: "Visual Design",
    description:
      "You name it, I do it. Compelling digital visuals that combine aesthetics with clear communication.",
    tags: [
      "Adobe Photoshop, Adobe Illustrator",
      "Figma, Canva",
      "Midjourney, Leonardo, Dall-E",
      "GPT, NanoBanana, Gemini, Krea",
      "Runway, Firefly, Sora",
      "High-performing AI media content",
    ],
  },
  {
    no: "06",
    eyebrow: "Motion with Purpose",
    title: "Video Editing",
    description:
      "Expert in video storytelling, explainers, cinematic and promotional content to boost brand presence.",
    tags: [
      "Adobe After Effects, Adobe Premiere",
      "Promotional videos",
      "Color correction / Color grading",
      "Motion Graphics / Explainers",
      "Sound engineering",
      "Topaz Labs + Video scaling",
      "AI Video Content Gen",
    ],
  },
  {
    no: "07",
    eyebrow: "Data Backed Decisions",
    title: "Digital Marketing",
    description:
      "I was leading teams twice, in the Marketing sector. I plan and run campaigns across search, social, and email. Every move is tracked and optimized for growth, leads, and ROI.",
    tags: [
      "Google Analytics, Google Ads, Meta Ads, Mailchimp, HubSpot, Google Search Console",
      "SEO and SEM",
      "Email marketing campaigns",
      "Paid social and search campaigns",
      "Big results for clients with targetted ads",
      "Fluent with Notion, Jira, Trello",
    ],
  },
  {
    no: "08",
    eyebrow: "Audience Growing",
    title: "Social Media Marketing",
    description:
      "I have grown many channels I managed to big numbers, I also designed and organized content and engagement strategies.",
    tags: [
      "Content planning and posting schedules",
      "Campaign creation and paid ads",
      "Social analytics and reporting",
      "Community engagement and management",
    ],
  },
];
