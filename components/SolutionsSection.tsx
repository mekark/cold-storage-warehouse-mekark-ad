import { Fish, FlaskConical, Sprout, Warehouse, type LucideIcon } from "lucide-react";
import { manrope } from "@/lib/fonts";

const SOLUTIONS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "3PL Multi-Temperature Cold Chain Hubs",
    text: "High-bay mobile/pallet racking cold stores with 12m+ height, insulated dock pods, and multi-chamber layouts for frozen and chilled SKUs.",
    icon: Warehouse,
  },
  {
    title: "Pharmaceutical & Life Sciences Cold Rooms",
    text: "WHO-GMP compliant +2°C to +8°C and +15°C to +25°C facilities with cleanroom-grade cam-lock PIR panels and redundant HVAC support.",
    icon: FlaskConical,
  },
  {
    title: "Seafood, Meat & Dairy Processing Cold Stores",
    text: "Integrated blast freezers (-35°C), glazing/processing halls, and deep-freeze pallet chambers with hygienic stainless-steel coving and epoxy flooring.",
    icon: Fish,
  },
  {
    title: "Agri & Controlled Atmosphere (CA) Cold Stores",
    text: "Gas-tight cold rooms for fruits, vegetables, and seeds with humidity and CO₂/O₂ control readiness.",
    icon: Sprout,
  },
];

export default function SolutionsSection() {
  return (
    <section className={`${manrope.className} w-full bg-white px-5 py-12 sm:px-10 min-[1024px]:px-[80px] min-[1024px]:py-[80px]`}>
      <div className="mx-auto max-w-[1707px]">
        <p className="mb-3 text-[13px] leading-[20px] font-semibold tracking-[0.12em] text-[#ED1D23] uppercase min-[1024px]:text-[14px]">
          Specialized Cold Chain Solutions We Build
        </p>
        <h2 className="text-[28px] leading-[1.15] font-bold text-[#0F172A] sm:whitespace-nowrap sm:text-[clamp(14px,calc((100vw-160px)/38),46px)] sm:leading-[1.25]">
          Industry-Specific{" "}
          <span className="text-[#ED1D23]">Temperature Controlled</span>{" "}
          Warehouse Construction
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 min-[1024px]:mt-10 min-[1024px]:gap-5">
          {SOLUTIONS.map(({ title, text, icon: Icon }, index) => (
            <li
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-[20px] border border-solid border-[#E4DFE0] bg-[#F9F6F7] p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] min-[1024px]:p-7"
            >
              <div className="relative flex items-center justify-between">
                <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-[#ED1D23] shadow-[0_10px_24px_rgba(237,29,35,0.35)]">
                  <Icon size={26} strokeWidth={2} className="text-white" />
                </span>
                <span className="text-[60px] leading-none font-extrabold text-[#0F172A]/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-6 text-[19px] leading-[26px] font-bold text-[#0F172A] min-[1024px]:text-[21px] min-[1024px]:leading-[28px]">
                {title}
              </h3>
              <p className="relative mt-3 text-[14px] leading-[23px] font-medium text-[#64748B] min-[1024px]:text-[15px] min-[1024px]:leading-[24px]">
                {text}
              </p>
              <span className="absolute bottom-0 left-0 h-[3px] w-[48px] bg-[#ED1D23] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
