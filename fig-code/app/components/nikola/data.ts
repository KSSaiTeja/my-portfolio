// Structured content for the Nikola Radeski site, extracted from the Figma
// import so the section components can render lists from data rather than
// hand-repeated markup.

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "Figma",
  "Framer",
  "Webflow",
  "Vercel",
  "WordPress",
  "Elementor",
  "Avada",
];

export const aboutStats =
  "13+ Years of Experience   /  600+ Successful Projects   /  130+ Reviews-Testimonials   /   100% Customer Satisfaction Rate   /  50+ Leading Platform Experiences   /   9 Certificates   /   Top Graphic Design Voice Award   /";

export interface Award {
  id: string;
  title: string;
  org: string;
  date: string;
}

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

export interface Experience {
  id: string;
  role: string;
  period: string;
  company: string;
}

export const experiences: Experience[] = [
  { id: "e1", role: "Creative Designer", period: "2025 – Current", company: "TryHackMe LLC" },
  { id: "e2", role: "Founder/Creative Director", period: "2023 – Current", company: "DirectlyNik™" },
  { id: "e3", role: "Head of Design", period: "2024 – 2025", company: "Involve" },
  { id: "e4", role: "Chief Digital Marketing Executive", period: "2021 – 2023", company: "Simplify-ERP®" },
  { id: "e5", role: "Co-Founder", period: "2020 – 2022", company: "GGHOSTMK" },
  { id: "e6", role: "Marketing Designer & Video Editor", period: "2019 – 2021", company: "Simplify-ERP®" },
  { id: "e7", role: "Video Editor (contributor/project)", period: "2019", company: "UFC" },
  { id: "e8", role: "Web & Graphic Designer", period: "2018 – 2020", company: "PeoplePerHour" },
  { id: "e9", role: "Graphic Designer & Video Editor", period: "2016 – 2018", company: "PeoplePerHour" },
  { id: "e10", role: "Assistant Video Editor (project)", period: "2016", company: "UFC" },
  { id: "e11", role: "Graphic & Motion Designer", period: "2016", company: "Fiverr" },
  { id: "e12", role: "Graphic Designer & Video Editor", period: "2015 – 2016", company: "Upwork" },
  { id: "e13", role: "Video Editor & Visual Designer", period: "2012 – 2013", company: "YouTube/Twitch Streamers" },
  { id: "e14", role: "Web/Blog Designer", period: "2010 – 2012", company: "Bloger.hr (Index.hr)" },
  { id: "e15", role: "Video Director/Producer", period: "2009 – 2018", company: "YouTube" },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", quote: "I asked and Nik delivered honestly. I didn't want a generic website, I wanted something I could build as a hobby and actually be proud of. He got that instantly and gave me what I needed.", name: "Giovanni", service: "Website Design", date: "March 2026" },
  { id: "t2", quote: "Nikola Radeski is very talented doing vibe coding + designing. I have an AI startup and I needed help with vibe code and design directions (for my team) so Nikola did exactly that as he's clearly skilled.", name: "Oliver S.", service: "Design & Vibe Coding", date: "February 2026" },
  { id: "t3", quote: "I have been working with Nik for a month now and he is working on my company as a Team Leader and Designer and I'm very impressed. So much has changed on the team for the better.", name: "Rilind", service: "Design / Creative Lead", date: "September 2025" },
  { id: "t4", quote: "Fast, reliable, and talented, he turned a vague idea into a polished product. Just like he mentions, his design sense is really unmatched.", name: "Tomas", service: "Branding", date: "September 2025" },
  { id: "t5", quote: "I worked with Nikola on a Webflow project and was impressed right away. He got things moving quickly, kept everything clear, and delivered exactly what was needed.", name: "Siraj", service: "Webflow Web Design", date: "September 2025" },
  { id: "t6", quote: "I asked for minimal but strong, and that's exactly what I got. The design feels timeless.", name: "Katarina", service: "Social Media Design", date: "August 2025" },
  { id: "t7", quote: "Creative beyond limits. We hired him for a short NDA website project. The site he designed boosted my marketing campaign instantly, we see results overnight.", name: "Leandro", service: "Web Design", date: "August 2025" },
  { id: "t8", quote: "Working with Nick, I can confidently say he is one of the most talented people I've ever met. He is a true prodigy when it comes to design — his creativity, precision, and ability to understand a brief stand out.", name: "Mihael", service: "Colleague", date: "September 2025" },
  { id: "t9", quote: "Nik is an exceptional team lead and one of the most talented designers I've had the pleasure to recommend.", name: "Irena", service: "Graphic Design", date: "March 2025" },
  { id: "t10", quote: "Excellent client-oriented service. Delivered on time and very professional throughout.", name: "Evgenija", service: "Graphic Design", date: "May 2025" },
  { id: "t11", quote: "Perfectionism in every sense, he pays maximum attention to details and ideas and everything is always implemented on time. My ideas become colorful with his talent. I use his services regularly.", name: "Riste", service: "UI/UX Design & Social Media", date: "May 2024" },
  { id: "t12", quote: "I got Nikola by recommendation, we quickly agreed on Discord about what needs to be edited. Clear communication via email, everything was done within the stipulated time and as we agreed!", name: "Uros", service: "Video Editing", date: "February 2024" },
];

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  { id: "f1", question: "How do you ensure high-quality work?", answer: "Every project goes through a structured process — research, iteration, and review — so the result is consistent, polished, and built to high standards." },
  { id: "f2", question: "What industries and clients have you worked with?", answer: "Across 600+ projects I've worked with founders, startups, agencies and established brands spanning tech, marketing, e-commerce and creative industries." },
  { id: "f3", question: "Do you work independently or as part of a team?", answer: "Both. I deliver end-to-end as an independent creative, and I also lead and support teams as a design and creative lead." },
  { id: "f4", question: "What makes you a good team player?", answer: "I adapt quickly, communicate clearly, and solve problems across departments — strengthening the team rather than just my own output." },
  { id: "f5", question: "How do you approach client feedback?", answer: "Feedback is part of the craft. I listen, ask the right questions, and turn notes into focused revisions that move the work forward." },
  { id: "f6", question: "Have you handled large or complex projects?", answer: "Yes — multi-platform brand systems, full website builds, and long-running marketing initiatives with measurable results." },
  { id: "f7", question: "Why do clients trust you?", answer: "13 years of consistent delivery, 130+ reviews, and a 100% satisfaction rate. The work speaks, and so do the people I've worked with." },
  { id: "f8", question: "If you build agency, why apply for an in-house role?", answer: "I love building, but I also value depth — going all-in on one brand, one team, and one long-term vision is something I'm excited about." },
];
