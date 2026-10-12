"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/** Row widths from the Figma frame - rows are right-aligned, so narrower rows indent from the left */
const ROW_WIDTHS = [700, 672, 645, 645, 672, 700];

const ITEMS = [
  {
    title: "Turnkey Warehouse Building Construction",
    description:
      "We take single-point accountability from design to handover. Engineering, procurement and RCC construction are under one roof, so your logistics warehouse, distribution centre, or fulfillment center stays on schedule and on budget.",
  },
  {
    title: "In-House Structural Engineers",
    description:
      "As an industrial warehouse contractor, we use BIM-based structural analysis to design every RCC structure accurately before work begins. This makes us a dependable warehouse building contractor for large warehouse construction, with fewer on-site design changes.",
  },
  {
    title: "Foundation Design for Your Loads",
    description:
      "We customise your foundation design for your racking systems, material handling equipment and floor loads. As a warehouse construction contractor, we size footings, pedestals and plinth beams for safe load transfer.",
  },
  {
    title: "Established Credentials",
    description:
      "We have completed 200+ industrial and commercial RCC construction projects and earned a high customer rating. We measure our reliability by repeat orders from logistics operators, 3PL companies, e-commerce brands and cold chain businesses.",
  },
  {
    title: "Safe Construction",
    description:
      "We use modular formwork, routine site safety checks and clear, itemised pricing. This keeps our warehouse construction sites safe, organised and free of cost surprises.",
  },
  {
    title: "Pre-Handover Inspection",
    description:
      "Before handover, we inspect the structure, RCC quality and compliance with statutory requirements. For cold storage and temperature-controlled warehouses, this includes checking the building before insulation and refrigeration work.",
  },
];

export default function WhyMekarkAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul
      className="flex w-[700px] flex-col items-end gap-[10px] pt-[5px]">
      {ITEMS.map((item, index) => {
        const isOpen = open === index;
        const isLast = index === ITEMS.length - 1;

        return (
          <li
            key={item.title}
            style={{ width: ROW_WIDTHS[index] }}
            className={
              isLast
                ? "min-h-[60px] py-[12px]"
                : "min-h-[60px] border-b-[1.333px] border-solid border-[#E58282] pt-[12px] pb-[13.333px]"
            }
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full cursor-pointer flex-col text-left text-white"
            >
              <span className="flex w-full items-center gap-[15px]">
                <span className="w-[22px] shrink-0 text-[24px] leading-[29.867px] font-bold">
                  {index + 1}.
                </span>
                <span className="flex-1 text-[24px] leading-[29.867px] font-bold">
                  {item.title}
                </span>
                <ChevronDown
                  size={30}
                  strokeWidth={1.5}
                  aria-hidden
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
              <span
                aria-hidden={!isOpen}
                className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="block overflow-hidden">
                  <span className="block w-[632px] max-w-full pt-[12px] pl-[37px] text-[17px] leading-[normal] font-medium">
                    {item.description}
                  </span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/** Mobile (below 640px): full-width rows on the red gradient, all closed by default */
export function WhyMekarkMobileAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="flex w-full flex-col">
      {ITEMS.map((item, index) => {
        const isOpen = open === index;
        const isLast = index === ITEMS.length - 1;

        return (
          <li
            key={item.title}
            className={`${index === 0 ? "pb-[10px]" : "py-[10px]"} ${
              isLast ? "" : "border-b border-solid border-[#E58282]"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full cursor-pointer flex-col text-left text-white"
            >
              <span className="flex w-full items-center gap-[12px]">
                <span className="min-w-0 flex-1 text-[16px] leading-[18px] font-bold">
                  <span className="inline-block w-[24px]">{index + 1}.</span>
                  {item.title}
                </span>
                <ChevronDown
                  size={26}
                  strokeWidth={1.5}
                  aria-hidden
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
              <span
                aria-hidden={!isOpen}
                className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="block overflow-hidden">
                  <span className="block max-w-[299px] pt-[10px] pl-[24px] text-[14px] leading-[normal] font-medium">
                    {item.description}
                  </span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
