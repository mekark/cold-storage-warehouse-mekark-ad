import Image from "next/image";
import { inter, manrope } from "@/lib/fonts";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroBlueprintForm from "@/components/HeroBlueprintForm";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  HERO_FEATURES,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";
import { assetUrl } from "@/lib/assetPrefix";

// Client logos (each sits in a 90x40 chip): `scale` zooms logos whose artwork has
// extra padding inside the file; the rest use the default 34px height.
const CLIENT_LOGOS = [
  { name: "L&T", src: "/Images/hero/clients/lt.webp", scale: 1 },
  { name: "CAT", src: "/Images/hero/mobile-cat.webp", scale: 1 },
  { name: "TVS", src: "/Images/hero/mobile-tvs.webp", scale: 1.15 },
  { name: "Tata", src: "/Images/hero/mobile-tata.webp", scale: 1, crop: true },
  { name: "VWU", src: "/Images/hero/clients/vwu.webp", scale: 1 },
  { name: "Schwing Stetter", src: "/Images/hero/clients/stetter.webp", scale: 1.6 },
  { name: "SRF", src: "/Images/hero/clients/srf.webp", scale: 1.6 },
  { name: "Saveetha", src: "/Images/hero/clients/saveetha.webp", scale: 1.2 },
  { name: "Sarvam Safety", src: "/Images/hero/clients/sarvam.webp", scale: 1 },
  { name: "Reliance", src: "/Images/hero/clients/reliance.webp", scale: 1.2 },
  { name: "Orbittal", src: "/Images/hero/clients/orbittal.webp", scale: 1.2 },
  { name: "NS Instruments", src: "/Images/hero/clients/nsi.webp", scale: 1 },
  { name: "MRF", src: "/Images/hero/clients/mrf.webp", scale: 1 },
  { name: "LA Freightlift", src: "/Images/hero/clients/laf.webp", scale: 1.2 },
  { name: "Komatsu", src: "/Images/hero/clients/komatsu.webp", scale: 1 },
] as const;

const STATS = [
  { value: "300", suffix: "+", label: "Projects", width: "sm:w-[145.333px]" },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    width: "sm:w-[186.667px]",
  },
  { value: "40,000 ", suffix: "MT", label: "Annual Production", width: "" },
  {
    value: "175",
    suffix: "+",
    label: "Engineering Team",
    width: "sm:w-[170.667px]",
  },
];

// Figma frame is 1920px wide; on desktop viewports the whole section is scaled to fit
const DESIGN_WIDTH = 1920;

