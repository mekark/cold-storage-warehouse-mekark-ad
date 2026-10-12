"use client";

import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { useState } from "react";
import { FAQ_ITEMS } from "@/components/faqData";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

type Item = (typeof FAQ_ITEMS)[number];

function Items({
  items,
  openIndex,
  onToggle,
  fixedLayout,
}: {
  items: Item[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  /** Desktop: replicate the fixed Figma widths. Otherwise flow naturally. */
  fixedLayout: boolean;
}) {
  return (
    <div className={`flex flex-col items-start ${fixedLayout ? "" : "w-full"}`}>
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.question}
            className={`flex flex-col items-start border-b-[1.333px] border-solid border-[#E2E2E2] ${
              fixedLayout ? "w-[911.556px]" : "w-full"
            } ${index === 0 && (open || !fixedLayout)
                ? "pt-0"
                : fixedLayout
                  ? "pt-[32px]"
                  : "pt-5"} ${
              open && fixedLayout ? "pb-[19.667px]" : "pb-[33.333px]"
            }`}
          >
            <button
              type="button"
              onClick={() => onToggle(index)}
              aria-expanded={open}
              className={`flex w-full justify-between text-left ${
                open ? "items-center" : "items-start"
              } ${fixedLayout ? "gap-[13px]" : "gap-4"}`}
            >
              <span
                className={`min-w-0 flex-1 ${
                  open
                    ? "font-bold text-[#C4161C]"
                    : "font-semibold text-[#080808]"
                } ${
                  fixedLayout
                    ? "text-[21.333px] leading-[29.867px]"
                    : "text-[17px] leading-[26px] sm:text-[19px]"
                }`}
              >
                <span
                  className={`inline-block ${fixedLayout ? "w-[32px]" : "w-[26px]"}`}
                >
                  {index + 1}.
                </span>
                {item.question}
              </span>

              <span
                aria-hidden
                className={`flex size-[37.333px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal ${
                  open
                    ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                    : "bg-[#F0F0F0] text-[#9A9A9A]"
                }`}
              >
                +
              </span>
            </button>

            {open && (
              <p
                className={`font-medium text-[#5A5A5A] ${
                  fixedLayout
                    ? "mt-[21.667px] w-full max-h-[266px] overflow-hidden text-[18px] leading-[28px]"
                    : "mt-4 text-[15px] leading-[26px] sm:text-[17px]"
                }`}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-start gap-[6px]">
      <div className="flex items-center gap-[10.667px]">
        <span className="h-[2.667px] w-[26.667px] bg-[#C4161C]" />
        <span className="text-[14.667px] leading-[normal] font-extrabold tracking-[2.6667px] whitespace-nowrap text-[#C4161C] uppercase">
          FAQ
        </span>
      </div>
      <h2 className="text-[30px] leading-[normal] font-bold text-[#070506] sm:text-[38px] min-[1024px]:text-[46px]! min-[1024px]:whitespace-nowrap">
        Frequently Asked Questions.
      </h2>
    </div>
  );
}

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-white"
            style={{ minHeight: DESIGN_HEIGHT }}
          >
            {/* question-mark artwork */}
            <div className="absolute bottom-[132px] left-[-240px] h-[1002px] w-[1098px] overflow-hidden">
              <Image
                src="/Images/faq/faq-bg.webp"
                alt=""
                width={1536}
                height={1024}
                sizes="79vw"
                className="absolute top-[-0.02%] left-0 h-[100.07%] w-[136.98%] max-w-none"
              />
            </div>

            {/* faq list */}
            <div className="relative ml-[901px] flex flex-col items-start gap-[40px] pt-[81px] pb-[81px]">
              <Heading />

              <Items
                items={FAQ_ITEMS}
                openIndex={openIndex}
                onToggle={toggleItem}
                fixedLayout
              />
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="flex flex-col gap-[24px] bg-[#F9F6F7] px-[20px] py-[32px] sm:hidden">
        <div className="flex w-full flex-col">
          <div className="flex flex-col items-start gap-[12px] py-[6px]">
            <span className="rounded-full border border-solid border-[#FCD5D0] bg-[#FEEAE7] px-[18.67px] py-[8px] text-[14px] leading-[26px] font-semibold text-[#CC000A]">
              FAQ
            </span>

            <h2 className="w-[309px] max-w-full text-[28px] leading-[32px] font-bold text-[#070506]">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          <div className="relative aspect-[350/327] w-full overflow-hidden">
            <Image
              src="/Images/faq/faq-bg.webp"
              alt=""
              width={1536}
              height={1024}
              sizes="140vw"
              className="absolute top-[-0.02%] left-0 h-[100.07%] w-[140.11%] max-w-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-end gap-[12px]">
          {FAQ_ITEMS.map((item, index) => {
            const open = index === openIndex;

            return (
              <div
                key={item.question}
                className="flex w-full flex-col gap-[12px]"
              >
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-[12px] text-left"
                  >
                    <span
                      className={`min-w-0 flex-1 text-[16px] leading-[24px] ${
                        open
                          ? "font-semibold text-[#C4161C]"
                          : "font-medium text-[#080808]"
                      }`}
                    >
                      {index + 1}. {item.question}
                    </span>

                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal transition-transform duration-300 ${
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
                      <p className="w-full pt-[10px] text-[14px] leading-[20px] font-medium text-[#5A5A5A]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#E2E2E2]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative mx-auto h-[220px] w-full max-w-[560px] overflow-hidden sm:h-[320px]">
          <Image
            src="/Images/faq/faq-bg.webp"
            alt=""
            fill
            sizes="(min-width: 640px) 560px, 100vw"
            className="object-cover object-[15%_center]"
          />
        </div>

        <div className="flex flex-col gap-8 px-5 pt-8 pb-12 sm:px-10 sm:pb-16">
          <Heading />

          <Items
            items={FAQ_ITEMS}
            openIndex={openIndex}
            onToggle={toggleItem}
            fixedLayout={false}
          />
        </div>
      </div>
    </section>
  );
}
