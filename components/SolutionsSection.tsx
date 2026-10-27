import Image from "next/image";
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

// Red light beams in the top corners: [bounding box, rotated gradient bar]
const BEAMS = [
  {
    box: { left: 1469.33, top: -319.16, width: 700.721, height: 541.879 },
    bar: { width: 628.544, rotate: 24.31, from: "#c10300" },
  },
  {
    box: { left: -131.04, top: 147.13, width: 407.789, height: 373.063 },
    bar: { width: 354.707, rotate: 11.08, from: "rgba(193,3,0,0.82)" },
  },
];

/**
 * Red-to-transparent beam gradient as Figma paints it: Figma blends the colour
 * toward #f2f6f9 while fading, so the middle turns soft pink. A plain CSS
 * gradient stays pure red until it vanishes, so the stops are spelled out.
 */
function beamGradient(alpha: number) {
  const stops = [0, 0.25, 0.5, 0.75, 1].map((t) => {
    const r = 193 + (242 - 193) * t;
    const g = 3 + (246 - 3) * t;
    const b = 249 * t;
    return `rgba(${r},${g},${b},${+(alpha * (1 - t)).toFixed(3)}) ${t * 100}%`;
  });
  return `linear-gradient(to bottom, ${stops.join(", ")})`;
}

export default function SolutionsSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#f9f6f7]`}>
      {/* DESKTOP: Figma frame (1920 wide), scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative flex w-[1920px] flex-col items-center gap-[50px] overflow-hidden bg-[#f2f6f9] px-[80px] py-[60px]"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* soft grey glow behind the heading */}
            <Image
              src={assetUrl("/Images/solutions/glow.svg")}
              alt=""
              width={1665}
              height={1099}
              className="pointer-events-none absolute top-[-288px] left-[100px] max-w-none"
            />

            {BEAMS.map(({ box, bar }) => (
              <div
                key={box.left}
                className="pointer-events-none absolute flex items-center justify-center"
                style={box}
              >
                <div
                  className="h-[310.711px] flex-none"
                  style={{
                    width: bar.width,
                    transform: `rotate(${bar.rotate}deg)`,
                    backgroundImage: `linear-gradient(to bottom, ${bar.from}, rgba(242,246,249,0))`,
                  }}
                />
              </div>
            ))}

            <div className="relative flex flex-col items-center gap-[10px] text-center">
              <h2 className="w-[1502px] text-[66px] leading-[73.333px] font-bold text-[#0f172a]">
                {EYEBROW}
              </h2>
              <p className="w-[1219px] text-[24px] leading-[20px] font-normal text-[#64748b]">
                {SUBTITLE}
              </p>
            </div>

            <ul className="relative flex w-full items-start justify-center gap-[24px]">
              {SOLUTIONS.map((item) => (
                <li
                  key={item.title}
                  className="flex h-[420px] w-[422px] shrink-0 flex-col items-center gap-[20px] overflow-clip rounded-[20px] bg-white p-[20px] shadow-[5px_5px_4.3px_-4px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative h-[196px] w-[384px] shrink-0 overflow-hidden rounded-t-[12px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="20vw"
                      className="object-cover"
                      style={{ objectPosition: item.desktopPosition }}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-[10px]">
                    <h3 className="text-[24px] leading-[28px] font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-[18px] leading-[24px] font-normal text-[#6e6e6e]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET + MOBILE (below 1024px) */}
      <div className="relative overflow-hidden bg-[#f2f2f2] px-5 pt-8 pb-[30px] sm:px-10 sm:pt-12 sm:pb-14 min-[1024px]:hidden">
        {/* red light beam from the left edge */}
        <div className="pointer-events-none absolute top-[108px] left-[-270.7px] flex h-[294.5px] w-[457.9px] items-center justify-center">
          <div
            className="h-[235.7px] w-[428.6px] flex-none rotate-[8.21deg]"
            style={{
              backgroundImage: beamGradient(0.82),
            }}
          />
        </div>

        {/* red light beam from the top right corner (Figma: 240x120 bar rotated in a 268x208 box at x220.6, y-90 of the 390 frame) */}
        <div className="pointer-events-none absolute top-[-90px] right-[-98.73px] flex h-[208.147px] w-[268.119px] items-center justify-center">
          <div
            className="h-[120px] w-[240px] flex-none rotate-[24.31deg]"
            style={{
              backgroundImage: beamGradient(1),
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-[350px] flex-col items-center gap-[16px] sm:max-w-none">
          <div className="flex w-full flex-col items-center gap-[10px] text-center">
            <h2 className="w-full text-[28px] leading-[32px] font-bold text-[#0f172a] sm:text-[44px] sm:leading-[52px]">
              {EYEBROW}
            </h2>
            <p className="w-full text-[14px] leading-[20px] font-normal text-[#464748] sm:text-[18px] sm:leading-[24px]">
              {SUBTITLE}
            </p>
          </div>
          <ul className="flex w-full flex-col items-center gap-[16px] sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-6">
            {SOLUTIONS.map((item) => (
              <li
                key={item.title}
                className="flex w-full flex-col gap-[10px] overflow-clip rounded-[20px] bg-white px-[20px] py-[16px] shadow-[5px_5px_4.3px_-4px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-t-[12px] sm:h-[196px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={`(min-width: 640px) 40vw, ${item.mobileSize ?? "50vw"}`}
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <h3 className="text-[18px] leading-[20px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#6e6e6e]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
