import { SectionEyebrow } from "../SectionEyebrow";
import { awards } from "../data";
import { workLinkImg } from "../assets";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

// Per-row visual nudges from the source (exact font-size + absolute top offset).
// These are load-bearing fixed-design values that vary slightly per row, so they
// live here keyed by row index rather than in the (text-only) awards data.
const rowStyles = [
  { top: "371.48px", title: "22.7px", org: "18.1px", date: "16.9px" },
  { top: "447.78px", title: "22.7px", org: "18.3px", date: "16.9px" },
  { top: "524.08px", title: "22.7px", org: "18.1px", date: "16.8px" },
  { top: "600.37px", title: "23.1px", org: "18.1px", date: "16.8px" },
  { top: "676.67px", title: "22.7px", org: "17.8px", date: "17.2px" },
  { top: "752.97px", title: "22.9px", org: "18px", date: "17.2px" },
  { top: "829.26px", title: "23.1px", org: "17.8px", date: "16.9px" },
  { top: "905.56px", title: "22.5px", org: "18px", date: "16.6px" },
  { top: "981.86px", title: "22.5px", org: "18.4px", date: "17.5px" },
  { top: "1058.16px", title: "22.5px", org: "18.1px", date: "17.4px" },
];

// One award row: title / organization / date across a bottom-bordered band,
// absolutely positioned at its fixed `top` within the list column.
function AwardRow({
  title,
  org,
  date,
  style,
}: {
  title: string;
  org: string;
  date: string;
  style: (typeof rowStyles)[number];
}) {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 pb-[21.297px] right-0"
      style={{ top: style.top }}
    >
      <div className="content-stretch flex h-[55px] items-start justify-center relative shrink-0 w-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
          <div aria-hidden className="absolute border-[#dbdbdb] border-b border-solid inset-0 pointer-events-none" />
          <div className="absolute content-center flex flex-wrap gap-0 items-center justify-center left-[-2%] max-w-[1107.550048828125px] right-[-2%] top-0">
            {/* Title */}
            <div className="content-stretch flex h-[49px] items-start justify-center relative shrink-0 w-[443.02px]">
              <div className="min-h-px relative self-stretch shrink-0 w-[400.52px]">
                <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[15px] pt-[10px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-1.5px] w-full"
                      style={{ fontSize: style.title }}
                    >
                      <p className="leading-[24px]">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Organization */}
            <div className="content-stretch flex h-[44px] items-start justify-center relative shrink-0 w-[443.02px]">
              <div className="min-h-px relative self-stretch shrink-0 w-[400.52px]">
                <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[15px] pt-[10px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-1px] w-full"
                      style={{ fontSize: style.org }}
                    >
                      <p className="leading-[19px]">{org}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Date */}
            <div className="content-stretch flex h-[44px] items-start justify-center relative shrink-0 w-[221.5px]">
              <div className="min-h-px relative self-stretch shrink-0 w-[179px]">
                <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[15px] pt-[10px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-1px] w-full"
                      style={{ fontSize: style.date }}
                    >
                      <p className="leading-[19px]">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Awards() {
  return (
    // Section wrapper: fixed 1920px-wide row, centered content column.
    <div className="content-stretch flex h-[1264.637px] items-start justify-center pb-[37.188px] pt-[93px] px-[30px] relative shrink-0 w-[1920px]">
      <div className="max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
        {/* Top spacer line above the award list */}
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[106.484px] right-0 top-0">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Award rows */}
        {awards.map((award, i) => (
          <AwardRow
            key={award.id}
            title={award.title}
            org={award.org}
            date={award.date}
            style={rowStyles[i]}
          />
        ))}

        {/* Eyebrow + heading + body copy block */}
        <div className="absolute h-[264.004px] left-0 right-0 top-[107.48px]">
          <div className="absolute content-stretch flex h-[212px] items-start justify-center left-[-21.3px] right-0 top-0">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap items-center justify-center max-w-[1107.550048828125px] relative shrink-0 w-[1107.55px]">
                <div className="content-stretch flex flex-[1_0_0] h-[212px] items-start justify-center min-w-px relative">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1065.05px]">
                    {/* Eyebrow */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <SectionEyebrow>/ International Credibility</SectionEyebrow>
                    </div>
                    {/* Heading */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e27500] text-[0px] tracking-[-2px] w-full">
                          <p className="text-[54px]">
                            <span className="leading-[56px]">Awards</span>
                            <span className="leading-[56px] text-[#333]">{` and Recognition`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Body copy */}
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[639.02px]">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] w-full">
                          <p className="leading-[22.4px]">Awards aren’t everything, but they signal impact, taste, and execution.</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[14.9px] tracking-[-0.5px] w-full">
                          <p className="leading-[22.4px] mb-0">I hold my work to high standards and consistently deliver at that level. Being recognized across</p>
                          <p className="leading-[22.4px]">leading international platforms matters, it reflects both the work and the thinking behind it.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA: dashed "Complete Portfolio" call-to-action card with image overlay */}
        <div className="absolute content-stretch flex flex-col inset-[1131.81px_0_0_0] items-start justify-center py-[21.297px]">
          <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px relative w-full">
            {/* Background image overlay */}
            <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-clip rounded-[25px]">
              <div className="flex-[1_0_0] min-h-px relative rounded-[25px] w-full">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[25px]">
                  <div className="absolute bg-white inset-0 rounded-[25px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[25px]">
                    <ImageWithFallback alt="" className="absolute h-[295.8%] left-0 max-w-none top-[-97.9%] w-full" src={workLinkImg} />
                  </div>
                </div>
              </div>
            </div>
            {/* Dashed-border CTA */}
            <a
              href="#portfolio"
              className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[25px]"
            >
              <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] p-[107.484px] relative size-full">
                  {/* "Click here to see my" */}
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[20px] text-center tracking-[-1.1px] whitespace-nowrap">
                          <p className="leading-[22.88px]">Click here to see my</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* "Complete Portfolio" */}
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[35.2px] text-center tracking-[-1.1px] whitespace-nowrap">
                          <p className="leading-[38.72px]">Complete Portfolio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] px-[25.484px] relative size-full">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] text-center tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[22.4px]">Updated portfolio showcase, as of September, 2025.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#c6c6c6] border-dashed inset-0 pointer-events-none rounded-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
