import Image from "next/image";
import type { CSSProperties } from "react";
import { manrope, spaceGrotesk } from "@/lib/fonts";
import {
  Building2,
  CalendarCheck,
  Gauge,
  Snowflake,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import ScaledCanvas from "@/components/ScaledCanvas";
import { assetUrl } from "@/lib/assetPrefix";

// Figma frame: 1920 x 620, content 1760px wide centred (80px each side)
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 640;

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Absolute left offset / width of the column in the desktop Figma frame */
  left: number;
  width: number;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Temperature Study",
    description: "Define storage temperature, product load, daily movement and pull-down requirements.",
    icon: Thermometer,
    left: -1,
    width: 270,
  },
  {
    number: "02",
    title: "Heat Load Engineering",
    description: "Calculate refrigeration capacity on product heat, door openings and operating loads.",
    icon: Gauge,
    left: 298,
    width: 272,
  },
  {
    number: "03",
    title: "Cold Storage Design",
    description: "Engineer PEB structure, insulated flooring and PUF/PIR panels as one cold storage building.",
    icon: Building2,
    left: 598,
    width: 268,
  },
  {
    number: "04",
    title: "Refrigeration Integration",
    description: "Compressors, evaporators, piping, electrical systems and controls are integrated with the building.",
    icon: Snowflake,
    left: 894,
    width: 271,
  },
  {
    number: "05",
    title: "Cold Room Installation",
    description: "Install insulated panels, cold-room doors, flooring and refrigeration equipment on-site.",
    icon: Wrench,
    left: 1193,
    width: 271,
  },
  {
    number: "06",
    title: "Pull-Down & Delivery",
    description: "Temperature pull-down, controls, alarms and refrigeration performance are validated before handover.",
    icon: CalendarCheck,
    left: 1492,
    width: 270,
  },
];

const MASK = `url("${assetUrl("/Images/process/bg-mask.webp")}")`;

export default function ProcessSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* One responsive layout: dark vertical timeline below 1024px; on desktop the
          exact Figma frame (light, horizontal), scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="relative overflow-hidden bg-[#212121] px-5 pt-8 pb-10 sm:px-10 sm:py-14 lg:h-[calc(var(--h)*1px)] lg:w-[1920px] lg:bg-[#E0E0E0] lg:p-0"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          {/* phone/tablet: faded warehouse photo + dark radial overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-[654px] w-full opacity-25 lg:hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-75">
              <div className="absolute top-[0.06%] left-[-124.17%] h-[69.29%] w-[348.57%]">
                <Image
                  src="/Images/process/mobile-bg.webp"
                  alt=""
                  fill
                  sizes="1400px"
                  className="max-w-none object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_2%,rgba(0,0,0,0)_0%,rgba(66,66,66,0.75)_30%,rgba(16,16,16,0.91)_55%,rgb(71,71,71)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-[#212121]" />
          </div>

          {/* desktop: warehouse photo, white gradient masked by the photo luminance */}
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                "linear-gradient(54.52deg, rgba(255, 255, 255, 0) 31.056%, rgb(255, 255, 255) 96.496%)",
              maskImage: MASK,
              maskMode: "luminance",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskImage: MASK,
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          <div className="relative mx-auto flex w-full max-w-[350px] flex-col gap-[40px] sm:max-w-[640px] lg:absolute lg:top-1/2 lg:left-1/2 lg:mx-0 lg:w-[1760px] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:gap-[50px]">
            <div className="flex w-full flex-col gap-[6px] lg:gap-[16px]">
              <h2 className="text-[28px] leading-[34px] font-bold text-white sm:text-[34px] sm:leading-[1.15] lg:text-[66px] lg:leading-[73.333px] lg:whitespace-nowrap lg:text-[#0F172A]">
                Our Turnkey{" "}
                <span className="text-[#ED1D23]">Cold Storage Construction</span>
              </h2>
              <p className="text-[14px] leading-[20px] font-normal text-[#A6A6A6] sm:text-[18px] lg:text-[24px] lg:text-[#64748B]">
                As a cold storage construction company, we follow a proven 6-step process to ensure on-time delivery.
              </p>
            </div>

            <div className="relative lg:h-[300px] lg:w-full">
              {/* desktop connector line */}
              <div className="absolute top-[47px] left-[72px] hidden h-[1.333px] w-[1430px] bg-[#C6C6C6] lg:block" />

              <ol className="flex w-full flex-col gap-[14px]">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <li
                      key={step.number}
                      className="relative flex items-start gap-[6px] lg:absolute lg:top-0 lg:left-[calc(var(--l)*1px)] lg:w-[calc(var(--w)*1px)] lg:flex-col lg:gap-[40px]"
                      style={{ "--l": step.left, "--w": step.width } as CSSProperties}
                    >
                      {/* phone/tablet: vertical connector to the next step marker */}
                      {index < STEPS.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute top-[14px] bottom-[-24px] left-[43px] w-px bg-[#4D4D4D] lg:hidden"
                        />
                      )}

                      {/* number: left column on phone/tablet, below the icon on desktop */}
                      <div className="relative order-1 h-[34px] w-[48px] shrink-0 lg:order-2 lg:mb-[-28px] lg:h-auto lg:w-auto">
                        <p
                          className={`${spaceGrotesk.className} text-[20px] leading-[30px] whitespace-nowrap text-[#A9ABB2] lg:text-[26px] lg:leading-[21.333px] lg:font-bold lg:text-[#ED1D23]`}
                        >
                          {step.number}
                        </p>
                        <span className="absolute top-[10px] left-[39.5px] size-[8px] rounded-full bg-[#ED1D23] lg:hidden" />
                        <span
                          aria-hidden
                          className="absolute top-[14px] left-[48px] h-px w-[19px] bg-[#4D4D4D] lg:hidden"
                        />
                      </div>

                      <div className="order-2 mt-[6px] ml-[10px] shrink-0 lg:relative lg:z-10 lg:order-1 lg:m-0 lg:flex lg:size-[90px] lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-solid lg:border-[#E4DFE0] lg:bg-[#F5F5F5] lg:drop-shadow-[4px_4px_7px_rgba(0,0,0,0.1)]">
                        <Icon
                          strokeWidth={2}
                          className="size-5 text-[#ED1D23] lg:size-10"
                        />
                      </div>

                      <div className="order-3 flex min-w-0 flex-1 flex-col gap-[2px] py-[6px] pr-[9px] pl-[10px] lg:w-full lg:flex-none lg:gap-[12px] lg:p-0">
                        <p className="text-[16px] leading-[normal] font-semibold tracking-[-0.3px] text-white lg:text-[21px] lg:leading-[24px] lg:font-bold lg:tracking-normal lg:text-[#080808]">
                          {step.title}
                        </p>
                        <p className="text-[12px] leading-[16px] font-normal text-[#949494] sm:text-[14px] sm:leading-[20px] lg:text-[18px] lg:leading-[22.667px] lg:text-[#64748B]">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
