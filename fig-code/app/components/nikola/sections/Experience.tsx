import { SectionEyebrow } from "../SectionEyebrow";
import { experiences } from "../data";

// Per-row visual variations pulled verbatim from the Figma source. Each job row
// repeats the same markup but the design carries tiny per-row nudges (role
// font-size + column width, period/company font-sizes, a few alignment quirks
// and the absolute `top` offset within the list column). Keeping them in an
// index-keyed table lets the row template stay a single source of truth while
// the output remains pixel-identical to the import.
const rowStyles = [
  { top: "0",         roleFs: "21.5px", roleW: "164.42px", roleH: "h-full",        roleMb: true,  innerAlign: "items-start",  pr: false, periodOuterH: "h-full", periodFs: "15.1px", companyVariant: "A", companyFs: "15.3px" },
  { top: "110.17px",  roleFs: "21.7px", roleW: "240.47px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "15px",   companyVariant: "B", companyFs: "15.6px" },
  { top: "220.34px",  roleFs: "21.3px", roleW: "139.2px",  roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "14.1px", companyVariant: "A", companyFs: "15.4px" },
  { top: "330.51px",  roleFs: "21.3px", roleW: "300.77px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "14px",   companyVariant: "B", companyFs: "15.6px" },
  { top: "440.68px",  roleFs: "21.5px", roleW: "111.23px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: false, periodOuterH: "h-full", periodFs: "14.4px", companyVariant: "B", companyFs: "16px" },
  { top: "550.86px",  roleFs: "21.3px", roleW: "311.47px", roleH: "h-full",        roleMb: true,  innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "13.8px", companyVariant: "B", companyFs: "15.6px" },
  { top: "661.03px",  roleFs: "21.5px", roleW: "303.5px",  roleH: "h-[24.19px]",   roleMb: false, innerAlign: "items-center", pr: true,  periodOuterH: "",       periodFs: "14.4px", companyVariant: "B", companyFs: "15.1px" },
  { top: "771.2px",   roleFs: "21.3px", roleW: "222.3px",  roleH: "h-[24.19px]",   roleMb: false, innerAlign: "items-center", pr: false, periodOuterH: "",       periodFs: "14.1px", companyVariant: "B", companyFs: "15.1px" },
  { top: "881.37px",  roleFs: "21.3px", roleW: "291.27px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: false, periodOuterH: "h-full", periodFs: "13.8px", companyVariant: "B", companyFs: "15.1px" },
  { top: "991.54px",  roleFs: "21.3px", roleW: "283.39px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "14.4px", companyVariant: "B", companyFs: "15.1px" },
  { top: "1101.72px", roleFs: "21.3px", roleW: "245.61px", roleH: "h-full",        roleMb: true,  innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "14.4px", companyVariant: "B", companyFs: "14.6px" },
  { top: "1211.89px", roleFs: "21.3px", roleW: "291.27px", roleH: "h-full",        roleMb: true,  innerAlign: "items-start",  pr: false, periodOuterH: "h-full", periodFs: "13.8px", companyVariant: "B", companyFs: "15px" },
  { top: "1322.06px", roleFs: "21.1px", roleW: "272.72px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "13.6px", companyVariant: "B", companyFs: "15.6px" },
  { top: "1432.23px", roleFs: "21.3px", roleW: "177.7px",  roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: false, periodOuterH: "h-full", periodFs: "13.9px", companyVariant: "B", companyFs: "14.9px" },
  { top: "1542.4px",  roleFs: "21.5px", roleW: "224.09px", roleH: "h-full",        roleMb: false, innerAlign: "items-start",  pr: true,  periodOuterH: "h-full", periodFs: "14.3px", companyVariant: "B", companyFs: "15.3px" },
] as const;

type RowStyle = (typeof rowStyles)[number];

// Fixed `top` offsets for the 15 thin horizontal dividers that sit between rows.
const dividerTops = [
  "66.57px", "176.74px", "286.92px", "397.09px", "507.26px", "617.43px",
  "727.6px", "837.77px", "947.95px", "1058.12px", "1168.29px", "1278.46px",
  "1388.63px", "1498.81px", "1608.98px",
];

// A single experience row: role title (left) + period (right) on one line, with
// the company name on the line below. Absolutely positioned at its fixed `top`.
function ExperienceRow({
  role,
  period,
  company,
  style,
}: {
  role: string;
  period: string;
  company: string;
  style: RowStyle;
}) {
  return (
    <div className="absolute h-[66.58px] left-0 right-0" style={{ top: style.top }}>
      {/* Original rows live inside a blurred/hidden "Blur" wrapper (opacity-0 in the
          source — the visible state is driven by scroll animation). Preserved. */}
      <div className="absolute blur-[4px] content-stretch flex flex-col items-center justify-center left-[-21.3px] max-w-[1107.550048828125px] opacity-0 right-[-21.3px] top-0">
        {/* Role + period line */}
        <div
          className={`content-stretch flex flex-col items-start ${
            style.roleMb ? "mb-[-0.01px] " : ""
          }pb-[20px] relative shrink-0 w-full`}
        >
          <div className="content-stretch flex h-[24.19px] items-start justify-center relative shrink-0 w-full">
            <div
              className={`content-stretch flex ${style.innerAlign} justify-between min-h-px ${
                style.pr ? "pr-[0.01px] " : ""
              }relative self-stretch shrink-0 w-[1065.05px]`}
            >
              {/* Role title */}
              <div className={`${style.roleH} relative shrink-0`} style={{ width: style.roleW }}>
                <div
                  className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#333] top-[11.5px] tracking-[-1.1px] whitespace-nowrap"
                  style={{ fontSize: style.roleFs }}
                >
                  <p className="leading-[24.2px]">{role}</p>
                </div>
              </div>
              {/* Period */}
              <div
                className={`content-stretch flex flex-col ${
                  style.periodOuterH ? style.periodOuterH + " " : ""
                }items-start relative shrink-0`}
              >
                <div className="content-stretch flex flex-col items-end relative shrink-0">
                  <div
                    className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-right tracking-[-0.5px] whitespace-nowrap"
                    style={{ fontSize: style.periodFs }}
                  >
                    <p className="leading-[22.4px]">{period}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company line — two layout variants in the source */}
        <div className="content-stretch flex h-[23px] items-start justify-center relative shrink-0 w-full">
          {style.companyVariant === "A" ? (
            <div className="content-stretch flex items-center min-h-px relative self-stretch shrink-0 w-[1065.05px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-end relative shrink-0">
                  <div
                    className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-right tracking-[-0.5px] whitespace-nowrap"
                    style={{ fontSize: style.companyFs }}
                  >
                    <p className="leading-[22.4px]">{company}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1065.05px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] tracking-[-0.5px] w-full"
                  style={{ fontSize: style.companyFs }}
                >
                  <p className="leading-[22.4px]">{company}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// A single blurred/hidden horizontal divider between rows.
function Divider({ top }: { top: string }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 py-[21.297px] right-0" style={{ top }}>
      <div className="blur-[4px] content-stretch flex items-center justify-center opacity-0 relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-px min-w-px relative">
          <div aria-hidden className="absolute border-[#dbdbdb] border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    // Section wrapper: fixed 1920px-wide row, centered content column.
    <div className="content-stretch flex h-[1648.547px] items-start justify-center pb-[37.188px] pt-[93px] px-[30px] relative shrink-0 w-[1920px]">
      <div className="content-stretch flex flex-col gap-[0.006px] h-full items-center max-w-[1064.9599609375px] relative shrink-0 w-[1064.95px]">
        {/* Header: eyebrow + heading + subtitle (left) and "Download CV" (right) */}
        <div className="h-[239.214px] relative shrink-0 w-full">
          <div className="absolute content-stretch flex h-[187px] items-start justify-center left-[-21.3px] right-0 top-0">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap gap-0 items-center justify-center max-w-[1107.550048828125px] relative shrink-0 w-[1107.55px]">
                {/* Left text block */}
                <div className="content-stretch flex h-[187px] items-start justify-center relative shrink-0 w-[775.28px]">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[732.78px]">
                    {/* Eyebrow */}
                    <div className="content-stretch flex flex-col items-start pb-[35px] pt-[10px] relative shrink-0 w-full">
                      <SectionEyebrow>/ Career</SectionEyebrow>
                    </div>
                    {/* Heading */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                          <p className="text-[53.8px]">
                            <span className="leading-[56px]">{`Work `}</span>
                            <span className="leading-[56px] text-[#e27500]">Experience</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Subtitle */}
                    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] w-full">
                          <p className="leading-[22.4px]">My impact over the years.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Download CV button */}
                <div className="content-stretch flex h-[32.375px] items-start justify-center relative shrink-0 w-[332.25px]">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[289.75px]">
                    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                      <a
                        href="#"
                        className="bg-[#dbdbdb] content-stretch flex items-center justify-center px-[14.484px] py-[8.688px] relative rounded-[100px] shrink-0"
                      >
                        <div className="content-stretch flex flex-col items-end relative shrink-0">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14.5px] text-right tracking-[-0.5px] whitespace-nowrap">
                            <p className="leading-[15px]">Download CV</p>
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

        {/* Job list: absolutely-positioned rows + dividers within the column */}
        <div className="content-stretch flex h-[1652.58px] items-start justify-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
            {experiences.map((exp, i) => (
              <ExperienceRow
                key={exp.id}
                role={exp.role}
                period={exp.period}
                company={exp.company}
                style={rowStyles[i]}
              />
            ))}
            {dividerTops.map((top) => (
              <Divider key={top} top={top} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
