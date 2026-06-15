import { SectionEyebrow } from "../SectionEyebrow";

// TESTIMONIALS section ("/ Community Trust – Testimonials" → "What people say").
//
// NOTE ON DATA SOURCE: The Figma source renders 15 testimonial cards whose
// visible (truncated "[...]") text, names, services and dates do NOT match the
// 12 cleaned entries in `../data` (`testimonials`). Per the refactor rules we
// trust the SOURCE for the visible text, so the card content below is taken
// verbatim from the import rather than from `../data`. See the report for the
// full list of mismatches.
//
// The cards are laid out as an absolutely-positioned 3-column masonry inside a
// fixed-height clipped container, each card pinned by its own left/right/top +
// height. A bottom gradient fades the lower rows out. We replicate the exact
// per-card positions, heights, quote line-breaks and the small per-card font
// sizes / paddings so the layout stays pixel-identical.

// Quote lines preserve the source's manual <p> line-breaks (including the
// trailing truncation marker). `tight` cards use the alternate quote padding
// (pt-[4.969px] + pb-[0.75px] inner) seen on short quotes.
interface Card {
  starText: number; // quote font-size in px
  quote: string[];
  tight: boolean;
  name: string;
  nameSize: number;
  service: string;
  serviceSize: number;
  date: string;
  dateSize: number;
  // card placement / sizing
  left: string;
  right: string;
  top: string;
  height: string;
  // footer (name/service/date) + divider vertical offsets
  footerTop: string;
  dividerTop: string;
}

