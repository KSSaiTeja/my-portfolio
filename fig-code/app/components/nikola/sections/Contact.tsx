import { useState } from "react";
import { toast } from "sonner";
import { SectionEyebrow } from "../SectionEyebrow";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
// NOTE: The Contact section's portrait card actually uses the "workBackdrop"
// image (src e86129c7…png) in the source, not the 2ddd8db6 portrait. We keep
// the source image so the render is visually identical. The small handwritten
// sticker uses workWewewe (291c3a39…png).
import { workBackdropImg, workWeweweImg } from "../assets";

// CONTACT section. Fixed 1920px design — faithful to the Figma import
// (Container577). Wraps the eyebrow + heading, the contact form, the portrait
// card, and the decorative sticker. The form is wired to real inputs/state.
export function Contact() {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"project" | "recruiter" | null>(null);
  const [moreInfo, setMoreInfo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thanks! I'll reply with the next step.");
  }

  return (
    // Section wrapper (Container577): fixed 1920px-wide row, centered content.
    <div className="content-stretch flex h-[1088.343px] items-start justify-center pt-[93px] px-[93px] relative shrink-0 w-[1920px]">
      {/* Container578 */}
      <div className="content-stretch flex flex-col items-center justify-center max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
        {/* Margin181 -> Container579/580: decorative full-width hairline. */}
        <div className="content-stretch flex flex-col items-start mb-[-0.004px] pb-[106.484px] relative shrink-0 w-full">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Margin182 -> Container581 -> Container582 */}
        <div className="content-stretch flex flex-col items-start pb-[40.453px] relative shrink-0 w-full">
          <div className="content-stretch flex h-[847.41px] items-start justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.002px] items-start min-h-px min-w-px relative self-stretch">
              {/* Margin183 -> Container583/584/585: eyebrow + "Let's get started". */}
              <div className="h-[165.22px] max-w-[1064.9561767578125px] relative shrink-0 w-full">
                <div className="absolute content-center flex flex-wrap items-center justify-center left-[-21.3px] max-w-[1107.550048828125px] pb-[33.22px] right-[-21.3px] top-0">
                  <div className="content-stretch flex flex-[1_0_0] h-[132px] items-start justify-center min-w-px relative">
                    <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1065.05px]">
                      {/* Margin184 -> Heading56: eyebrow "/ Contact Information". */}
                      <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                        <SectionEyebrow>/ Contact Information</SectionEyebrow>
                      </div>
                      {/* Margin185 -> Heading57: "Let's get started". */}
                      <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                            <p className="text-[62.5px]">
                              <span className="leading-[64px]">{`Let’s get `}</span>
                              <span className="leading-[64px] text-[#e27500]">started</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Margin186 -> Form -> Container586: form column + portrait + sticker. */}
              <div className="h-[682.188px] relative shrink-0 w-full">
                <div className="absolute content-stretch flex h-[651.861px] items-start justify-center left-[-21.3px] right-[-21.3px] top-[31.94px]">
                  <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-0 items-start justify-center max-w-[1107.550048828125px] min-w-px relative self-stretch">
                    {/* Margin187 -> Container587 -> Container588: the form column. */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px mr-[-0.01px] pb-[20px] relative">
                      <div className="h-[631.861px] relative shrink-0 w-full">
                        <div className="flex flex-row justify-center size-full">
                          <div className="content-stretch flex items-start justify-center pl-[21.25px] pr-[53.16px] relative size-full">
                            <form
                              onSubmit={handleSubmit}
                              className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch"
                            >
                              {/* Margin188 -> Heading58: "How can I help?". */}
                              <div className="content-stretch flex flex-col items-start pb-[9.578px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[52.7px] tracking-[-2px] w-full">
                                    <p className="leading-[56px]">How can I help?</p>
                                  </div>
                                </div>
                              </div>

                              {/* Margin189 -> Container589: supporting line. */}
                              <div className="content-stretch flex flex-col items-start pb-[23.953px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[14.9px] tracking-[-0.5px] w-full">
                                    <p className="leading-[22.4px]">I would love to hear more about your project or company.</p>
                                  </div>
                                </div>
                              </div>

                              {/* Margin190 -> Container590: Full Name field. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[0.28px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex flex-col items-start pb-[10.28px] relative shrink-0 w-full">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] w-full">
                                      <p className="leading-[22.4px]">Your Full Name *</p>
                                    </div>
                                  </div>
                                  <div className="bg-[#eaeaea] h-[25px] relative shrink-0 w-full">
                                    <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex items-start justify-center pb-[4.5px] pt-[3.5px] px-[13px] relative size-full">
                                        <input
                                          type="text"
                                          value={fullName}
                                          onChange={(e) => setFullName(e.target.value)}
                                          placeholder="John Smith *"
                                          className="bg-clip-padding border-0 border-[transparent] border-solid flex-[1_0_0] min-w-px pb-px [word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic outline-none text-[12.6px] text-[#6d6d6d] placeholder:text-[rgba(110,110,110,0.5)] w-full"
                                        />
                                      </div>
                                    </div>
                                    <div aria-hidden className="absolute border-[#dbdbdb] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>

                              {/* Margin191 -> Container593: Role field. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[0.29px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex flex-col items-start pb-[10.28px] relative shrink-0 w-full">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[14.8px] tracking-[-0.5px] w-full">
                                      <p className="leading-[22.4px]">Your Role *</p>
                                    </div>
                                  </div>
                                  <div className="bg-[#eaeaea] h-[25px] relative shrink-0 w-full">
                                    <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex items-start justify-center pb-[4.5px] pt-[3.5px] px-[13px] relative size-full">
                                        <input
                                          type="text"
                                          value={role}
                                          onChange={(e) => setRole(e.target.value)}
                                          placeholder="Founder, Recruiter, Freelancer, etc. *"
                                          className="bg-clip-padding border-0 border-[transparent] border-solid flex-[1_0_0] min-w-px pb-px [word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic outline-none text-[12.2px] text-[#6d6d6d] placeholder:text-[rgba(110,110,110,0.5)] w-full"
                                        />
                                      </div>
                                    </div>
                                    <div aria-hidden className="absolute border-[#dbdbdb] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>

                              {/* Margin192 -> Container596: E-mail field. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[0.28px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex flex-col items-start pb-[10.28px] relative shrink-0 w-full">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] w-full">
                                      <p className="leading-[22.4px]">Your E-mail Address *</p>
                                    </div>
                                  </div>
                                  <div className="bg-[#eaeaea] h-[25px] relative shrink-0 w-full">
                                    <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex items-start justify-center pb-[4.5px] pt-[3.5px] px-[13px] relative size-full">
                                        <input
                                          type="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="mail@example.com *"
                                          className="bg-clip-padding border-0 border-[transparent] border-solid flex-[1_0_0] min-w-px pb-px [word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic outline-none text-[12.6px] text-[#6d6d6d] placeholder:text-[rgba(110,110,110,0.5)] w-full"
                                        />
                                      </div>
                                    </div>
                                    <div aria-hidden className="absolute border-[#dbdbdb] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>

                              {/* Margin193 -> Fieldset: "Your status?" radio choice. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <div className="h-[55.17px] relative shrink-0 w-full">
                                  {/* Legend */}
                                  <div className="absolute content-stretch flex flex-col items-start left-0 pb-[10.28px] px-[2px] right-[382.41px] top-0">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] whitespace-nowrap">
                                      <p className="leading-[22.4px]">Your status? *</p>
                                    </div>
                                  </div>
                                  {/* Container599 -> Label: "I have a project". */}
                                  <button
                                    type="button"
                                    onClick={() => setStatus("project")}
                                    className="absolute content-stretch flex items-center left-0 top-[32.78px]"
                                  >
                                    <div className="absolute bg-white left-0 opacity-0 rounded-[50px] size-[14px] top-[4.19px]">
                                      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[50px]" />
                                    </div>
                                    <div className="content-stretch flex flex-col items-start pl-[21.44px] relative shrink-0">
                                      <div className="-translate-y-1/2 absolute left-0 rounded-[15px] size-[15px] top-1/2">
                                        <div
                                          aria-hidden
                                          className={`absolute border border-solid inset-0 pointer-events-none rounded-[15px] ${
                                            status === "project" ? "border-[#e27500] bg-[#e27500]" : "border-[#dbdbdb]"
                                          }`}
                                        />
                                      </div>
                                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] whitespace-nowrap">
                                        <p className="leading-[22.4px]">I have a project</p>
                                      </div>
                                    </div>
                                  </button>
                                  {/* Container600 -> Label1: "I am a recruiter". */}
                                  <button
                                    type="button"
                                    onClick={() => setStatus("recruiter")}
                                    className="absolute content-stretch flex items-center left-[144.89px] top-[32.78px]"
                                  >
                                    <div className="absolute bg-white left-0 opacity-0 rounded-[50px] size-[14px] top-[4.19px]">
                                      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[50px]" />
                                    </div>
                                    <div className="content-stretch flex flex-col items-start pl-[21.44px] relative shrink-0">
                                      <div className="-translate-y-1/2 absolute left-0 rounded-[15px] size-[15px] top-1/2">
                                        <div
                                          aria-hidden
                                          className={`absolute border border-solid inset-0 pointer-events-none rounded-[15px] ${
                                            status === "recruiter" ? "border-[#e27500] bg-[#e27500]" : "border-[#dbdbdb]"
                                          }`}
                                        />
                                      </div>
                                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.1px] tracking-[-0.5px] whitespace-nowrap">
                                        <p className="leading-[22.4px]">I am a recruiter</p>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>

                              {/* Margin194 -> Container601: "More info" textarea. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[10.28px] items-start relative shrink-0 w-full">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15.6px] tracking-[-0.5px] whitespace-nowrap">
                                    <p className="leading-[22.4px]">More info *</p>
                                  </div>
                                  <div className="bg-[#eaeaea] relative shrink-0 w-full">
                                    <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
                                      <div className="content-stretch flex items-start justify-center pb-[31px] pt-[13px] px-[13px] relative size-full">
                                        <textarea
                                          value={moreInfo}
                                          onChange={(e) => setMoreInfo(e.target.value)}
                                          placeholder="What's this about? Project, hiring, or opportunity? *"
                                          className="bg-clip-padding border-0 border-[transparent] border-solid flex-[1_0_0] min-w-px pb-px resize-none [word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic outline-none text-[12.3px] text-[#6d6d6d] placeholder:text-[rgba(110,110,110,0.5)] w-full"
                                        />
                                      </div>
                                    </div>
                                    <div aria-hidden className="absolute border-[#dbdbdb] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>

                              {/* Margin195 -> Button: Submit. */}
                              <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                                <button
                                  type="submit"
                                  className="bg-[#e27500] relative rounded-[4px] shrink-0 w-full"
                                >
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center pl-[190.75px] pr-[206.77px] py-[13px] relative size-full">
                                      {/* ContainerCssTransform -> Container603: hidden leading glyph. */}
                                      <div className="content-stretch flex flex-col h-[19.19px] items-center justify-center pb-[1.59px] pr-[16px] pt-[1.6px] relative shrink-0">
                                        <div className="content-stretch flex flex-col items-center opacity-0 relative shrink-0">
                                          <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[16px] text-center tracking-[0.24px] whitespace-nowrap">
                                            <p className="leading-[16px]">{``}</p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Margin196 -> Container604: "Submit" label. */}
                                      <div className="h-[19.19px] relative shrink-0 w-[38.16px]">
                                        <div className="absolute content-stretch flex flex-col items-center left-[-16px] top-[-1px]">
                                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[16px] text-center tracking-[0.24px] whitespace-nowrap">
                                            <p className="leading-[19.2px]">Submit</p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Margin197 -> Container605: trailing arrow glyph. */}
                                      <div className="content-stretch flex flex-col items-start pl-[11.2px] relative shrink-0">
                                        <div className="content-stretch flex flex-col items-center relative shrink-0">
                                          <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[16px] text-center tracking-[0.24px] whitespace-nowrap">
                                            <p className="leading-[16px]">{``}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MarginAlignStretch -> Margin198 -> Background6: portrait card. */}
                    <div className="content-stretch flex h-full items-start justify-center relative shrink-0">
                      <div className="h-full relative shrink-0 w-[553.77px]">
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col items-start justify-center py-[11.063px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px overflow-clip relative rounded-[20px] w-[532.52px]">
                              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
                                <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                                  <ImageWithFallback
                                    alt=""
                                    className="absolute h-[105.93%] left-0 max-w-none top-0 w-full"
                                    src={workBackdropImg}
                                  />
                                </div>
                                <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[20px] to-[rgba(0,0,0,0.5)]" />
                              </div>
                              {/* Margin199 -> Container606: copy over the portrait. */}
                              <div className="mb-[-0.005px] relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start pb-[26.625px] pt-[212.39px] px-[37.266px] relative size-full">
                                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[15.1px] tracking-[-0.5px] w-full">
                                      <p className="leading-[22.4px] mb-0">If the work above fits what you need, send me a note. Share the</p>
                                      <p className="leading-[22.4px] mb-0">goal, a link, budget range, and when you want to start. I’ll reply with</p>
                                      <p className="leading-[22.4px]">the next step.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Margin200 -> Heading59: "Nikola Radeski" signature. */}
                              <div className="relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start pb-[53.25px] px-[37.266px] relative size-full">
                                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                    <div className="[word-break:break-word] flex flex-col font-['Gloria_Hallelujah:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[16px] tracking-[-0.5px] w-full">
                                      <p className="leading-[17.6px]">Nikola Radeski</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Container607: rotated decorative sticker image. */}
                    <div className="absolute content-stretch flex items-start justify-center left-[44.19%] pr-[19.652px] right-[35.66%] top-[46.53px]">
                      <div className="flex h-[102.54px] items-center justify-center min-h-[1.0000001192092896px] relative shrink-0 w-[203.465px]">
                        <div className="flex-none rotate-2">
                          <div className="content-stretch flex flex-col h-[95.61px] items-start justify-center relative w-[200.25px]">
                            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                              <div className="h-[95.608px] max-w-[200.25003051757812px] relative shrink-0 w-[100.121px]">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <ImageWithFallback
                                    alt=""
                                    className="absolute h-[100.01%] left-0 max-w-none top-0 w-full"
                                    src={workWeweweImg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