export default function BlueprintHeroSection() {
  return (
    <>
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <section
            className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] max-sm:pt-[44px] min-[1024px]:h-[1018px]`}
          >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 max-sm:top-[84px] max-sm:bottom-auto max-sm:h-[236px] min-[1024px]:inset-auto min-[1024px]:top-[-60px] min-[1024px]:right-[-8.3%] min-[1024px]:h-[1080px] min-[1024px]:w-[94.44%] overflow-hidden">
              <Image
                src="/Images/hero/hero-bg-cold.webp"
                alt="Cold storage warehouse interior"
                fill
                loading="eager"
                fetchPriority="high"
                quality={55}
                sizes="(min-width: 1024px) 95vw, 100vw"
                className="object-cover max-sm:object-bottom"
              />
              {/* phone: fade the band into the black page, top and bottom */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,rgba(6,6,6,0.2)_35%,rgba(6,6,6,0)_70%,#060606_100%)] sm:hidden" />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 max-sm:hidden bg-[#060606]/80 min-[1024px]:bg-transparent min-[1024px]:bg-[linear-gradient(to_right,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(6,6,6,0)_88.021%)]" />

            {/* NAVBAR */}
            <header className="relative z-20 max-sm:fixed max-sm:inset-x-0 max-sm:top-0 max-sm:z-50 max-sm:border-b max-sm:border-solid max-sm:border-white/10 max-sm:bg-[#060606]/95 max-sm:backdrop-blur-sm flex w-full items-center justify-between px-5 py-[5px] sm:px-[80px] sm:py-[17px] min-[1024px]:absolute min-[1024px]:top-0 min-[1024px]:left-0">
              <div className="relative h-[34px] w-[98px] shrink-0 sm:h-[46px] sm:w-[132px]">
                <Image
                  src="/Images/hero/logo-mekark.webp"
                  alt="Mekark"
                  fill
                  sizes="132px"
                  fetchPriority="high"
                  className="object-cover"
                />
              </div>

              <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[16px] py-[8px] text-[14px] font-semibold leading-[normal] whitespace-pre text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] sm:px-[24px] sm:py-[10px] sm:text-[16px]">
                {"Request an Estimate"}
              </EnquiryFormButton>
            </header>

            {/* CONTENT */}
            <div className="relative z-10 flex w-full flex-col gap-10 px-5 pt-6 pb-12 sm:px-[80px] min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:justify-between min-[1024px]:gap-6 min-[1024px]:pt-0! min-[1024px]:pr-[48px]! min-[1024px]:pb-0">
              {/* LEFT COLUMN */}
              <div className="flex w-full min-w-0 flex-col items-start gap-[24px] min-[1024px]:mt-[118.5px] min-[1024px]:max-w-[1135px] min-[1024px]:flex-1">
                {/* PILL */}
                <div className="flex max-w-full items-center gap-[8px] rounded-full border-[1.333px] border-solid border-white/20 px-[12px] py-[6px] sm:gap-[10.667px] sm:px-[17.333px] sm:py-[9.333px]">
                  <span className="size-[8px] shrink-0 sm:size-[10.667px] rounded-full bg-[#E40015]" />
                  <p
                    className={`${inter.className} text-[10px] leading-[16px] font-medium text-white sm:text-[14px] sm:leading-[20px] sm:whitespace-nowrap`}
                  >
                    Complete Thermal Envelope, PEB Structure & Civil Execution
                  </p>
                </div>

                {/* HEADING */}
                <div className="flex w-full flex-col items-start gap-[13px] max-sm:mb-[94px]">
                  <h1 className="w-full text-[22px] leading-[26px] font-semibold text-white max-[389px]:text-[20px] max-[359px]:text-[17px] sm:text-[48px] sm:font-bold sm:leading-[53px] min-[1024px]:w-[1135px] min-[1024px]:max-w-full">
                    <span className="block min-[1024px]:-ml-[6px] min-[1024px]:whitespace-nowrap">
                      Turnkey Cold Storage &
                    </span>
                    <span className="block w-fit max-w-full min-[1024px]:-ml-[6px]">
                      Temperature-Controlled
                      <br className="sm:hidden" />{" "}
                      <span className="max-sm:whitespace-nowrap">Warehouse Construction Company</span>
                    </span>
                  </h1>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col gap-[16px] min-[1700px]:max-w-[891px]">
                  <p className="w-full text-[14px] leading-[normal] font-normal text-[#F3F3F3] sm:text-[22px] sm:text-[#A9A9A9] sm:leading-[28px]">
                    Zero thermal leakage. Precision-engineered refrigerated warehouse construction from
                    +15°C down to -25°C for Food Processing, Dairy, Pharma,
                    Seafood & Cold Chain 3PLs.
                  </p>

                  {/* HIGHLIGHTS */}
                  <div className="grid w-full grid-cols-1 gap-[14px] min-[1024px]:w-full min-[1024px]:max-w-none min-[1280px]:grid-cols-3 min-[1280px]:gap-[16px] min-[1700px]:w-[calc(100%+100px)]">
                    {HERO_FEATURES.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-[12px] border-l-[3px] border-[#ED1D23] bg-white/5 py-[10px] pr-[16px] pl-[14px]"
                      >
                        <p className="text-[13px] leading-[19px] font-normal text-white/70 sm:text-[16px] sm:text-[#F7F7F7] sm:leading-[24px]">
                          <span className="font-bold text-white">{item.title}:</span>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRUSTED ACROSS INDIA */}
                <div className="relative h-[138px] w-full max-w-[847px] shrink-0 overflow-hidden rounded-[18px]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0.179%,rgba(105,63,29,0.5)_99.821%)] backdrop-blur-[64px]" />

                  <p className="absolute top-[30.33px] left-[24px] -translate-y-1/2 text-[14px] leading-[20px] font-semibold whitespace-nowrap text-[#ED1D23] uppercase sm:text-[#FA7783] sm:left-[122px] sm:-translate-x-1/2">
                    Trusted Across India
                  </p>

                  <div className="absolute top-[55px] right-[16px] left-[16px] h-[63px] overflow-hidden sm:right-auto sm:left-[32.17px] sm:w-[789px] sm:max-w-[calc(100%-64px)]">
                    {/* Desktop/tablet: scrolling track, two identical sets for a seamless loop.
                        Phone: static row of the first four logos (see globals.css). */}
                    <div className="hero-logo-track absolute top-[calc(50%-0.5px)] left-0 flex w-max -translate-y-1/2 items-center gap-[50px] pr-[50px]">
                      {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                        <div
                          key={`${logo.name}-${index}`}
                          className={`relative h-[40px] w-[90px] shrink-0 rounded-[8px] bg-[#F9F6F7] max-sm:w-[64px] max-sm:overflow-hidden ${index >= 4 ? "max-sm:hidden" : ""}`}
                          aria-hidden={index >= CLIENT_LOGOS.length}
                        >
                          {"crop" in logo ? (
                            // emblem + "TATA" crop of the full Tata Electronics artwork
                            <span className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                              <Image
                                src={logo.src}
                                alt={index < CLIENT_LOGOS.length ? logo.name : ""}
                                width={96}
                                height={96}
                                sizes="96px"
                                className="pointer-events-none absolute top-[-69.9%] left-[-100%] h-[301.97%] w-[300%] max-w-none"
                              />
                            </span>
                          ) : (
                          <Image
                            src={logo.src}
                            alt={index < CLIENT_LOGOS.length ? logo.name : ""}
                            width={120}
                            height={40}
                            className="pointer-events-none absolute top-1/2 left-1/2 h-[34px] w-auto max-w-[calc(100%-12px)] -translate-x-1/2 -translate-y-1/2 object-contain max-sm:h-[34px]!"
                            style={{
                              height: logo.scale === 1 ? 34 : 40,
                              scale: logo.scale === 1 ? undefined : logo.scale,
                            }}
                          />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* STATS */}
                <div className="grid w-full grid-cols-2 gap-[12px] sm:flex sm:h-[117.333px] sm:w-auto sm:flex-nowrap sm:items-center sm:gap-x-[48px] sm:border-t-[0.667px] sm:border-solid sm:border-[#E2E2E2] sm:pt-[0.667px]">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex flex-col items-start justify-center gap-[4px] rounded-[10px] border border-solid border-white/[0.08] bg-[#1A1A1A] px-[20px] py-[12px] whitespace-nowrap sm:h-[85.333px] sm:shrink-0 sm:justify-start sm:gap-[5.333px] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 ${stat.width}`}
                    >
                      <p className="text-[24px] leading-[normal] font-extrabold sm:text-[42px]">
                        <span className="text-white">{stat.value}</span>
                        <span className="text-[#C4161C]">{stat.suffix}</span>
                      </p>
                      <p className="text-[10px] leading-[normal] font-semibold text-[#9A9A9A] uppercase sm:text-[16px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-[16px] sm:gap-[30px]">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full bg-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-[#E5091F]">
                      WhatsApp
                    </span>
                    <Image
                      src={assetUrl("/Images/hero/wa.svg")}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px]"
                    />
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full border border-solid border-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-white">
                      Call Now
                    </span>
                    <Image
                      src={assetUrl("/Images/hero/phone.svg")}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px]"
                    />
                  </a>
                </div>
              </div>

              {/* FORM CARD */}
              <HeroBlueprintForm idPrefix="bh" anchorId="enquiry-form" />
            </div>
          </section>
        </ScaledCanvas>
    </>
  );
}
