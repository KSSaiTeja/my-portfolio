export const faqIntro = {
  eyebrow: "/ Common questions and answers",
  headingLead: "Frequently Asked ",
  headingAccent: "Questions",
  headingTrail: "",
} as const;

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

// Questions framed the way founders, recruiters and clients across Andhra
// Pradesh, Hyderabad and Bengaluru actually ask them — grounded in IST calls,
// INR/GST billing, lean startup budgets and realistic delivery timelines.
export const faqs: Faq[] = [
  {
    id: "f1",
    question: "Do you take up projects for clients based in Hyderabad and Bengaluru?",
    answer:
      "Absolutely. A good part of my recent work has been with founders and teams across Hyderabad, Bengaluru and Vijayawada. Whether you sit in HITEC City or Koramangala, we can work fully remote — and if you're nearby, I'm happy to meet in person to kick things off.",
  },
  {
    id: "f2",
    question: "Can we connect over a call during IST working hours?",
    answer:
      "Yes. I keep a few slots open every day that line up with IST, usually between 11 AM and 7 PM. A quick Google Meet, or even a WhatsApp voice note to sort out small things, is never a problem. No odd-hour calls needed.",
  },
  {
    id: "f3",
    question: "What is your pricing, and can you bill in INR with a GST invoice?",
    answer:
      "Pricing depends on the scope, but you'll always get a clear, fixed quote upfront — no hidden charges later. For Indian clients I can bill in INR via UPI or bank transfer and share a proper GST invoice if your company needs one for accounts.",
  },
  {
    id: "f4",
    question: "We're an early-stage startup in Bangalore on a tight budget. Can you still help?",
    answer:
      "Of course. I've worked with plenty of bootstrapped and seed-stage teams from Bengaluru and Hyderabad. We can scope a lean first version that fits your budget, get it live, and add more in phases as you raise and grow.",
  },
  {
    id: "f5",
    question: "How soon can you deliver? We need it fast.",
    answer:
      "I understand — most folks here want it ready \"by next week.\" On day one I'll give you an honest timeline and stick to it. A focused landing page takes a few days; a full build, a couple of weeks. I'd rather commit to a real date and actually hit it than over-promise.",
  },
  {
    id: "f6",
    question: "Do you provide support after the project is handed over?",
    answer:
      "Yes, I don't disappear after delivery. You get a free support window for fixes and small tweaks, and I stay reachable on WhatsApp or email for anything urgent. I want the site to keep working for you, not just look good on launch day.",
  },
  {
    id: "f7",
    question: "Are you comfortable signing an NDA and working on our contract?",
    answer:
      "Completely. I regularly sign NDAs and work on the client's contract or MSA before we start. Your idea, data and roadmap stay confidential — for me that's non-negotiable, whether you're a solo founder or an enterprise team.",
  },
  {
    id: "f8",
    question: "Would you consider a full-time or in-house role in Hyderabad or Bengaluru?",
    answer:
      "I love the freedom of freelancing, but the right in-house role with a strong product team in Hyderabad or Bengaluru is something I'd genuinely consider. If the vision and the people are a good fit, let's have a proper conversation.",
  },
];
