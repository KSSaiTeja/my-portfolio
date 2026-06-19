import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Awards } from "@/components/awards/Awards";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Experience } from "@/components/experience/Experience";
import { ScrollPortrait } from "@/components/scene/ScrollPortrait";

export default function Home() {
  const sections = [
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <ScrollPortrait />

      <Hero />

      <Services />

      <About />

      <Awards />

      <Portfolio />

      <Experience />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[55vh] flex-col items-center justify-center border-t border-[var(--surface)] px-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Section
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {section.label}
          </h2>
        </section>
      ))}
    </>
  );
}
