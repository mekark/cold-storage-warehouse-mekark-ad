import Image from "next/image";
import type { CSSProperties } from "react";
import { manrope } from "@/lib/fonts";
import { assetUrl } from "@/lib/assetPrefix";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 694;

const EYEBROW = "Specialized Cold Chain Solutions We Build";
const SUBTITLE = "Industry-Specific Temperature Controlled Warehouse Construction";

const SOLUTIONS: {
  title: string;
  text: string;
  // Card photo; desktopPosition keeps the Figma crop on the wide desktop card
  image: string;
  desktopPosition?: string;
  // The 3PL photo is much wider than its mobile box, so it needs more width to stay sharp
  mobileSize?: string;
}[] = [
  {
    title: "3PL Multi-Temperature Cold Chain Hubs",
    text: "High-bay mobile/pallet racking cold stores with 12m+ height, insulated dock pods, and multi-chamber layouts for frozen and chilled SKUs.",
    image: "/Images/solutions/card-3pl.webp",
    desktopPosition: "26% center",
    mobileSize: "85vw",
  },
  {
    title: "Pharmaceutical & Life Sciences Cold Rooms",
    text: "WHO-GMP compliant +2°C to +8°C and +15°C to +25°C facilities with cleanroom-grade cam-lock PIR panels and redundant HVAC support.",
    image: "/Images/solutions/card-pharma.webp",
  },
  {
    title: "Seafood, Meat & Dairy Processing Cold Stores",
    text: "Integrated blast freezers (-35°C), glazing/processing halls, and deep-freeze pallet chambers with hygienic stainless-steel coving and epoxy flooring.",
    image: "/Images/solutions/card-seafood.webp",
  },
  {
    title: "Agri & Controlled Atmosphere (CA) Cold Stores",
    text: "Gas-tight cold rooms for fruits, vegetables, and seeds with humidity and CO₂/O₂ control readiness.",
    image: "/Images/solutions/card-agri.webp",
  },
];

export default function SolutionsSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#f9f6f7]`}>
      {/* One responsive layout: phone stack, tablet 2-col grid, desktop Figma frame
          (1920 wide) scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="relative overflow-hidden bg-[#f2f2f2] px-5 pt-8 pb-[30px] sm:px-10 sm:pt-12 sm:pb-14 lg:flex lg:h-[calc(var(--h)*1px)] lg:w-[1920px] lg:flex-col lg:items-center lg:gap-[50px] lg:bg-[#f2f6f9] lg:px-[80px] lg:py-[60px]"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          {/* desktop: soft grey glow behind the heading */}
          <Image
            src={assetUrl("/Images/solutions/glow.svg")}
            alt=""
            width={1665}
            height={1099}
            className="pointer-events-none absolute top-[-288px] left-[100px] hidden max-w-none lg:block"
          />

          <div className="relative mx-auto flex max-w-[350px] flex-col items-center gap-[16px] sm:max-w-none lg:mx-0 lg:w-full lg:max-w-none lg:gap-[50px]">
            <div className="flex w-full flex-col items-center gap-[10px] text-center">
              <h2 className="w-full text-[28px] leading-[32px] font-bold text-[#0f172a] sm:text-[44px] sm:leading-[52px] lg:w-[1502px] lg:text-[66px] lg:leading-[73.333px]">
                {EYEBROW}
              </h2>
              <p className="w-full text-[14px] leading-[20px] font-normal text-[#464748] sm:text-[18px] sm:leading-[24px] lg:w-[1219px] lg:text-[24px] lg:leading-[20px] lg:text-[#64748b]">
                {SUBTITLE}
              </p>
            </div>

            <ul className="flex w-full flex-col items-center gap-[16px] sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-6 lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-[24px]">
              {SOLUTIONS.map((item) => (
                <li
                  key={item.title}
                  className="flex w-full flex-col gap-[10px] overflow-clip rounded-[20px] bg-white px-[20px] py-[16px] shadow-[5px_5px_4.3px_-4px_rgba(0,0,0,0.2)] lg:h-[420px] lg:w-[422px] lg:shrink-0 lg:items-center lg:gap-[20px] lg:p-[20px]"
                >
                  <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-t-[12px] sm:h-[196px] lg:w-[384px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={`(min-width: 1024px) 20vw, (min-width: 640px) 40vw, ${item.mobileSize ?? "50vw"}`}
                      className="object-cover lg:[object-position:var(--pos,center)]"
                      style={
                        item.desktopPosition
                          ? ({ "--pos": item.desktopPosition } as CSSProperties)
                          : undefined
                      }
                    />
                  </div>
                  <div className="flex w-full flex-col gap-[6px] lg:gap-[10px]">
                    <h3 className="text-[18px] leading-[20px] font-semibold text-black lg:text-[24px] lg:leading-[28px]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[20px] font-normal text-[#6e6e6e] lg:text-[18px] lg:leading-[24px]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
