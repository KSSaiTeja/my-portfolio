import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Awards } from "@/components/awards/Awards";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Brands } from "@/components/brands/Brands";
import { Experience } from "@/components/experience/Experience";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollPortrait } from "@/components/scene/ScrollPortrait";

export default function Home() {
  return (
    <>
      <ScrollPortrait />

      <Hero />

      <Brands />

      <Services />

      <About />

      <Experience />

      <Portfolio />

      <Awards />

      <Testimonials />

      <Faq />

      <Contact />

      <Footer />
    </>
  );
}
