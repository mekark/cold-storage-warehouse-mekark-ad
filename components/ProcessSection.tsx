import Image from "next/image";
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
  /** Absolute left offset / width of the column in the Figma frame */
  left: number;
  width: number;
  descriptionColor: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Temperature Study",
    description: "Define storage temperature, product load, daily movement and pull-down requirements.",
    icon: Thermometer,
    left: -1,
    width: 270,
    descriptionColor: "text-[#64748B]",
  },
  {
    number: "02",
    title: "Heat Load Engineering",
    description: "Calculate refrigeration capacity on product heat, door openings and operating loads.",
    icon: Gauge,
    left: 298,
    width: 272,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "03",
    title: "Cold Storage Design",
    description: "Engineer PEB structure, insulated flooring and PUF/PIR panels as one cold storage building.",
    icon: Building2,
    left: 598,
    width: 268,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "04",
    title: "Refrigeration Integration",
    description: "Compressors, evaporators, piping, electrical systems and controls are integrated with the building.",
    icon: Snowflake,
    left: 894,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "05",
    title: "Cold Room Installation",
    description: "Install insulated panels, cold-room doors, flooring and refrigeration equipment on-site.",
    icon: Wrench,
    left: 1193,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "06",
    title: "Pull-Down & Delivery",
    description: "Temperature pull-down, controls, alarms and refrigeration performance are validated before handover.",
    icon: CalendarCheck,
    left: 1492,
    width: 270,
    descriptionColor: "text-[#9A9A9A]",
  },
];

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative z-10 flex size-[90px] shrink-0 items-center justify-center rounded-full border border-solid border-[#E4DFE0] bg-[#F5F5F5] drop-shadow-[4px_4px_7px_rgba(0,0,0,0.1)]">
      <Icon size={40} strokeWidth={2} className="text-[#ED1D23]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col gap-[10px] min-[1024px]:gap-[16px]">
      <h2 className="text-[34px] leading-[1.15] font-bold text-[#0F172A] min-[1024px]:text-[66px] min-[1024px]:whitespace-nowrap min-[1024px]:leading-[73.333px]">
        Our Turnkey{" "}
        <span className="text-[#ED1D23]">Cold Storage Construction</span>
      </h2>
      <p className="text-[18px] leading-[20px] font-normal text-[#64748B] min-[1024px]:text-[24px]">
        As a cold storage construction company, we follow a proven 6-step process to ensure on-time delivery.
      </p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-[#E0E0E0]"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* warehouse photo: white gradient masked by the photo's luminance */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(54.52deg, rgba(255, 255, 255, 0) 31.056%, rgb(255, 255, 255) 96.496%)",
                maskImage: `url("${assetUrl("/Images/process/bg-mask.webp")}")`,
                maskMode: "luminance",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskImage: `url("${assetUrl("/Images/process/bg-mask.webp")}")`,
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
              }}
            />

            <div className="absolute top-1/2 left-1/2 flex w-[1760px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[50px]">
              <Heading />

              <div className="relative h-[300px] w-full">
                {/* connector line */}
                <div className="absolute top-[47px] left-[72px] h-[1.333px] w-[1430px] bg-[#C6C6C6]" />

                {STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="absolute top-0 flex flex-col items-start gap-[40px]"
                    style={{ left: step.left, width: step.width }}
                  >
                    <StepIcon icon={step.icon} />

                    <div className="flex w-full flex-col items-start gap-[12px]">
                      <p
                        className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                      >
                        {step.number}
                      </p>
                      <p className="w-full text-[21px] leading-[24px] font-bold text-[#080808]">
                        {step.title}
                      </p>
                      <p className="text-[18px] leading-[22.667px] font-normal text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading />

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.number} className="flex flex-col items-start gap-6">
              <StepIcon icon={step.icon} />
              <div className="flex flex-col gap-3">
                <p
                  className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                >
                  {step.number}
                </p>
                <p className="text-[21px] leading-[normal] font-bold text-[#080808]">
                  {step.title}
                </p>
                <p
                  className={`text-[18px] leading-[24px] font-normal ${step.descriptionColor}`}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* MOBILE (below 640px): dark vertical timeline */}
      <div className="relative overflow-hidden bg-[#212121] px-5 pt-8 pb-10 sm:hidden">
        {/* faded warehouse photo + dark radial overlay (Figma mobile frame) */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-[654px] w-full opacity-25">
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

        <div className="relative mx-auto flex w-full max-w-[350px] flex-col gap-[40px]">
          <div className="flex w-full flex-col gap-[6px]">
            <h2 className="text-[28px] leading-[34px] font-bold text-white">
              Our Turnkey{" "}
              <span className="text-[#ED1D23]">Cold Storage Construction</span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#A6A6A6]">
              As a cold storage construction company, we follow a proven 6-step process to ensure on-time delivery.
            </p>
          </div>

          <ol className="flex w-full flex-col gap-[14px]">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.number} className="relative flex items-start gap-[6px]">
                  {/* vertical connector to the next step's marker */}
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-[14px] bottom-[-24px] left-[43px] w-px bg-[#4D4D4D]"
                    />
                  )}
                  <div className="relative h-[34px] w-[48px] shrink-0">
                    <p
                      className={`${spaceGrotesk.className} text-[20px] leading-[30px] whitespace-nowrap text-[#A9ABB2]`}
                    >
                      {step.number}
                    </p>
                    <span className="absolute top-[10px] left-[39.5px] size-[8px] rounded-full bg-[#ED1D23]" />
                    <span
                      aria-hidden
                      className="absolute top-[14px] left-[48px] h-px w-[19px] bg-[#4D4D4D]"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 items-start gap-[10px] py-[6px] pr-[9px] pl-[10px]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="shrink-0 text-[#ED1D23]"
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                      <p className="text-[16px] leading-[normal] font-semibold tracking-[-0.3px] text-white">
                        {step.title}
                      </p>
                      <p className="text-[12px] leading-[16px] font-normal text-[#949494]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
