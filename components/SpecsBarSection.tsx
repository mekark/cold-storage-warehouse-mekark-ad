import Image from "next/image";
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
};

const SPECS: Spec[] = [
  {
    label: "Temperature Range",
    value: "+15°C to -25°C",
    caption: "(Ambient/Pharma to Deep Freeze) & -35°C (Blast Freezing)",
    icon: { src: "/Images/specs/tech-thermometer.svg", width: 46.3333, height: 46.3422 },
    accent: true,
  },
  {
    label: "Insulation Panels",
    value: "80mm to 200mm",
    caption: "FM-Approved PIR / PUF Sandwich Panels, 40±2 kg/m³ density",
    icon: { src: "/Images/specs/tech-layers.svg", width: 46.3692, height: 46.33 },
    accent: false,
  },
  {
    label: "Floor Insulation",
    value: "High-Density XPS/PUF",
    caption: "Multi-layer bituthene vapor barrier + sub-floor frost-heave prevention",
    icon: { src: "/Images/specs/tech-building.svg", width: 46.0833, height: 41.7504 },
    accent: false,
  },
  {
    label: "Compliance Standards",
    value: "FSSAI, HACCP, WHO-GMP",
    caption: "(Pharma), ISO & National Cold Chain Guidelines",
    icon: { src: "/Images/specs/tech-shield.svg", width: 37.6667, height: 46.3406 },
    accent: true,
  },
];

function SpecCard({ spec, desktop }: { spec: Spec; desktop?: boolean }) {
  return (
    <li
      className={`flex flex-col items-start gap-[10px] rounded-[20px] ${
        spec.accent ? "bg-[#ED1D23] px-[20px] py-[32px]" : "bg-white p-[20px]"
      } ${desktop ? "w-[400px] shrink-0" : "shadow-[0_4px_16px_rgba(15,23,42,0.08)]"}`}
    >
      <span className="flex size-[52px] shrink-0 items-center justify-center">
        <Image
          src={assetUrl(spec.icon.src)}
          alt=""
          width={spec.icon.width}
          height={spec.icon.height}
          className="block max-w-none"
        />
      </span>
      <div className="flex flex-col gap-[12px]">
        <h3
          className={`text-[24px] leading-[26px] font-bold ${
            spec.accent ? "text-white" : "text-[#ED1D23]"
          }`}
        >
          {spec.label}
        </h3>
        <p
          className={`text-[18px] leading-[24px] font-medium ${
            desktop ? "w-[360px]" : ""
          } ${spec.accent ? "text-[#F8F8F8]" : "text-[#6E6E6E]"}`}
        >
          {spec.value} {spec.caption}
        </p>
      </div>
    </li>
  );
}

function Heading({ desktop }: { desktop?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-[10px] font-bold">
      <div className="flex items-center gap-[10px]">
        <Image
          src={assetUrl("/Images/specs/tech-line.svg")}
          alt=""
          width={38}
          height={2}
          className="block h-[2px] w-[38px] max-w-none"
        />
        <p
          className={`tracking-[1.5978px] text-[#ED1D23] uppercase ${
            desktop
              ? "text-[20px] leading-[21.304px]"
              : "text-[14px] leading-[20px] sm:text-[16px]"
          }`}
        >
          {EYEBROW}
        </p>
      </div>
      <h2
        className={`text-[#0F172A] ${
          desktop
            ? "w-[755px] text-[50px] leading-[60px]"
            : "text-[30px] leading-[36px] sm:text-[40px] sm:leading-[48px]"
        }`}
      >
        {HEADING}
      </h2>
    </div>
  );
}

export default function SpecsBarSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: Figma frame (1920 wide), scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-white"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* warehouse photo, washed out on the left behind the heading */}
            <div className="pointer-events-none absolute top-0 left-0 h-[671px] w-[1920px] overflow-hidden">
              <Image
                src="/Images/specs/tech-bg.webp"
                alt=""
                width={1983}
                height={793}
                sizes="100vw"
                className="absolute top-0 left-[-5.01%] h-[129.66%] w-[113.31%] max-w-none"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(-85.56deg, rgba(255,255,255,0) 20.733%, rgba(255,255,255,0.6) 54.248%)",
                }}
              />
            </div>

            <div className="absolute top-[118px] left-[75px]">
              <Heading desktop />
            </div>

            <ul className="absolute top-[123px] left-[calc(41.67%+91px)] grid grid-cols-[400px_400px] gap-[24px] gap-y-[30px]">
              {SPECS.map((spec) => (
                <SpecCard key={spec.label} spec={spec} desktop />
              ))}
            </ul>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px): Figma node 10976:3445 */}
      <div className="relative flex flex-col gap-[20px] overflow-hidden px-[20px] py-[32px] sm:hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/Images/specs/tech-bg-mobile.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(147.78deg, #fff 25.886%, rgba(255,255,255,0) 72.444%)",
            }}
          />
        </div>

        <div className="relative flex flex-col items-start gap-[10px] font-bold">
          <div className="flex items-center gap-[10px]">
            <Image
              src={assetUrl("/Images/specs/tech-line.svg")}
              alt=""
              width={38}
              height={2}
              className="block h-[2px] w-[38px] max-w-none"
            />
            <p className="text-[12px] leading-[16px] tracking-[1.6px] text-[#ED1D23] uppercase">
              {EYEBROW}
            </p>
          </div>
          <h2 className="text-[28px] leading-[32px] text-[#0F172A]">{HEADING}</h2>
        </div>

        <ul className="relative flex flex-col gap-[12px]">
          {[SPECS[0], SPECS[1], SPECS[3], SPECS[2]].map((spec) => (
            <li
              key={spec.label}
              className={`flex items-start gap-[16px] rounded-[16px] px-[20px] ${
                spec.accent ? "bg-[#ED1D23] py-[20px]" : "bg-white py-[10px]"
              }`}
            >
              <span className="flex size-[28px] shrink-0 items-center justify-center">
                <Image
                  src={assetUrl(spec.icon.src)}
                  alt=""
                  width={spec.icon.width}
                  height={spec.icon.height}
                  className="block max-w-none scale-[0.54]"
                />
              </span>
              <div className="flex min-w-0 flex-col gap-[8px]">
                <h3
                  className={`text-[20px] leading-[24px] font-bold ${
                    spec.accent ? "text-white" : "text-[#ED1D23]"
                  }`}
                >
                  {spec.label}
                </h3>
                <p
                  className={`text-[14px] leading-[20px] font-normal ${
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

      {/* TABLET (640px - 1023px) */}
      <div className="relative hidden overflow-hidden px-10 py-14 sm:max-[1023px]:block">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/Images/specs/tech-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative flex flex-col gap-8">
          <Heading />
          <ul className="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
            {SPECS.map((spec) => (
              <SpecCard key={spec.label} spec={spec} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
