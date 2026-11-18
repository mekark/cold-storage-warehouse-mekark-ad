import Image from "next/image";
import type { CSSProperties } from "react";
import { manrope } from "@/lib/fonts";
import { assetUrl } from "@/lib/assetPrefix";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 671;

const EYEBROW = "Technical Specifications";
const HEADING = "Cold Chain Engineering Specifications";

type Spec = {
  label: string;
  /** Headline figure of the spec */
  value: string;
  /** Rest of the spec */
  caption: string;
  icon: { src: string; width: number; height: number };
  /** Red cards sit on the diagonal of the 2 x 2 grid in the Figma frame */
  accent: boolean;
  /** Phone-only stacking order; from 640px up the cards follow DOM order */
  order: string;
};

const SPECS: Spec[] = [
  {
    label: "Temperature Range",
    value: "+15°C to -25°C",
    caption: "(Ambient/Pharma to Deep Freeze) & -35°C (Blast Freezing)",
    icon: { src: "/Images/specs/tech-thermometer.svg", width: 46.3333, height: 46.3422 },
    accent: true,
    order: "order-1 sm:order-none",
  },
  {
    label: "Insulation Panels",
    value: "80mm to 200mm",
    caption: "FM-Approved PIR / PUF Sandwich Panels, 40±2 kg/m³ density",
    icon: { src: "/Images/specs/tech-layers.svg", width: 46.3692, height: 46.33 },
    accent: false,
    order: "order-2 sm:order-none",
  },
  {
    label: "Floor Insulation",
    value: "High-Density XPS/PUF",
    caption: "Multi-layer bituthene vapor barrier + sub-floor frost-heave prevention",
    icon: { src: "/Images/specs/tech-building.svg", width: 46.0833, height: 41.7504 },
    accent: false,
    order: "order-4 sm:order-none",
  },
  {
    label: "Compliance Standards",
    value: "FSSAI, HACCP, WHO-GMP",
    caption: "(Pharma), ISO & National Cold Chain Guidelines",
    icon: { src: "/Images/specs/tech-shield.svg", width: 37.6667, height: 46.3406 },
    accent: true,
    order: "order-3 sm:order-none",
  },
];

export default function SpecsBarSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* One responsive layout: phone list, tablet 2-col grid, desktop Figma frame
          (1920 wide) scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="relative overflow-hidden bg-white lg:w-[1920px]"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          {/* warehouse photo, washed out behind the heading */}
          <div className="pointer-events-none absolute inset-0 lg:top-0 lg:right-auto lg:bottom-auto lg:left-[-5.01%] lg:h-[129.66%] lg:w-[113.31%]">
            <Image
              src="/Images/specs/tech-bg.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              backgroundImage:
                "linear-gradient(147.78deg, #fff 25.886%, rgba(255,255,255,0) 72.444%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                "linear-gradient(-85.56deg, rgba(255,255,255,0) 20.733%, rgba(255,255,255,0.6) 54.248%)",
            }}
          />

          <div className="relative flex flex-col gap-[20px] px-[20px] py-[32px] sm:gap-8 sm:px-10 sm:py-14 lg:block lg:h-[calc(var(--h)*1px)] lg:p-0">
            <div className="flex flex-col items-start gap-[10px] font-bold lg:absolute lg:top-[118px] lg:left-[75px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={assetUrl("/Images/specs/tech-line.svg")}
                  alt=""
                  width={38}
                  height={2}
                  className="block h-[2px] w-[38px] max-w-none"
                />
                <p className="text-[12px] leading-[16px] tracking-[1.6px] text-[#ED1D23] uppercase sm:text-[16px] sm:leading-[20px] lg:text-[20px] lg:leading-[21.304px] lg:tracking-[1.5978px]">
                  {EYEBROW}
                </p>
              </div>
              <h2 className="text-[28px] leading-[32px] text-[#0F172A] sm:text-[40px] sm:leading-[48px] lg:w-[755px] lg:text-[50px] lg:leading-[60px]">
                {HEADING}
              </h2>
            </div>

            <ul className="flex flex-col gap-[12px] sm:grid sm:grid-cols-2 sm:gap-[16px] lg:absolute lg:top-[123px] lg:left-[calc(41.67%+91px)] lg:grid-cols-[400px_400px] lg:gap-[24px] lg:gap-y-[30px]">
              {SPECS.map((spec) => (
                <li
                  key={spec.label}
                  className={`flex items-start gap-[16px] rounded-[16px] px-[20px] ${spec.order} sm:flex-col sm:gap-[10px] sm:rounded-[20px] lg:w-[400px] lg:shrink-0 ${
                    spec.accent
                      ? "bg-[#ED1D23] py-[20px] sm:py-[32px]"
                      : "bg-white py-[10px] sm:p-[20px] sm:shadow-[0_4px_16px_rgba(15,23,42,0.08)] lg:shadow-none"
                  }`}
                >
                  <span className="flex size-[28px] shrink-0 items-center justify-center sm:size-[52px]">
                    <Image
                      src={assetUrl(spec.icon.src)}
                      alt=""
                      width={spec.icon.width}
                      height={spec.icon.height}
                      className="block max-w-none scale-[0.54] sm:scale-100"
                    />
                  </span>
                  <div className="flex min-w-0 flex-col gap-[8px] sm:gap-[12px]">
                    <h3
                      className={`text-[20px] leading-[24px] font-bold sm:text-[24px] sm:leading-[26px] ${
                        spec.accent ? "text-white" : "text-[#ED1D23]"
                      }`}
                    >
                      {spec.label}
                    </h3>
                    <p
                      className={`text-[14px] leading-[20px] font-normal sm:text-[18px] sm:leading-[24px] sm:font-medium lg:w-[360px] ${
                        spec.accent ? "text-[#F8F8F8]" : "text-[#6E6E6E]"
                      }`}
                    >
                      {spec.value} {spec.caption}
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
