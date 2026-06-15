import { SectionEyebrow } from "../SectionEyebrow";
import {
  workAojImg,
  workShot77Img,
  workShot26Img,
  workFrameImg,
} from "../assets";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

// The four "Selected Work Samples" image cards. Each is an absolutely positioned
// rounded card holding a single rounded, clipped image. The cards share a template
// but differ in: image height, image-wrapper width vs the card, the card's absolute
// inset, the card's background width, and a left-pad on the right-column cards.
const projects = [
  {
    img: workAojImg,
    imgHeight: "311.83px",
    marginInset: "inset-[306.7px_532.48px_756.83px_0]",
    marginPad: "py-[10.641px]",
    bgWidth: "w-[522.25px]",
  },
  {
    img: workShot77Img,
    imgHeight: "327.08px",
    marginInset: "inset-[306.7px_0.02px_756.83px_532.46px]",
    marginPad: "pl-[10.22px] py-[10.641px]",
    bgWidth: "w-full",
  },
  {
    img: workShot26Img,
    imgHeight: "234.91px",
    marginInset: "inset-[761.53px_532.48px_386.55px_0]",
    marginPad: "py-[10.641px]",
    bgWidth: "w-[522.25px]",
  },
  {
    img: workFrameImg,
    imgHeight: "242.53px",
    marginInset: "inset-[761.53px_0.02px_386.55px_532.46px]",
    marginPad: "pl-[10.22px] py-[10.641px]",
    bgWidth: "w-full",
  },
];

// Single work-sample card: light-gray padded panel wrapping a rounded, clipped image.
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className={`absolute content-stretch flex flex-col ${project.marginInset} items-start justify-center ${project.marginPad}`}
    >
      <div className={`bg-[#f7f7f7] flex-[1_0_0] min-h-px relative rounded-[25px] ${project.bgWidth}`}>
        <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] p-[53.234px] relative size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center max-w-[415.7799987792969px] overflow-clip relative rounded-[20px] shrink-0">
                <div
                  className="max-w-[415.7799987792969px] relative shrink-0 w-[415.78px]"
                  style={{ height: project.imgHeight }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <ImageWithFallback
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={project.img}
                    />
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

// Portfolio section: header (eyebrow + "Selected Work Samples" + description +
// "Complete Portfolio" link) layered over four absolutely positioned work-sample
// cards. The dashed "Complete Portfolio" CTA card is handled by the Awards section.
export function Portfolio() {
  return (
    <div className="content-stretch flex h-[1648.547px] items-start justify-center pb-[37.188px] pt-[93px] px-[30px] relative shrink-0 w-[1920px]">
      <div className="max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
        {/* Top hairline / spacer */}
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[106.484px] right-0 top-0">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Work-sample image cards */}
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}

        {/* Header row: text block (left) + Complete Portfolio link (right) */}
        <div className="absolute h-[199.214px] left-0 right-0 top-[107.49px]">
          <div className="absolute content-stretch flex h-[147px] items-start justify-center left-[-21.3px] right-0 top-0">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap gap-0 items-center justify-center max-w-[1107.550048828125px] relative shrink-0 w-[1107.55px]">
                {/* Heading + description column */}
                <div className="content-stretch flex h-[147px] items-start justify-center relative shrink-0 w-[775.28px]">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[732.78px]">
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <SectionEyebrow>/ Portfolio Projects</SectionEyebrow>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                          <p className="text-[54.3px]">
                            <span className="leading-[56px]">{`Selected `}</span>
                            <span className="leading-[56px] text-[#e27500]">Work Samples</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] w-full">
                        <p className="leading-[22.4px]">A carefully picked showcase of projects that highlight my commitment to this design industry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complete Portfolio CTA link */}
                <div className="content-stretch flex h-[32.375px] items-start justify-center relative shrink-0 w-[332.25px]">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[289.75px]">
                    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                      <a className="bg-[#dbdbdb] content-stretch flex items-center justify-center px-[14.484px] py-[8.688px] relative rounded-[100px] shrink-0">
                        <div className="content-stretch flex flex-col items-end mr-[-0.01px] relative shrink-0">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] text-right tracking-[-0.5px] whitespace-nowrap">
                            <p className="leading-[15px]">Complete Portfolio</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10.5px] relative shrink-0">
                          <div className="content-stretch flex flex-col items-end relative shrink-0">
                            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] text-right tracking-[-0.5px] whitespace-nowrap">
                              <p className="leading-[15px]">{"\uF101"}</p>
                            </div>
                          </div>
                        </div>
                      </a>
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
