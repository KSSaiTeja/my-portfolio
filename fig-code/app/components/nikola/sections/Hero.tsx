import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { heroBackdropImg, portraitImg } from "../assets";

/**
 * Hero — the opening band: a soft gradient backdrop with the large
 * "NIKOLA / RADESKI" wordmark split into two columns, with the floating
 * portrait card sitting in the gap between them.
 */
export function Hero() {
  return (
    <section
      className="relative flex w-[1920px] shrink-0 items-start justify-center bg-gradient-to-b from-[rgba(240,240,240,0.7)] to-[#eaeaea] px-[93px] pt-[111.594px]"
      data-section="hero"
    >
      {/* Motion-graphics backdrop */}
      <div className="absolute left-0 top-0 h-[814.2px] w-[1920px] overflow-clip">
        <div className="absolute left-0 top-[-132.91px] h-[1080px] w-[1920px]">
          <ImageWithFallback
            src={heroBackdropImg}
            alt=""
            className="absolute inset-0 size-full"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(240,240,240,0.7)] to-[#eaeaea]" />

      {/* Wordmark + portrait */}
      <div className="relative w-[1803.34px] max-w-[1996.8px] self-stretch">
        <div className="flex size-full flex-wrap content-center items-center justify-center pb-[178.52px]">
          {/* Two-column wordmark */}
          <div className="absolute inset-[25.62%_0_0_0] flex items-start justify-center pl-[121.76px] pr-[151.75px]">
            <div className="flex h-[216.034px] w-[1559.83px] max-w-[1559.83px] flex-wrap items-center">
              {/* Left column: eyebrow + NIKOLA */}
              <div className="flex h-[177px] w-[779.91px] items-start justify-center self-stretch pl-[38.93px]">
                <div className="flex flex-1 flex-col items-start self-stretch">
                  <div className="w-full pb-[25px] font-['Inter:Regular',sans-serif] text-[15.1px] tracking-[-0.5px] text-[#6d6d6d]">
                    <p className="leading-[22.4px]">Award Winning Creative Leader</p>
                  </div>
                  <div className="w-full pb-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[115.2px] tracking-[-0.5px] text-[#333]">
                    <p className="leading-[109.44px]">NIKOLA</p>
                  </div>
                </div>
              </div>

              {/* Right column: role + RADESKI + location */}
              <div className="flex h-[216.034px] w-[779.91px] items-start justify-center self-stretch">
                <div className="flex flex-1 flex-col items-end self-stretch">
                  <div className="w-full pb-[25px] text-right font-['Inter:Regular',sans-serif] text-[15.1px] tracking-[-0.5px] text-[#6d6d6d]">
                    <p className="leading-[22.4px]">Designer &amp; Founder</p>
                  </div>
                  <div className="relative h-[145.034px] w-full">
                    <div className="absolute left-0 right-0 top-[-1px] flex flex-col items-end text-right font-['Inter:Semi_Bold',sans-serif] font-semibold text-[115.2px] tracking-[-0.5px] text-[#333]">
                      <p className="leading-[109.44px]">RADESKI</p>
                    </div>
                  </div>
                  <div className="w-full text-right font-['Inter:Regular',sans-serif] text-[14.9px] tracking-[-0.5px] text-[#6d6d6d]">
                    <p className="leading-[22.4px]">Skopje, Macedonia - 01:26 GMT+2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center gap reserving space for the floating portrait */}
          <div className="flex h-[524.09px] flex-1 items-start justify-center">
            <div className="relative w-[1734.13px] self-stretch">
              <div className="flex size-full flex-col items-start pb-[54.09px] pl-[732.04px] pr-[732.09px] pt-[90px]">
                <div className="h-[380px] w-[270px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating portrait card (overlays the center gap) */}
      <div className="absolute left-[824.98px] top-[201.59px] h-[380px] w-[270px]">
        <div className="flex size-full flex-col justify-center pl-[420px] pt-[70px]">
          <div className="absolute inset-[-0.09px_-0.02px_0.09px_0.02px] overflow-hidden rounded-[24px] bg-white drop-shadow-[0px_6px_16px_rgba(0,0,0,0.15)]">
            <ImageWithFallback
              src={portraitImg}
              alt="Nikola Radeski"
              className="absolute left-[-2.78%] top-0 h-full w-[105.56%] max-w-none -scale-x-100 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
