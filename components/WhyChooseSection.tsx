import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1000;

const HEADING_BLACK = "Why Cold Chain Leaders Choose Mekark as Their";
const HEADING_RED = "Cold Storage Construction Contractor";
const SUBTEXT =
  "In cold storage warehouse construction, even a 2% thermal bridge or vapor leak can skyrocket your electricity bills by lakhs of rupees every month and cause floor buckling. We engineer airtight, energy-efficient thermal facilities.";

const PILLARS = [
  {
    title: "Zero-Thermal-Bridge PEB & Panel Integration",
    text: 'As a specialized cold storage building contractor, we design steel structures and suspended ceiling T-grid systems where insulated PUF/PIR panels form a continuous, airtight "box-within-a-box" envelope.',
  },
  {
    title: "Sub-Zero Floor Insulation & Anti-Frost Heave Engineering",
    text: "Sub-zero chambers (-20°C) freeze the soil underneath, cracking the floor. We install heavy-duty polythene/bituminous vapor barriers, double-layer staggered XPS/PUF slabs, and under-floor heating systems before pouring the reinforced concrete floor.",
  },
  {
    title: "Structural Support for Heavy Evaporators & Piping",
    text: "Refrigeration units and insulated pipelines impose massive point loads. We pre-engineer our PEB rafters and service catwalks to safely carry rooftop/ceiling-hung cooling coils, ammonia valves, and maintenance walkways.",
  },
  {
    title: "Sealed Temperature-Controlled Loading Docks & Anterooms",
    text: "Prevent warm air infiltration during loading. Our cold chain facility construction features dehumidified anterooms (pre-cooling staging zones), inflatable dock shelters, vertical-lift insulated doors, and high-speed rapid roll doors.",
  },
  {
    title: "Multi-Commodity & Multi-Chamber Zoning",
    text: "Whether you need a single deep-freeze hub or a 10-chamber multi-temperature facility combining blast freezers, chiller rooms, and ripening chambers, we customize internal partition walls for independent thermal control.",
  },
  {
    title: "Single-Point Turnkey Execution",
    text: "From civil foundations and PEB outer shells to insulated panel erection, hermetic sliding doors, and refrigeration vendor coordination—we deliver your refrigerated cold storage ready for commissioning.",
  },
];

const GHOST_NUMBER_STYLE = {
  backgroundImage:
    "linear-gradient(141deg, rgba(225, 225, 225, 0) 1.2413%, rgb(225, 225, 225) 85.105%)",
};

function Pillar({ index, desktop }: { index: number; desktop?: boolean }) {
  const item = PILLARS[index];
  return (
    <li
      className={`relative flex items-start ${desktop ? "gap-[14px]" : "gap-[12px]"}`}
    >
      <span
        style={GHOST_NUMBER_STYLE}
        className={`shrink-0 bg-clip-text font-extrabold tracking-[-2.64px] text-transparent ${
          desktop
            ? "w-[72px] text-[60px] leading-[66px]"
            : "w-[52px] text-[40px] leading-[44px]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="w-[2px] self-stretch shrink-0 bg-[#ED1D23]" />
      <div className="flex min-w-0 flex-1 flex-col gap-[10px]">
        <h3
          className={`font-semibold text-black ${
            desktop ? "text-[22px] leading-[27px]" : "text-[18px] leading-[24px]"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`font-normal text-[#6e6e6e] ${
            desktop ? "text-[15px] leading-[23px]" : "text-[14px] leading-[22px]"
          }`}
        >
          {item.text}
        </p>
      </div>
    </li>
  );
}

function Heading({ desktop }: { desktop?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[10px] text-center font-bold">
      <h2 className="flex flex-col items-center gap-[6px]">
        <span
          className={`text-[#030303] ${
            desktop
              ? "text-[54px] leading-[65px]"
              : "text-[26px] leading-[32px] sm:text-[40px] sm:leading-[48px]"
          }`}
        >
          {HEADING_BLACK}
        </span>
        <span
          className={`text-[#ed1d23] ${
            desktop
              ? "text-[40px] leading-[48px]"
              : "text-[22px] leading-[28px] sm:text-[30px] sm:leading-[38px]"
          }`}
        >
          {HEADING_RED}
        </span>
      </h2>
      <p
        className={`font-normal text-[#6e6e6e] ${
          desktop
            ? "mt-[10px] w-[1100px] text-[20px] leading-[30px]"
            : "mt-[6px] max-w-[760px] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
        }`}
      >
        {SUBTEXT}
      </p>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: Figma frame (1920 wide), scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-white"
            style={{ height: DESIGN_HEIGHT }}
          >
            <div className="absolute top-[62px] left-[80px] w-[1760px]">
              <Heading desktop />
            </div>

            {/* factory image sits behind the text columns */}
            <div className="absolute top-[376px] left-[470px] h-[563px] w-[1000px]">
              <Image
                src="/Images/why2/factory.webp"
                alt="Mekark cold storage warehouse building"
                fill
                sizes="1000px"
                className="object-cover"
              />
            </div>

            <ul className="absolute top-[370px] left-[80px] flex w-[480px] flex-col gap-[30px]">
              {[0, 1, 2].map((i) => (
                <Pillar key={i} index={i} desktop />
              ))}
            </ul>
            <ul className="absolute top-[370px] left-[1380px] flex w-[460px] flex-col gap-[30px]">
              {[3, 4, 5].map((i) => (
                <Pillar key={i} index={i} desktop />
              ))}
            </ul>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET + MOBILE (below 1024px) */}
      <div className="px-5 py-10 sm:px-10 sm:py-14 min-[1024px]:hidden">
        <Heading />
        <div className="relative mt-8 aspect-[1672/941] w-full overflow-hidden">
          <Image
            src="/Images/why2/factory.webp"
            alt="Mekark cold storage warehouse building"
            fill
            sizes="(max-width: 1023px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <ol className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PILLARS.map((_, i) => (
            <Pillar key={i} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
