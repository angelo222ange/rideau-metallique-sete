import { ReactNode } from "react";

export type LegalBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "ul"; content: string[] };

export default function LegalContent({
  intro,
  blocks,
}: {
  intro: string;
  blocks: LegalBlock[];
}): ReactNode {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <article className="max-w-[800px] mx-auto flex flex-col gap-5">
        <p className="text-[#0A1F26] text-[17px] md:text-[18px] leading-[1.7]">{intro}</p>
        {blocks.map((block, i) => {
          if (block.type === "p") {
            return (
              <p key={i} className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.7]">
                {block.content}
              </p>
            );
          }
          if (block.type === "h2") {
            return (
              <h2
                key={i}
                className="text-[#0A1F26] mt-4"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.8px",
                  fontSize: "clamp(24px, 3vw, 32px)",
                }}
              >
                {block.content}
              </h2>
            );
          }
          if (block.type === "h3") {
            return (
              <h3
                key={i}
                className="text-[#0A1F26] mt-2"
                style={{
                  fontWeight: 500,
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.5px",
                  fontSize: "20px",
                }}
              >
                {block.content}
              </h3>
            );
          }
          return (
            <ul key={i} className="flex flex-col gap-2 mt-1">
              {block.content.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E8633E] mt-3 shrink-0"
                    aria-hidden
                  />
                  <span className="text-[#4A5560] text-[16px] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          );
        })}
      </article>
    </section>
  );
}
