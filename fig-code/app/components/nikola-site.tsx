import { useEffect, useState } from "react";
import { Toaster } from "./ui/sonner";
import { Hero } from "./nikola/sections/Hero";
import { Services } from "./nikola/sections/Services";
import { About } from "./nikola/sections/About";
import { Awards } from "./nikola/sections/Awards";
import { Portfolio } from "./nikola/sections/Portfolio";
import { Experience } from "./nikola/sections/Experience";
import { Testimonials } from "./nikola/sections/Testimonials";
import { Faq } from "./nikola/sections/Faq";
import { Contact } from "./nikola/sections/Contact";
import { Footer, Nav } from "./nikola/sections/Footer";

const DESIGN_WIDTH = 1920;

/**
 * NikolaSite — composes the rebuilt section components into the full page and
 * scales the fixed 1920px canvas down to fit the viewport. The structure
 * mirrors the original Figma tree: a #dbdbdb root, a #eaeaea "Main" band
 * holding the stacked sections, a gap, then the footer; the floating pill
 * <Nav/> overlays near the top.
 */
export function NikolaSite() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#dbdbdb]">
      <div className="mx-auto" style={{ zoom: scale, width: DESIGN_WIDTH }}>
        <div className="relative flex w-[1920px] flex-col items-start bg-[#dbdbdb]">
          {/* Background: main content band + footer, separated by a gap */}
          <div className="flex w-full flex-col gap-[57.6px]">
            {/* Main */}
            <div className="w-full bg-[#eaeaea]">
              <div className="flex flex-col items-start pb-[88px] pr-[30px]">
                {/* Section — the stacked page sections */}
                <div className="flex w-full flex-col items-start">
                  <Hero />
                  <Services />
                  <About />
                  <Awards />
                  <Portfolio />
                  <Experience />
                  <Testimonials />
                  <Faq />
                  <Contact />
                </div>
              </div>
            </div>
            <Footer />
          </div>

          {/* Floating pill navigation (overlays near the top) */}
          <Nav />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
