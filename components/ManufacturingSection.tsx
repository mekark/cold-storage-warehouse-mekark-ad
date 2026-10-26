import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 703;

const HEADING = "Our Manufacturing Capabilities";

// Left to right, as laid out in the Figma frame
const PHOTOS = [
  {
    src: "/Images/manufacturing/m3-v3.webp",
    alt: "Welder working on steel beams inside the fabrication bay",
    width: 571,
  },
  {
    src: "/Images/manufacturing/m1-v2.webp",
    alt: "Steel fabrication shop floor with overhead cranes and PEB members",
    width: 570,
  },
  {
    src: "/Images/manufacturing/m2-v2.webp",
    alt: "Automated welding line for built-up steel sections",
    width: 571,
  },
];

export default function ManufacturingSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: Figma frame (1920 wide), scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="flex w-[1920px] flex-col gap-[50px] px-[80px] py-[52px]"
            style={{ height: DESIGN_HEIGHT }}
          >
            <h2 className="text-[66px] leading-[60px] font-bold text-[#0F172A]">
              {HEADING}
            </h2>
            {/* only the outer corners of the row are rounded */}
            <div className="flex gap-[24px] overflow-clip rounded-[24px]">
              {PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-[489px] shrink-0"
                  style={{ width: photo.width }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px): shuffled order */}
      <div className="flex flex-col gap-[21px] bg-white px-[20px] py-[32px] sm:hidden">
        <h2 className="text-[28px] leading-[normal] font-bold text-[#0F172A]">
          {HEADING}
        </h2>

        {/* stacked 200px photos; only the stack's outer corners are rounded */}
        <ul className="flex w-full flex-col gap-[14px] overflow-clip rounded-[12px]">
          {[PHOTOS[2], PHOTOS[0], PHOTOS[1]].map((photo) => (
            <li key={photo.src} className="relative h-[200px] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={70}
                sizes="(min-width: 640px) 1px, 58vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* TABLET (640px - 1023px): three columns */}
      <div className="hidden px-10 py-14 sm:max-[1023px]:block">
        <h2 className="text-[48px] leading-[1.1] font-bold text-[#0F172A]">
          {HEADING}
        </h2>
        <div className="mt-8 grid grid-cols-3 gap-[16px]">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[571/489] overflow-hidden rounded-[16px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 1px, (min-width: 640px) 31vw, 1px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
