"use client";

import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { useState } from "react";
import { FAQ_ITEMS } from "@/components/faqData";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* One responsive layout: phone/tablet stack, desktop Figma frame (1920 wide)
          scaled to the viewport. */}
      <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
        <div className="flex flex-col gap-[24px] bg-[#F9F6F7] px-[20px] py-[32px] sm:gap-8 sm:bg-white sm:px-10 sm:pt-8 sm:pb-16 lg:relative lg:block lg:min-h-[1000px] lg:w-[1920px] lg:overflow-hidden lg:p-0">
          {/* title + image */}
          <div className="flex flex-col items-start gap-[16px] sm:gap-6 lg:absolute lg:top-[100px] lg:left-[187px] lg:w-[531px] lg:justify-center lg:gap-[28px] lg:pt-[10.507px]">
            <div className="flex flex-col items-start gap-[16px] sm:gap-6">
              <span className="inline-flex items-center gap-[6px] rounded-full border border-solid border-[rgba(237,32,36,0.2)] bg-[rgba(237,32,36,0.1)] px-[11px] py-[5px] lg:gap-[8.485px] lg:px-[13.788px] lg:py-[7.425px]">
                <span className="size-[6px] shrink-0 rounded-full bg-[#E40015] lg:size-[8.485px]" />
                <span className="text-[12px] leading-[18px] font-bold tracking-[2.6px] text-[#5A5656] uppercase lg:text-[15.333px] lg:leading-[23.04px] lg:tracking-[3.3787px]">
                  faq
                </span>
              </span>

              <h2 className="text-[32px] leading-[36px] font-extrabold tracking-[-2.56px] text-[#101116] sm:text-[44px] sm:leading-[48px] lg:text-[64px] lg:leading-[60.8px]">
                Frequently Asked
                <br />
                <span className="text-[#E60F1A]">Questions</span>
              </h2>
            </div>

            <div className="relative mx-auto aspect-square w-[220px] max-w-full overflow-hidden sm:aspect-auto sm:h-[240px] sm:w-full sm:max-w-[320px] lg:mx-0 lg:h-[464px] lg:w-[463px] lg:max-w-none">
              <Image
                src="/Images/faq/faq-qmark.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 24vw, 320px"
                className="object-contain lg:object-cover"
              />
            </div>
          </div>

          {/* faq list */}
          <div className="flex w-full flex-col lg:relative lg:ml-[901px] lg:w-auto lg:items-start lg:pt-[95px] lg:pb-[40px]">
            {FAQ_ITEMS.map((item, index) => {
              const open = index === openIndex;

              return (
                <div
                  key={item.question}
                  className={`flex w-full flex-col border-b border-solid border-[#E2E2E2] py-[12px] sm:pt-5 sm:pb-[33.333px] lg:w-[911.556px] lg:border-b-[1.333px] lg:pt-[32px] lg:first:pt-0 sm:first:pt-0 ${
                    open ? "lg:pb-[19.667px]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={open}
                    className={`flex w-full items-center justify-between gap-[12px] text-left sm:gap-4 lg:gap-[13px] ${
                      open ? "sm:items-center" : "sm:items-start"
                    }`}
                  >
                    <span
                      className={`min-w-0 flex-1 text-[16px] leading-[24px] sm:text-[19px] sm:leading-[26px] lg:text-[21.333px] lg:leading-[29.867px] ${
                        open
                          ? "font-semibold text-[#C4161C] sm:font-bold"
                          : "font-medium text-[#080808] sm:font-semibold"
                      }`}
                    >
                      <span className="inline-block w-[26px] lg:w-[32px]">
                        {index + 1}.
                      </span>
                      {item.question}
                    </span>

                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal transition-transform duration-300 sm:size-[37.333px] ${
                        open
                          ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                          : "bg-[#F0F0F0] text-[#9A9A9A]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full pt-[10px] text-[14px] leading-[20px] font-medium text-[#5A5A5A] sm:pt-4 sm:text-[17px] sm:leading-[26px] lg:max-h-[266px] lg:overflow-hidden lg:pt-[21.667px] lg:text-[18px] lg:leading-[28px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}
