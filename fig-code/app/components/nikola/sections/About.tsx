import { SectionEyebrow } from "../SectionEyebrow";
import { aboutStats } from "../data";
import { maskHeadingFade } from "../assets";

// ABOUT section. Fixed 1920px design.
//
// NOTE: The original Figma wrapper for this section also contained the CTA
// buttons ("Schedule a call" / "Copy email" / "Download CV") and the rating
// block ("4.9 / 5", "Trusted by over 130+ clients") plus social links. Those
// are rendered by the Services component, so they are intentionally omitted
// here even though their wrapper element (the inner positioned container) is
// preserved.
export function About() {
  return (
    // Section wrapper: fixed 1920px-wide row, centered content.
    <div className="content-stretch flex h-[785.16px] items-start justify-center pb-[93px] px-[93px] relative shrink-0 w-[1920px]">
      <div className="content-stretch flex flex-col gap-[0.005px] items-start justify-center max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
        {/* Decorative full-bleed rectangle (Container58) */}
        <div className="absolute content-stretch flex inset-[28.9%_0_0_0] items-start justify-center">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" />
        </div>

        {/* Main copy column (Margin20 -> Container59 -> Container60) */}
        <div className="content-stretch flex flex-col items-start pb-[55.375px] relative shrink-0 w-[532.47px]">
          <div className="content-stretch flex h-[523.92px] items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
              {/* Margin21 (CTA buttons) and Margin23 (rating + socials) are
                  intentionally omitted - handled by the Services component. */}

              {/* Eyebrow "/ About Me" (Margin26 -> Heading10) */}
              <div className="absolute content-stretch flex flex-col items-start left-0 pb-[15px] pt-[10px] right-0 top-0">
                <SectionEyebrow>/ About Me</SectionEyebrow>
              </div>

              {/* Heading "Creative at the Core" (Margin27 -> Heading11) */}
              <div className="absolute content-stretch flex flex-col items-start left-0 pb-[15px] pt-[10px] right-0 top-[42.6px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e27500] text-[0px] tracking-[-2px] w-full">
                    <p className="text-[54.4px]">
                      <span className="leading-[56px]">Creative</span>
                      <span className="leading-[56px] text-[#333]">{` at the Core`}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio block (Container83 -> Container84/85/86) */}
              <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 pb-[20px] right-0 top-[123.6px]">
                {/* "Designer. Marketer. Founder. Problem-solver." */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] w-full">
                    <p className="leading-[22.4px]">Designer. Marketer. Founder. Problem-solver.</p>
                  </div>
                </div>

                {/* Bio paragraph */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[14.8px] tracking-[-0.5px] w-full">
                    <p className="leading-[22.4px] mb-0">With 13 years of experience, I bridge my creativity and my ability to adapt quickly,</p>
                    <p className="leading-[22.4px] mb-0">solve problems across departments, and produce work that strengthens</p>
                    <p className="leading-[22.4px] mb-0">brands, drive revenue growth and when given a chance, support teams through</p>
                    <p className="leading-[22.4px]">leadership.</p>
                  </div>
                </div>

                {/* "My impact is incomparable." */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] w-full">
                    <p className="leading-[22.4px]">My impact is incomparable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal stats strip (Margin28 -> Container87 -> ... -> Container89).
            Masked fade applied via the heading fade mask image. */}
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[50px] relative shrink-0 w-full">
          <div className="content-stretch flex h-[42.86px] items-start justify-center min-h-[42.86000061035156px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1024.08px]">
              <div className="h-[22.39px] relative shrink-0 w-full">
                <div
                  className="absolute content-stretch flex h-[23px] items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[calc(100%-1850.74px)_22.39px] right-[-1850.74px] top-0"
                  style={{ maskImage: `url("${maskHeadingFade}")` }}
                >
                  {/* Stats string (Container89) */}
                  <div className="content-stretch flex flex-col items-start px-[3.2px] relative self-stretch shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] whitespace-nowrap">
                      <p className="leading-[22.4px] whitespace-pre">{aboutStats}</p>
                    </div>
                  </div>
                  <div className="relative self-stretch shrink-0 w-[1437.41px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
