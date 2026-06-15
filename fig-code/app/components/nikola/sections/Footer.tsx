// Footer for the Nikola Radeski site (source `Main1`):
//   - Background7: "Let's work together ✱ …" marquee headline, the oversized
//     faded "Nikola Radeski" wordmark, and the email / phone contact rows.
//   - Background8: the "2025 / All rights reserved." copyright row.
//
// Note: the source also has a few page-root overlays positioned by huge
// `bottom-[17436px]` offsets (relative to the original ~17,600px canvas, these
// actually sit near the TOP of the page): the floating portrait card (now part
// of <Hero/>), a decorative frosted-blur band, a hidden back-to-top link, and
// the floating pill navigation. The navigation is exported separately as <Nav/>
// and rendered near the top by <NikolaSite/>; the purely decorative blur band
// and the hidden back-to-top link are omitted.

// ---------------------------------------------------------------------------
// Marquee headline + giant faded name + contact rows
// ---------------------------------------------------------------------------

function MarqueeHeadline() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 py-[39.922px] right-0 top-[200.67px]">
      <div className="content-stretch flex h-[192px] items-start justify-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
          <div className="h-[192px] overflow-clip relative shrink-0 w-full">
            <div className="absolute bottom-0 content-stretch flex flex-col items-center left-0 px-[12.8px] top-0">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[62.3px] text-center tracking-[-1px] whitespace-nowrap">
                <p className="leading-[192px] whitespace-pre">{`Let’s work together  ✱  Let’s work together  ✱  Let’s work together  ✱  Let’s work together  ✱  Let’s work together  ✱   `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GiantName() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_36.71%_0] items-start justify-center opacity-99">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1920px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center pl-[174.86px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[306.3px] text-center tracking-[-0.5px] whitespace-nowrap">
                  <p className="leading-[368.64px]">Nikola Radeski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailRow() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pt-[39.922px] right-0 top-[472.51px]">
      <div className="h-[35px] relative shrink-0 w-full">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center pr-[38.33px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap items-center justify-center max-w-[1996.945556640625px] pb-[20px] relative shrink-0 w-[1996.94px]">
                <div className="content-stretch flex flex-[1_0_0] h-[15px] items-start justify-center min-w-px relative">
                  <a href="mailto:contact@nikolaradeski.com" className="content-stretch flex items-center justify-center min-h-px relative self-stretch shrink-0 w-[1920.28px]">
                    <div className="content-stretch flex flex-col items-center pr-[11px] relative shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] tracking-[-0.5px] whitespace-nowrap">
                        <p className="leading-[15px]">{``}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-center min-w-[237.3000030517578px] relative shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[17.2px] text-center tracking-[-1.3px] whitespace-nowrap">
                          <p className="leading-[14.56px]">contact@nikolaradeski.com</p>
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
  );
}

function PhoneRow() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex h-[35px] items-start justify-center left-0 pr-[38.33px] right-0 top-[calc(50%+273.71px)]">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch">
        <div className="content-center flex flex-wrap items-center justify-center max-w-[1996.945556640625px] pb-[20px] relative shrink-0 w-[1996.94px]">
          <div className="content-stretch flex flex-[1_0_0] h-[15px] items-start justify-center min-w-px relative">
            <a href="tel:+38978218568" className="content-stretch flex items-center justify-center min-h-px relative self-stretch shrink-0 w-[1920.28px]">
              <div className="content-stretch flex flex-col items-center pr-[11px] relative shrink-0">
                <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[15px] tracking-[-0.5px] whitespace-nowrap">
                  <p className="leading-[15px]">{``}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-center relative shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[18.5px] text-center tracking-[-1.3px] whitespace-nowrap">
                    <p className="leading-[14.56px]">+389 78 218 568</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyrightRow() {
  return (
    <div className="bg-[#eaeaea] h-[296.918px] relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-[153.594px] pt-[57.594px] px-[96px] relative size-full">
          <div className="max-w-[1064.9599609375px] relative self-stretch shrink-0 w-[1064.95px]">
            <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
              <div className="content-center flex flex-wrap items-center justify-center max-w-[inherit] pb-[21.3px] pt-[53.23px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] h-[11.2px] items-start justify-center min-w-px relative">
                  <div className="content-stretch flex flex-wrap items-start justify-between min-h-px relative self-stretch shrink-0 w-[1024.08px]">
                    <div className="h-full relative shrink-0 w-[30.3px]">
                      <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px]">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14.6px] text-center tracking-[-1.3px] whitespace-nowrap">
                          <p className="leading-[11.2px]">2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-full relative shrink-0 w-[112.8px]">
                      <div className="absolute content-stretch flex flex-col items-center left-0 min-w-[112.80000305175781px] top-[-1px]">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] text-center tracking-[-1.3px] whitespace-nowrap">
                          <p className="leading-[11.2px]">All rights reserved.</p>
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

export function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#eaeaea] h-[582.44px] mb-[-0.01px] relative shrink-0 w-full">
        <div className="absolute inset-[0_-38.41px_0_-38.39px]">
          <MarqueeHeadline />
          <GiantName />
          <EmailRow />
          <PhoneRow />
        </div>
      </div>
      <CopyrightRow />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Floating pill navigation (home / Skills / About / Portfolio / Reviews /
// Contact me). In the source it sits near the top of the canvas and scrolls
// with the page; rendered by <NikolaSite/> as an absolute element near the top.
// ---------------------------------------------------------------------------

export function Nav() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[112px] z-50">
      <div className="content-stretch flex flex-col items-start justify-center min-h-px relative shrink-0 w-full">
        <div className="content-center flex flex-wrap items-center justify-center max-w-[1996.800048828125px] relative shrink-0 w-full">
          <div className="flex-[1_0_0] h-[52.39px] min-w-px relative">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center relative size-full">
                <div className="bg-gradient-to-b from-[#0a0a0a] min-h-px relative rounded-[100px] self-stretch shrink-0 to-[#232323] w-[568.7px]">
                  <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between min-h-[inherit] p-[5px] relative size-full">
                      {/* home */}
                      <a href="#top" className="content-stretch flex items-center justify-center p-[10px] relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[20px] tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[20px]">{``}</p>
                        </div>
                      </a>
                      {/* Skills */}
                      <a href="#skills" className="content-stretch flex items-center justify-center pb-[0.39px] pt-px relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[15px] text-center tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[21px]">Skills</p>
                        </div>
                      </a>
                      {/* About */}
                      <a href="#about" className="content-stretch flex items-center justify-center pb-[0.39px] pt-px relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[15px] text-center tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[21px]">About</p>
                        </div>
                      </a>
                      {/* Portfolio */}
                      <a href="#portfolio" className="content-stretch flex items-center justify-center pb-[0.39px] pt-px relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[15px] text-center tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[21px]">Portfolio</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start pl-[10.5px] relative shrink-0">
                          <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[15px] text-center tracking-[-0.5px] whitespace-nowrap">
                            <p className="leading-[15px]">{``}</p>
                          </div>
                        </div>
                      </a>
                      {/* Reviews */}
                      <a href="#testimonials" className="content-stretch flex items-center justify-center pb-[0.39px] pt-px relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaea] text-[14.8px] text-center tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[21px]">Reviews</p>
                        </div>
                      </a>
                      {/* Contact me */}
                      <a href="#contact" className="bg-[#e27500] content-stretch flex h-[42.39px] items-center justify-center px-[15px] relative rounded-[50px] shrink-0">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.5px] whitespace-nowrap">
                          <p className="leading-[22.4px]">Contact me</p>
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
