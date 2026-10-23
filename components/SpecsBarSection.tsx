import { Layers, ShieldCheck, Snowflake, Thermometer, type LucideIcon } from "lucide-react";
import { manrope } from "@/lib/fonts";

const SPECS: { label: string; value: string; icon: LucideIcon }[] = [
  {
    label: "Temperature Range",
    value:
      "+15°C (Ambient/Pharma) to -25°C (Deep Freeze) & -35°C (Blast Freezing)",
    icon: Thermometer,
  },
  {
    label: "Insulation Panels",
    value:
      "FM-Approved PIR / PUF Sandwich Panels (80mm to 200mm thickness, 40±2 kg/m³ density)",
    icon: Layers,
  },
  {
    label: "Floor Insulation",
    value:
      "Multi-layer bituthene vapor barrier + high-density XPS/PUF + sub-floor frost-heave prevention",
    icon: Snowflake,
  },
  {
    label: "Compliance Standards",
    value: "FSSAI, HACCP, WHO-GMP (Pharma), ISO & National Cold Chain Guidelines",
    icon: ShieldCheck,
  },
];

export default function SpecsBarSection() {
  return (
    <section
      className={`${manrope.className} w-full bg-[#F9F6F7] px-5 pb-12 sm:px-10 lg:px-[80px] lg:pb-[80px]`}
    >
      <div className="mx-auto max-w-[1707px] overflow-hidden rounded-[24px] bg-[#0A0A0A] px-6 py-8 sm:px-10 sm:py-10 lg:px-[56px] lg:py-[48px]">
        <div className="mb-8 flex items-center gap-3 lg:mb-10">
          <span className="h-[2px] w-[28px] bg-[#ED1D23]" />
          <p className="text-[13px] leading-[20px] font-semibold tracking-[0.12em] text-white uppercase lg:text-[15px]">
            Cold Chain Engineering Specifications
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0">
          {SPECS.map(({ label, value, icon: Icon }, index) => (
            <li
              key={label}
              className={`flex flex-col gap-3 lg:px-8 ${
                index === 0 ? "lg:pl-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-solid lg:border-white/10" : ""}`}
            >
              <span className="flex items-center gap-3">
                <Icon size={24} strokeWidth={2} className="shrink-0 text-[#ED1D23]" />
                <span className="text-[16px] leading-[22px] font-bold text-white lg:text-[18px]">
                  {label}
                </span>
              </span>
              <p className="text-[14px] leading-[22px] font-medium text-[#A9A9A9] lg:text-[15px] lg:leading-[24px]">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
