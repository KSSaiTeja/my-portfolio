export const contactIntro = {
  eyebrow: "/ Contact Information",
  headingLead: "Let's get ",
  headingAccent: "started",
  headingTrail: "",
  formTitle: "How can I help?",
  formLead: "I would love to hear more about your project or company.",
} as const;

export type ContactField = {
  id: "fullName" | "role" | "email";
  label: string;
  placeholder: string;
  type: "text" | "email";
  autoComplete: string;
};

export const contactFields: ContactField[] = [
  {
    id: "fullName",
    label: "Your Full Name",
    placeholder: "Sai Teja Kalepu",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "role",
    label: "Your Role",
    placeholder: "Founder, Recruiter, Freelancer, etc.",
    type: "text",
    autoComplete: "organization-title",
  },
  {
    id: "email",
    label: "Your E-mail Address",
    placeholder: "saitej4865@gmail.com",
    type: "email",
    autoComplete: "email",
  },
];

export const contactStatuses = [
  { id: "project", label: "I have a project" },
  { id: "recruiter", label: "I am a recruiter" },
] as const;

export type ContactStatus = (typeof contactStatuses)[number]["id"];

export const contactCard = {
  badge: "Top Rated Designer",
  body: "If the work above fits what you need, send me a note. Share the goal, a link, budget range, and when you want to start. I'll reply with the next step.",
  signature: "Sai Teja Kalepu",
  portraitSrc: "/hero/portrait.png",
  portraitAlt: "Portrait of Sai Teja Kalepu",
} as const;

export const contactSuccess =
  "Thanks! Your note is on its way — I'll reply with the next step.";
