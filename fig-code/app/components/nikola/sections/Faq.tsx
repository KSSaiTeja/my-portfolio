import { SectionEyebrow } from "../SectionEyebrow";
import { faqs } from "../data";
import { svgPaths } from "../assets";

// FAQ section. Static, matching the source: the original Figma export renders
// only the collapsed question rows (eyebrow + heading + a list of bordered
// question buttons with a chevron icon). No answers are shown in the source, so
// none are rendered here. Question rows repeat, so they're driven by `faqs`.

// One collapsed question row: bordered pill with the question text and a
// (vertically-flipped) chevron icon on the right.
function FaqRow({ question }: { question: string }) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex isolate items-start px-[25px] py-[15px] relative size-full">
          {/* Question text */}
          <div className="flex-[1_0_0] min-w-px relative z-[2]">
            <div className="content-stretch flex flex-col items-start pr-[34px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141617] text-[15.1px] tracking-[-0.5px] w-full">
                  <p className="leading-[22.4px]">{question}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Chevron icon (vertically flipped) */}
          <div className="content-stretch flex flex-col items-start pb-[1.62px] pt-[4.77px] relative shrink-0 z-[1]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="h-[16px] relative w-[15.5px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 16">
                      <g id="Icon">
                        <path d={svgPaths.p28fa2f00} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
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

export function Faq() {
  return (
    // Section wrapper: fixed 1920px-wide row, centered content column.
    <div className="content-stretch flex h-[917.753px] items-start justify-center pt-[93px] px-[93px] relative shrink-0 w-[1920px]">
      <div className="content-stretch flex flex-col gap-[0.006px] items-center justify-center max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
        {/* Top spacer line above the FAQ content */}
        <div className="content-stretch flex flex-col items-start pb-[106.484px] relative shrink-0 w-full">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Eyebrow + heading block, and the question list */}
        <div className="content-stretch flex flex-col items-start pb-[40.453px] relative shrink-0 w-full">
          <div className="content-stretch flex h-[676.81px] items-start justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative self-stretch">
              {/* Eyebrow + heading */}
              <div className="h-[156.81px] max-w-[1064.9561767578125px] relative shrink-0 w-full z-[2]">
                <div className="absolute content-center flex flex-wrap items-center justify-center left-[-21.3px] max-w-[1107.550048828125px] pb-[33.22px] right-[-21.3px] top-0">
                  <div className="content-stretch flex flex-[1_0_0] h-[124px] items-start justify-center min-w-px relative">
                    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1065.05px]">
                      {/* Eyebrow */}
                      <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                        <SectionEyebrow>/ Common questions and answers</SectionEyebrow>
                      </div>
                      {/* Heading */}
                      <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                            <p className="text-[54.1px]">
                              <span className="leading-[56px]">{`Frequently Asked `}</span>
                              <span className="leading-[56px] text-[#e27500]">Questions</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question list */}
              <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full z-[1]">
                <div className="relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start p-px relative size-full">
                    {faqs.map((faq) => (
                      <FaqRow key={faq.id} question={faq.question} />
                    ))}
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
