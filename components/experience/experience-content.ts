export const experienceIntro = {
  eyebrow: "/ Career",
  headingLead: "Work ",
  headingAccent: "Experience",
  lead: "My impact over the years.",
  cta: {
    label: "Download CV",
    href: "#",
  },
} as const;

export type Experience = {
  id: string;
  role: string;
  period: string;
  company: string;
};

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
