import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

const VIEW_ALL_HREF = "https://www.mekark.com/projects/completed-projects";

type Tile = {
  src: string;
  alt: string;
  /** Desktop-only rounded corner of the tile in the Figma grid (outer corners only) */
  radiusClass: string;
};

// 2 x 2 grid, left-to-right / top-to-bottom, as laid out in the Figma frame
const TILES: Tile[] = [
  {
    src: "/Images/gallery/c1.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    radiusClass: "lg:rounded-none lg:rounded-tl-[32px]",
  },
  {
    src: "/Images/gallery/c2.webp",
    alt: "Cold storage interior with pallet racking and blue lighting",
    radiusClass: "lg:rounded-none lg:rounded-tr-[32px]",
  },
  {
    src: "/Images/gallery/c3.webp",
    alt: "Large cold storage warehouse with rooftop condensers and loading trucks",
    radiusClass: "lg:rounded-none lg:rounded-bl-[32px]",
  },
  {
    src: "/Images/gallery/c4.webp",
    alt: "Cold storage corridor with stacked pallets and loading docks",
    radiusClass: "lg:rounded-none lg:rounded-br-[32px]",
  },
];

export default function ProjectsGallerySection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* One responsive layout: phone stack, tablet 2-col grid, desktop Figma frame
          (1920 wide) scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="flex flex-col gap-[24px] bg-[#F9F6F7] px-[20px] py-[32px] sm:gap-8 sm:px-10 sm:py-16 lg:w-[1920px] lg:items-start lg:gap-[52px] lg:px-[80px] lg:py-[52px]">
          <div className="flex w-full flex-col gap-[13px] font-bold lg:w-[648px]">
            <h2 className="text-[28px] leading-[32px] font-bold whitespace-nowrap text-[#0F172A] sm:text-[52px] sm:leading-[1.05] lg:text-[66px] lg:leading-[60px]">
              Completed Projects
            </h2>
          </div>

          <div className="flex w-full flex-col gap-[16px] sm:grid sm:grid-cols-2 lg:h-[1001.5px] lg:grid-rows-2 lg:gap-[25px]">
            {TILES.map((tile) => (
              <div
                key={tile.src}
                className={`relative aspect-[1672/941] w-full overflow-hidden rounded-[16px] bg-[#D9D9D9] lg:aspect-auto ${tile.radiusClass}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, (min-width: 640px) 50vw, 100vw"
                  quality={55}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* tablet only (640px - 1023px) */}
          <div className="hidden justify-center sm:max-[1023px]:flex sm:max-[1023px]:w-full">
            <a
              href={VIEW_ALL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-[8.809px] bg-[#C4161C] px-10 py-4 text-center text-[20px] font-extrabold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)]"
            >
              View All →
            </a>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
