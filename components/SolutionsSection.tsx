import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { assetUrl } from "@/lib/assetPrefix";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 648;

const EYEBROW = "Specialized Cold Chain Solutions We Build";

// Icon SVGs keep their Figma root size and offset inside a 40px box
const ICONS = {
  warehouse: { src: "/Images/solutions/warehouse.svg", width: 36.0833, height: 34.4173, top: 1.96, left: 1.96 },
  arrows: { src: "/Images/solutions/arrow-left-right.svg", width: 40, height: 40, top: 0, left: 0 },
  building: { src: "/Images/solutions/building-complex.svg", width: 36.0833, height: 32.75, top: 3.63, left: 1.96 },
};

const SOLUTIONS: {
  title: string;
  text: string;
  icon: keyof typeof ICONS;
  // Desktop text widths from Figma, so titles wrap like the design
  width: number;
  titleWidth: number;
  textWidth: number;
}[] = [
  {
    title: "3PL Multi-Temperature Cold Chain Hubs",
    text: "High-bay mobile/pallet racking cold stores with 12m+ height, insulated dock pods, and multi-chamber layouts for frozen and chilled SKUs.",
    icon: "warehouse",
    width: 422,
    titleWidth: 365,
    textWidth: 389,
  },
  {
    title: "Pharmaceutical & Life Sciences Cold Rooms",
    text: "WHO-GMP compliant +2°C to +8°C and +15°C to +25°C facilities with cleanroom-grade cam-lock PIR panels and redundant HVAC support.",
    icon: "arrows",
    width: 422,
    titleWidth: 325,
    textWidth: 381,
  },
  {
    title: "Seafood, Meat & Dairy Processing Cold Stores",
    text: "Integrated blast freezers (-35°C), glazing/processing halls, and deep-freeze pallet chambers with hygienic stainless-steel coving and epoxy flooring.",
    icon: "building",
    width: 423,
    titleWidth: 300,
    textWidth: 390,
  },
  {
    title: "Agri & Controlled Atmosphere (CA) Cold Stores",
    text: "Gas-tight cold rooms for fruits, vegetables, and seeds with humidity and CO₂/O₂ control readiness.",
    icon: "building",
    width: 421,
    titleWidth: 386,
    textWidth: 390,
  },
];

// Vertical divider that fades in from the top of each card
const DIVIDER_STYLE = {
  backgroundImage: "linear-gradient(to bottom, rgba(181, 181, 181, 0), rgb(181, 181, 181))",
};

function Icon({ name, size = 40 }: { name: keyof typeof ICONS; size?: number }) {
  const icon = ICONS[name];
  const k = size / 40;
  return (
    <span className="relative block shrink-0" style={{ width: size, height: size }}>
      <Image
        src={assetUrl(icon.src)}
        alt=""
        width={icon.width}
        height={icon.height}
        className="absolute max-w-none"
        style={{
          top: icon.top * k,
          left: icon.left * k,
          width: icon.width * k,
          height: icon.height * k,
        }}
      />
    </span>
  );
}

function Heading({ desktop }: { desktop?: boolean }) {
  return (
    <div className={`flex flex-col font-bold ${desktop ? "gap-[10px]" : "gap-[8px]"}`}>
      <p
        className={`text-[#ed1d23] uppercase ${
          desktop
            ? "text-[16px] leading-[21.304px] tracking-[1.5978px]"
            : "text-[12px] leading-[16px] tracking-[1.5978px] sm:text-[14px] sm:leading-[20px]"
        }`}
      >
        {desktop ? (
          EYEBROW
        ) : (
          <>
            Specialized Cold Chain Solutions <br className="max-sm:block hidden" />
            We Build
          </>
        )}
      </p>
      <h2
        className={`text-[#0f172a] ${
          desktop
            ? "text-[66px] leading-[73.333px]"
            : "text-[min(28px,calc((100vw-40px)/12.6))] leading-[1.15] font-extrabold sm:text-[44px] sm:leading-[52px]"
        }`}
      >
        Industry-Specific{" "}
        <br className={desktop ? "hidden" : "max-sm:block hidden"} />
        <span className="text-[#ed1d23]">Temperature Controlled</span>{" "}
        <br className={desktop ? "hidden" : "max-sm:block hidden"} />
        Warehouse Construction
      </h2>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#f9f6f7]`}>
      {/* DESKTOP: Figma frame (1920 wide), scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-[#f9f6f7]"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* warehouse photo, mirrored so its faded edge runs into the heading */}
            <div className="absolute top-[-168px] left-0 h-[652px] w-[1216px] -scale-x-100">
              <Image
                src="/Images/solutions/solutions-bg.webp"
                alt="Cold storage warehouse with loading docks"
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute top-[72px] left-[977px] w-[863px]">
              <Heading desktop />
            </div>

            <ul className="absolute top-[378px] left-[80px] flex gap-[24px]">
              {SOLUTIONS.map((item) => (
                <li
                  key={item.title}
                  className="relative flex h-[210px] shrink-0 flex-col gap-[10px]"
                  style={{ width: item.width }}
                >
                  <Icon name={item.icon} />
                  <div className="flex flex-col gap-[12px]">
                    <h3
                      className="text-[24px] leading-[26px] font-semibold text-black"
                      style={{ width: item.titleWidth }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[18px] leading-[24px] font-normal text-[#6e6e6e]"
                      style={{ width: item.textWidth }}
                    >
                      {item.text}
                    </p>
                  </div>
                  <span
                    style={DIVIDER_STYLE}
                    className="absolute top-0 right-0 h-full w-px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET + MOBILE (below 1024px) */}
      <div className="relative overflow-hidden pb-[30px] sm:pb-14 min-[1024px]:hidden">
        {/* Mobile (Figma 390 frame): photo bleeds past the right edge and fades under the heading */}
        <div className="absolute top-[-22.56vw] left-0 h-[96.92vw] w-[178.97vw] -scale-x-100 sm:relative sm:top-0 sm:aspect-[1216/652] sm:h-auto sm:w-full">
          <Image
            src="/Images/solutions/solutions-bg.webp"
            alt="Cold storage warehouse with loading docks"
            fill
            sizes="(min-width: 640px) 100vw, 179vw"
            className="object-cover"
          />
        </div>
        <div className="relative px-5 pt-[55.13vw] sm:-mt-10 sm:px-10 sm:pt-0">
          <Heading />
          <ul className="mt-[20px] grid grid-cols-1 gap-y-[16px] sm:mt-8 sm:grid-cols-2 sm:gap-x-10">
            {SOLUTIONS.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-[12px] border-b border-solid border-[#E2E2E2] pb-[16px] first:pt-[16px] last:border-b-0 sm:first:pt-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
              >
                <Icon name={item.icon} size={24} />
                <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                  <h3 className="text-[20px] leading-[24px] font-bold text-black">
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
