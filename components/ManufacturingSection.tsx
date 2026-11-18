import Image from "next/image";
import type { CSSProperties } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 703;

const HEADING = "Our Manufacturing Capabilities";

// Left to right, as laid out in the Figma frame. `order` is the phone-only
// stacking order (shuffled); from 640px up the photos follow DOM order.
const PHOTOS = [
  {
    src: "/Images/manufacturing/m3-v3.webp",
    alt: "Welder working on steel beams inside the fabrication bay",
    width: 571,
    order: "order-2 sm:order-none",
  },
  {
    src: "/Images/manufacturing/m1-v2.webp",
    alt: "Steel fabrication shop floor with overhead cranes and PEB members",
    width: 570,
    order: "order-3 sm:order-none",
  },
  {
    src: "/Images/manufacturing/m2-v2.webp",
    alt: "Automated welding line for built-up steel sections",
    width: 571,
    order: "order-1 sm:order-none",
  },
];

export default function ManufacturingSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* One responsive layout: phone stack, tablet 3-up grid, desktop Figma frame
          (1920 wide) scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div
          className="flex flex-col gap-[21px] bg-white px-[20px] py-[32px] sm:gap-8 sm:bg-[#F9F6F7] sm:px-10 sm:py-14 lg:h-[calc(var(--h)*1px)] lg:w-[1920px] lg:gap-[50px] lg:px-[80px] lg:py-[52px]"
          style={{ "--h": DESIGN_HEIGHT } as CSSProperties}
        >
          <h2 className="text-[28px] leading-[normal] font-bold text-[#0F172A] sm:text-[48px] sm:leading-[1.1] lg:text-[66px] lg:leading-[60px]">
            {HEADING}
          </h2>

          <ul className="flex w-full flex-col gap-[14px] overflow-clip rounded-[12px] sm:grid sm:grid-cols-3 sm:gap-[16px] sm:overflow-visible sm:rounded-none lg:flex lg:flex-row lg:gap-[24px] lg:overflow-clip lg:rounded-[24px]">
            {PHOTOS.map((photo) => (
              <li
                key={photo.src}
                className={`relative h-[200px] w-full ${photo.order} sm:aspect-[571/489] sm:h-auto sm:overflow-hidden sm:rounded-[16px] lg:aspect-auto lg:h-[489px] lg:w-[calc(var(--w)*1px)] lg:shrink-0 lg:rounded-none`}
                style={{ "--w": photo.width } as CSSProperties}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 31vw, 58vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </ScaledCanvas>
    </section>
  );
}
