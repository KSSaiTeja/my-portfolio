// Handwritten-style "/ section" label used above each section heading.
// Matches the Gloria Hallelujah eyebrow style from the original design.
export function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="flex flex-col font-['Gloria_Hallelujah:Regular',sans-serif] text-[#333] text-[16px] tracking-[-0.5px] w-full">
      <p className="leading-[17.6px]">{children}</p>
    </div>
  );
}