const cards: Card[] = [
  {
    starText: 13.9,
    quote: [
      "I asked and Nik delivered honestly. I didn't",
      "want a generic website, i wanted something i",
      "could build as a hobby and actoually be proud",
      "of. He got that instantly and gave me what I",
      "needed. I [...]",
    ],
    tight: false,
    name: "Giovanni", nameSize: 15.5,
    service: "Website Design", serviceSize: 11.4,
    date: "March 2026", dateSize: 10.9,
    left: "left-0", right: "right-[66.67%]", top: "top-0", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 13.9,
    quote: [
      "Nikola Radeski is very talented doing vibe",
      "coding + designing. I have an AI startup and I",
      "needed help with vibe code and design",
      "directions (for my team) so Nikola did exactly",
      "that as he's cl [...]",
    ],
    tight: false,
    name: "Oliver S.", nameSize: 15.6,
    service: "Design & Vibe Coding", serviceSize: 11.3,
    date: "February 2026", dateSize: 10.7,
    left: "left-[33.3%]", right: "right-[33.36%]", top: "top-0", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 13.9,
    quote: [
      "I have been working with Nik for a month now",
      "and he is working on my company as a Team",
      "Leader and Designer and im very impressed",
      "so much of things have changed on the team",
      "for a good way and [...]",
    ],
    tight: false,
    name: "Rilind", nameSize: 16,
    service: "Design / Creative Lead", serviceSize: 11.4,
    date: "September 2025", dateSize: 11.1,
    left: "left-[66.61%]", right: "right-[0.06%]", top: "top-0", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 13.9,
    quote: [
      "Fast, reliable, and talented, he turned a vague",
      "idea into a polished product. Just like he",
      "mentions, his design sense is really",
      "unmatched. [...]",
    ],
    tight: true,
    name: "Tomas", nameSize: 15.8,
    service: "Branding", serviceSize: 11.4,
    date: "September 2025", dateSize: 11.1,
    left: "left-0", right: "right-[66.67%]", top: "top-[311px]", height: "h-[288.19px]",
    footerTop: "top-[184.44px]", dividerTop: "top-[177.72px]",
  },
  {
    starText: 13.9,
    quote: [
      "I worked with Nikola on a Webflow project and",
      "was impressed right away. He got things",
      "moving quickly, kept everything clear, and",
      "delivered exactly what was needed. What I",
      "appreciated most wa [...]",
    ],
    tight: false,
    name: "Siraj", nameSize: 15.9,
    service: "Webflow Web Design", serviceSize: 11.3,
    date: "September 2025", dateSize: 11.1,
    left: "left-[33.3%]", right: "right-[33.36%]", top: "top-[311px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 14.1,
    quote: [
      "I asked for minimal but strong, and that’s",
      "exactly what I got. The design feels timeless.",
      "[...]",
    ],
    tight: false,
    name: "Katarina", nameSize: 15.6,
    service: "Social Media Design", serviceSize: 11.3,
    date: "August 2025", dateSize: 10.9,
    left: "left-[66.61%]", right: "right-[0.06%]", top: "top-[311px]", height: "h-[265.69px]",
    footerTop: "top-[161.94px]", dividerTop: "top-[155.22px]",
  },
  {
    starText: 14.3,
    quote: [
      "Creative beyond limits. We hired him for a",
      "short NDA website project. The site he",
      "designed boosted my marketing campaign",
      "instantly, we see results overnight. [...]",
    ],
    tight: true,
    name: "Leandro", nameSize: 15.6,
    service: "Web Design", serviceSize: 11.3,
    date: "August 2025", dateSize: 10.9,
    left: "left-[66.61%]", right: "right-[0.06%]", top: "top-[577px]", height: "h-[288.19px]",
    footerTop: "top-[184.44px]", dividerTop: "top-[177.72px]",
  },
  {
    starText: 14.1,
    quote: [
      "Working with Nick, I can confidently say he is",
      "one of the most talented people I’ve ever met.",
      "He is a true prodigy when it comes to design",
      "— his creativity, precision, and ability to",
      "underst [...]",
    ],
    tight: false,
    name: "Mihael", nameSize: 15.6,
    service: "Colleague", serviceSize: 11.4,
    date: "September 2025", dateSize: 11.1,
    left: "left-0", right: "right-[66.67%]", top: "top-[599px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 13.9,
    quote: [
      "Nik is an exceptional team lead and one of the",
      "most talented designers I've had the pleasure",
      "to work with. His knowledge and deep",
      "understanding of design combined with his",
      "organizational ski [...]",
    ],
    tight: false,
    name: "Teodora", nameSize: 15.6,
    service: "Colleague", serviceSize: 11.4,
    date: "September 2025", dateSize: 11.1,
    left: "left-[33.3%]", right: "right-[33.36%]", top: "top-[622px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 14.2,
    quote: [
      "He created a website I can't stop looking at,",
      "very responsive, he took his time and",
      "analyzed most of the crucial part of my",
      "business. Amazing, recommended! Will hire",
      "him again. [...]",
    ],
    tight: false,
    name: "Wesley", nameSize: 15.5,
    service: "Website & Visual Design", serviceSize: 11.3,
    date: "May 2025", dateSize: 10.7,
    left: "left-[66.61%]", right: "right-[0.06%]", top: "top-[865px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 14.1,
    quote: [
      "I got even more of what I wanted, just with",
      "some simple explanations. Nikola captured",
      "my requirements only by specifying the colors",
      "I’d prefer and the website's topics. Each day, I",
      "get great [...]",
    ],
    tight: false,
    name: "Marta", nameSize: 16,
    service: "Website & Graphic Design", serviceSize: 11.4,
    date: "April 2025", dateSize: 10.9,
    left: "left-0", right: "right-[66.67%]", top: "top-[910px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 14.1,
    quote: [
      "Professional, client oriented. Highly",
      "recommend. [...]",
    ],
    tight: true,
    name: "Irena", nameSize: 15.8,
    service: "Graphic Design", serviceSize: 11.4,
    date: "March 2025", dateSize: 10.9,
    left: "left-[33.3%]", right: "right-[33.36%]", top: "top-[933px]", height: "h-[243.19px]",
    footerTop: "top-[139.44px]", dividerTop: "top-[132.72px]",
  },
  {
    starText: 13.9,
    quote: [
      "Excellent client-oriented service. Delivered on",
      "time and very professional throughout. [...]",
    ],
    tight: true,
    name: "Evgenija", nameSize: 15.5,
    service: "Graphic Design", serviceSize: 11.4,
    date: "May 2025", dateSize: 10.7,
    left: "left-[33.3%]", right: "right-[33.36%]", top: "top-[1176px]", height: "h-[243.19px]",
    footerTop: "top-[139.44px]", dividerTop: "top-[132.72px]",
  },
  {
    starText: 14.3,
    quote: [
      "Perfectionism in every sense, he pays",
      "maximum attention to details and ideas and",
      "everything is always implemented on time.",
      "My ideas become colorfull with his talent. I",
      "use his services for d [...]",
    ],
    tight: false,
    name: "Riste", nameSize: 16,
    service: "UI/UX Design & Social Media", serviceSize: 11.3,
    date: "May 2024", dateSize: 10.5,
    left: "left-[66.61%]", right: "right-[0.06%]", top: "top-[1176px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
  {
    starText: 14.1,
    quote: [
      "“I got Nikola by recommendation, we quickly",
      "agreed on Discord about what needs to be",
      "edited. Azure communication via email,",
      "everything was done within the stipulated",
      "time and as we agreed! E [...]",
    ],
    tight: false,
    name: "Uros", nameSize: 15.9,
    service: "Video Editing", serviceSize: 11.3,
    date: "February 2024", dateSize: 10.7,
    left: "left-0", right: "right-[66.67%]", top: "top-[1221px]", height: "h-[310.69px]",
    footerTop: "top-[206.94px]", dividerTop: "top-[200.22px]",
  },
];

// Five repeated Font-Awesome solid-star glyphs ().
function Stars() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[31px] pb-[10px] right-[30.67px] top-[31px]">
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex font-['Font_Awesome_5_Free:Solid',sans-serif] gap-[3.7px] items-start leading-[0] not-italic py-[3px] relative shrink-0 text-[#ef8700] text-[15px] tracking-[-0.5px] whitespace-nowrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[15px]">{``}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// A single testimonial card: light panel with stars, quote, footer (name /
// service / date) and a hairline divider above the footer.
function TestimonialCard({ card }: { card: Card }) {
  return (
    <div
      className={`absolute content-stretch flex ${card.height} items-start justify-center ${card.left} p-[5px] ${card.right} ${card.top}`}
    >
      <div className="bg-[#efefef] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          {/* Rating stars */}
          <Stars />

          {/* Quote */}
          <div
            className={`absolute content-stretch flex flex-col items-start left-[31px] pb-[20px] ${card.tight ? "pt-[4.969px]" : "pt-[4.719px]"} right-[30.67px] top-[62px]`}
          >
            <div
              className={`content-stretch flex flex-col items-start ${card.tight ? "pb-[0.75px] " : ""}relative shrink-0 w-full`}
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-0.5px] w-full"
                style={{ fontSize: `${card.starText}px` }}
              >
                {card.quote.map((line, i) => (
                  <p key={i} className={`leading-[22.5px]${i < card.quote.length - 1 ? " mb-0" : ""}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Footer: name / service / date */}
          <div className={`absolute h-[62.75px] left-[31px] right-[30.67px] ${card.footerTop}`}>
            <div className="absolute content-stretch flex flex-col items-center justify-center left-[-5.72px] max-w-[362.2424011230469px] right-[-5.72px] top-0">
              {/* Name */}
              <div className="content-stretch flex flex-col items-start pb-[5.953px] relative shrink-0 w-full">
                <div className="content-stretch flex h-[21px] items-start justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[286.34px]">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-0.5px] w-full"
                        style={{ fontSize: `${card.nameSize}px` }}
                      >
                        <p className="leading-[20.8px]">{card.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="content-stretch flex h-[18px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[286.34px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] tracking-[-0.5px] w-full"
                      style={{ fontSize: `${card.serviceSize}px` }}
                    >
                      <p className="leading-[18px]">{card.service}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Date */}
              <div className="content-stretch flex h-[18px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[286.34px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9e9e9e] tracking-[-0.5px] w-full"
                      style={{ fontSize: `${card.dateSize}px` }}
                    >
                      <p className="leading-[18px]">{card.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hairline divider above footer */}
          <div className={`absolute content-stretch flex flex-col items-start left-[31px] pb-[5.719px] right-[30.67px] ${card.dividerTop}`}>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="flex-[1_0_0] h-px min-w-px relative">
                <div aria-hidden className="absolute border-[#dbdbdb] border-solid border-t inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[55.797px] pt-[93px] px-[93px] relative shrink-0 w-[1920px]">
      <div className="h-[1844px] max-w-[1064.9599609375px] relative shrink-0 w-[1064px]">
        {/* Top hairline / spacer */}
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[106.484px] right-[0.05px] top-0">
          <div className="content-stretch flex h-px items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Header: eyebrow + "What people say" + subtitle */}
        <div className="absolute h-[199.214px] left-0 right-[0.05px] top-[107.48px]">
          <div className="absolute content-stretch flex h-[147px] items-start justify-center left-[-21.3px] right-0 top-0">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
              <div className="content-center flex flex-wrap items-center justify-center max-w-[1107.550048828125px] relative shrink-0 w-[1107.55px]">
                <div className="content-stretch flex flex-[1_0_0] h-[147px] items-start justify-center min-w-px relative">
                  <div className="content-stretch flex flex-col items-start min-h-px relative self-stretch shrink-0 w-[1065.05px]">
                    {/* Eyebrow */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <SectionEyebrow>/ Community Trust – Testimonials</SectionEyebrow>
                    </div>
                    {/* Heading */}
                    <div className="content-stretch flex flex-col items-start pb-[15px] pt-[10px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[0px] tracking-[-2px] w-full">
                          <p className="text-[53.2px]">
                            <span className="leading-[56px]">{`What `}</span>
                            <span className="leading-[56px] text-[#e27500]">people</span>
                            <span className="leading-[56px]">{` say`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Subtitle */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d6d6d] text-[15px] tracking-[-0.5px] w-full">
                        <p className="leading-[22.4px]">A few thoughts from people who have experienced the value of working together.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card list: clipped, fixed-height region with absolutely-positioned
            3-column masonry cards and a bottom gradient fade. */}
        <div className="absolute content-stretch flex flex-col inset-[306.7px_0.05px_-0.17px_0] items-start justify-center pb-[20px]">
          <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full">
            <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start min-h-[inherit] py-[10.641px] relative size-full">
                <div className="h-[3189.19px] overflow-clip relative shrink-0 w-full">
                  <div className="absolute h-[3194.19px] left-[-55.53px] right-[45.53px] top-[0.06px]">
                    {cards.map((card, i) => (
                      <TestimonialCard key={i} card={card} />
                    ))}
                  </div>
                  {/* Bottom fade-to-background gradient */}
                  <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-[1643.13px] from-[30%] from-[rgba(234,234,234,0)] h-[1000px] left-[calc(50%+0.97px)] to-[#eaeaea] w-[1064.95px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
