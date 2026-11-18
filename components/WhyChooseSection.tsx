import Image from "next/image";
import type { CSSProperties } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1000;

const HEADING_BLACK = "Why Cold Chain Leaders Choose Mekark as Their";
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

export default function WhyChooseSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* One responsive layout: phone list, tablet 2-col, desktop Figma frame
          (1920 wide) scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="bg-white px-5 py-8 sm:px-10 sm:py-14 lg:relative lg:h-[calc(var(--h)*1px)] lg:w-[1920px] lg:overflow-hidden lg:p-0"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          <div className="flex flex-col items-start gap-[10px] text-left font-bold lg:absolute lg:top-[62px] lg:left-[80px] lg:w-[1760px] lg:items-center lg:text-center">
            <h2 className="flex flex-col items-start gap-[6px] lg:items-center">
              <span className="text-[28px] leading-[34px] text-[#030303] sm:text-[40px] sm:leading-[48px] lg:text-[54px] lg:leading-[65px]">
                {HEADING_BLACK}
              </span>
              <span className="text-[26px] leading-[30px] text-[#ed1d23] max-sm:whitespace-nowrap max-sm:tracking-[min(0px,calc((100vw-40px-342px)/25))] sm:text-[30px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px]">
                Cold Storage Construction <br className="hidden max-sm:block" />
                Contractor
              </span>
            </h2>
            <p className="mt-[6px] max-w-[760px] text-[14px] leading-[22px] font-normal text-[#6e6e6e] sm:text-[16px] sm:leading-[26px] lg:mt-[10px] lg:w-[1100px] lg:max-w-none lg:text-[20px] lg:leading-[30px]">
              {SUBTEXT}
            </p>
          </div>

          {/* factory image: full-bleed under the heading on phone/tablet, behind the text columns on desktop */}
          <div className="relative -mx-5 mt-4 aspect-[1672/941] overflow-hidden sm:-mx-10 lg:absolute lg:top-[376px] lg:left-[470px] lg:m-0 lg:aspect-auto lg:h-[563px] lg:w-[1000px]">
            <Image
              src="/Images/why2/cold-storage-v2.webp"
              alt="Mekark cold storage warehouse building"
              fill
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover"
            />
          </div>

          <ol className="mt-2 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:absolute lg:top-[370px] lg:left-[80px] lg:mt-0 lg:w-[1760px] lg:grid-flow-col lg:grid-cols-[480px_460px] lg:grid-rows-3 lg:items-start lg:gap-x-[820px] lg:gap-y-[30px]">
            {PILLARS.map((item, index) => (
              <li
                key={item.title}
                className="flex items-start gap-[5px] border-b border-solid border-[#EDEDED] py-[12px] last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0 lg:gap-[14px] lg:border-b-0 lg:py-0"
              >
                <span
                  style={GHOST_NUMBER_STYLE}
                  className="w-[40px] shrink-0 bg-clip-text text-[28px] leading-[32px] font-extrabold text-transparent lg:w-[72px] lg:text-[60px] lg:leading-[66px] lg:tracking-[-2.64px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-px shrink-0 self-stretch bg-[#ED1D23] lg:w-[2px]" />
                <div className="flex min-w-0 flex-1 flex-col gap-[6px] pl-[10px] lg:gap-[10px] lg:pl-0">
                  <h3 className="text-[18px] leading-[22px] font-semibold text-[#030303] lg:text-[22px] lg:leading-[27px] lg:text-black">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#6e6e6e] lg:text-[15px] lg:leading-[23px]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ScaledCanvas>
    </section>
  );
}
