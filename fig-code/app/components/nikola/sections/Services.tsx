import { SectionEyebrow } from "../SectionEyebrow";
import { skills } from "../data";
import { svgPaths, maskFade1, maskFade2, maskFade3 } from "../assets";

// One "Top performing" skill-tag bullet item. The source renders each tag in an
// isolated stack: a text label and a (visually empty) disc bullet sitting just
// behind it. All tags share these classes; per-tag font-size nudges in the
// original are visually negligible at this scale, so we use one tag style.
function SkillTag({ label }: { label: string }) {
  return (
    <div className="content-stretch flex flex-col isolate items-start mb-[-3.6px] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-col justify-center mb-[-16.343px] relative shrink-0 z-[2]">
        <p className="leading-[19.6px]">{label}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 z-[1]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px]">
            <span className="leading-[19.6px]">&nbsp;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// The orange rating star glyph (Font Awesome solid). Repeated five times.
function RatingStar() {
  return (
    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e27500] text-[10px] tracking-[-0.5px] whitespace-nowrap">
      <p className="leading-[10px]">{``}</p>
    </div>
  );
}

export function Services() {
  return (
    // Section wrapper: fixed 1920px-wide row, 941px tall, centered content.
    <div className="content-stretch flex h-[941px] items-start justify-center pb-[93px] px-[93px] relative shrink-0 w-[1920px]">
      <div className="h-[1595px] max-w-[1064.9599609375px] relative shrink-0 w-[1064px]">
        {/* Left column: eyebrow, heading, intro paragraph (sticky) */}
        <div className="absolute h-[383.864px] left-0 right-[532.53px] top-0">
          <div className="absolute content-stretch flex h-[189px] items-start justify-center left-[-10.64px] right-0 top-[89px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap items-center justify-center max-w-[553.77001953125px] pb-[20px] relative shrink-0 w-[553.77px]">
                <div className="content-stretch flex flex-[1_0_0] h-[169px] items-start justify-center min-w-px sticky top-0">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[532.52px]">
                    {/* Eyebrow */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <SectionEyebrow>/ Services, Skills, Abilities</SectionEyebrow>
                    </div>
                    {/* Heading */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                          <p className="text-[53.2px]">
                            <span className="leading-[56px]">{`What I do `}</span>
                            <span className="leading-[56px] text-[#e27500]">best?</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Intro paragraph */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] w-full">
                        <p className="leading-[22.4px] mb-0">I lead brands, teams, and projects – creating design, web, video, and marketing</p>
                        <p className="leading-[22.4px]">solutions that help businesses grow and make a real impact.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top divider rule above the card (right column) */}
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[181.43px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>

        {/* The rotated "01. Web Design" service card (sticky, right column) */}
        <div className="absolute h-[1211.1399999999999px] inset-[383.86px_532.53px_0_0] pointer-events-none">
          <div className="h-[557.594px] pointer-events-auto sticky top-0">
            <div className="absolute h-[561.843994140625px] inset-[-4.25px_0_0_0] pointer-events-none">
              <div className="content-stretch flex items-start justify-center pl-[21.53px] pointer-events-auto pr-[11.552px] sticky top-0">
                <div className="flex h-[459.621px] items-center justify-center min-h-[1.0000003576278687px] relative shrink-0 w-[499.388px]">
                  <div className="-rotate-1 flex-none">
                    {/* Card surface */}
                    <div className="bg-white h-[451.11px] relative rounded-[35px] w-[491.59px]">
                      <div className="content-stretch flex flex-col items-start min-h-[inherit] overflow-clip px-[54.234px] py-[27.609px] relative rounded-[inherit] size-full">
                        {/* "Top performing" eyebrow */}
                        <div className="relative shrink-0 w-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30.477px] pt-[10.483px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-col font-['Gloria_Hallelujah:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] w-full">
                                <p className="leading-[1.863px]">Top performing</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Card title */}
                        <div className="relative shrink-0 w-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[35.002px] pt-[8.996px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[33.5px] tracking-[-2.5px] w-full">
                                <p className="leading-[36px]">01. Web Design</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Card description */}
                        <div className="relative shrink-0 w-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[19.993px] relative size-full">
                            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#6d6d6d] tracking-[-0.5px] w-full whitespace-nowrap">
                              <div className="flex flex-col justify-center mb-[-0.6px] relative shrink-0 text-[15.1px]">
                                <p className="leading-[22.4px]">I design no-code websites that are responsive, mobile-</p>
                              </div>
                              <div className="flex flex-col justify-center mb-[-0.6px] relative shrink-0 text-[14.9px]">
                                <p className="leading-[22.4px]">friendly, and SEO-ready. Every site is built for usability,</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 text-[15.3px]">
                                <p className="leading-[22.4px]">speed, and modern design.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Skill tags list */}
                        <div className="relative shrink-0 w-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10.439px] pt-[14.002px] relative size-full">
                            <div className="relative shrink-0 w-full">
                              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic pl-[40px] relative size-full text-[#a5a5a5] tracking-[-0.3px] whitespace-nowrap">
                                {skills.map((skill) => (
                                  <SkillTag key={skill} label={skill} />
                                ))}
                                {/* Extra tag present in the source beyond the data list */}
                                <SkillTag label="Experienced with AI builders" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[35px] shadow-[2px_2px_70px_33px_#eaeaea]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider rules running down the right column */}
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[652.16px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[1190.16px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[1718.36px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[2235.36px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[2731.38px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[3237.19px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[532.46px] pb-[20px] right-[0.07px] top-[3775.19px]">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="min-h-px relative self-stretch shrink-0 w-[491.59px]" />
          </div>
        </div>
      </div>

      {/*
        CTA buttons + rating block.
        In the source these are absolutely positioned inside the adjacent
        left/About column (Container60). They are reproduced here within the
        same relative, flex-1, 532px-wide context so their absolute offsets
        (top-[317.94px] / top-[387.92px]) land identically.
      */}
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
        {/* CTA buttons row: Schedule a call / Copy email / Download CV */}
        <div className="absolute h-[69.98px] left-0 right-[-0.02px] top-[317.94px]">
          <div className="absolute content-center flex flex-wrap items-center justify-center left-[-10.64px] max-w-[553.77001953125px] pt-[27.69px] right-[-10.64px] top-0">
            <div className="content-stretch flex flex-[1_0_0] h-[42.3px] items-start justify-center min-w-px relative">
              <div className="content-stretch flex items-start min-h-px relative self-stretch shrink-0 w-[532.52px]">
                {/* Schedule a call (primary) */}
                <div className="content-stretch flex flex-col h-full items-start pr-[15px] relative shrink-0">
                  <button type="button" className="bg-[#e27500] content-stretch flex items-center justify-center overflow-clip px-[29px] py-[13px] relative rounded-[30px] shrink-0">
                    <div className="absolute inset-[-1px]">
                      <div className="absolute bg-[#333] inset-[0_0.31px_-0.3px_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${maskFade1}")` }} />
                    </div>
                    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pr-[9.1px] relative shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[13px] whitespace-nowrap">
                        <p className="leading-[13px]">{``}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[12.7px] whitespace-nowrap">
                        <p className="leading-[14.3px]">Schedule a call</p>
                      </div>
                    </div>
                  </button>
                </div>
                {/* Copy email (secondary) */}
                <div className="content-stretch flex flex-col h-full items-start pr-[15px] relative shrink-0">
                  <button type="button" className="bg-[#eaeaea] relative rounded-[30px] shrink-0">
                    <div className="content-stretch flex items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[inherit] size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute bg-[#333] inset-[0_-0.33px_-0.3px_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${maskFade2}")` }} />
                      </div>
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13px] whitespace-nowrap">
                            <p className="leading-[14.3px]">Copy email</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[30px]" />
                  </button>
                </div>
                {/* Download CV (secondary) */}
                <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
                  <button type="button" className="bg-[#eaeaea] relative rounded-[30px] shrink-0">
                    <div className="content-stretch flex items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[inherit] size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute bg-[#333] inset-[0_-0.03px_-0.3px_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${maskFade3}")` }} />
                      </div>
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12.8px] whitespace-nowrap">
                            <p className="leading-[14.3px]">Download CV</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[30px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating block: "4.9 / 5" stars + "Trusted by over 130+ clients" + social links */}
        <div className="absolute h-[136px] left-0 right-[-0.02px] top-[387.92px]">
          <div className="absolute content-center flex flex-wrap items-center justify-center left-[-10.64px] max-w-[553.77001953125px] pt-[27.69px] right-[-10.64px] top-0">
            <div className="content-stretch flex flex-[1_0_0] h-[108.315px] items-start justify-center min-w-px relative">
              <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[532.52px]">
                {/* Stars + numeric rating */}
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pr-[5px] relative shrink-0">
                    <div className="content-stretch flex gap-[2.5px] items-start py-[2px] relative shrink-0">
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      {/* Fifth star is layered (one star + an overlapping absolute star) */}
                      <div className="content-stretch flex items-start relative shrink-0">
                        <RatingStar />
                        <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip right-[10.05%] top-0">
                          <RatingStar />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[14.1px] tracking-[-0.5px] whitespace-nowrap">
                      <p className="leading-[21px]">4.9 / 5</p>
                    </div>
                  </div>
                </div>
                {/* Trusted-by heading */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18.6px] tracking-[-0.7px] w-full">
                    <p className="leading-[22px]">Trusted by over 130+ clients</p>
                  </div>
                </div>
                {/* Social links row */}
                <div className="h-[65.315px] relative shrink-0 w-full">
                  <div className="absolute content-stretch flex gap-[10px] items-start left-[-5px] pl-[5px] pr-[304.08px] py-[5px] right-[-5px] top-[21.63px]">
                    {/* twitter */}
                    <a href="#" className="bg-[#eaeaea] content-stretch flex items-center justify-center p-[11.844px] relative rounded-[10px] shrink-0 w-[38.69px]">
                      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                      <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[14.5px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="h-[15px] relative w-[14.5px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 15">
                                <g id="Icon">
                                  <path d={svgPaths.pa92fc00} fill="var(--fill-0, #333333)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* instagram */}
                    <a href="#" className="bg-[#eaeaea] content-stretch flex items-center justify-center p-[11.844px] relative rounded-[10px] shrink-0 w-[38.69px]">
                      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                      <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[14.5px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="h-[15px] relative w-[14.5px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 15">
                                <g id="Icon">
                                  <path d={svgPaths.p1c6ba240} fill="var(--fill-0, #333333)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* youtube */}
                    <a href="#" className="bg-[#eaeaea] content-stretch flex items-center justify-center max-h-[383.6875915527344px] max-w-[623.6876220703125px] p-[11.844px] relative rounded-[10px] shrink-0 w-[38.69px]">
                      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                      <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[14.5px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="h-[15px] relative w-[14.5px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 15">
                                <g id="Icon">
                                  <path d={svgPaths.pa5c5c00} fill="var(--fill-0, #333333)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* linkedin */}
                    <a href="#" className="bg-[#eaeaea] content-stretch flex items-center justify-center p-[11.844px] relative rounded-[10px] shrink-0 w-[38.69px]">
                      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                      <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[14.5px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="h-[15px] relative w-[14.5px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 15">
                                <g id="Icon">
                                  <path d={svgPaths.p34f65600} fill="var(--fill-0, #333333)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* telegram */}
                    <a href="#" className="bg-[#eaeaea] content-stretch flex items-center justify-center p-[11.844px] relative rounded-[10px] shrink-0 w-[38.69px]">
                      <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                      <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[14.5px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="h-[15px] relative w-[14.52px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.52 15">
                                <g id="Icon">
                                  <path d={svgPaths.p2db01e00} fill="var(--fill-0, #333333)" id="Vector" />
                                </g>
                              </svg>
                            </div>
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
  );
}
