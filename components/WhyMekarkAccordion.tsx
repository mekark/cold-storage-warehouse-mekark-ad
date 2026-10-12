"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/** Row widths from the Figma frame - rows are right-aligned, so narrower rows indent from the left */
const ROW_WIDTHS = [700, 672, 645, 645, 672, 700];

const ITEMS = [
  {
    title: "Product-Specific Refrigeration Sizing",
    description:
      "Every cold storage warehouse construction project sizes refrigeration around product load, storage temperature and room usage.",
  },
  {
    title: "PUF/PIR Insulated Cold Room",
    description:
      "PUF/PIR walls, ceilings and joints reduce heat gain across chilled, frozen and deep-freeze storage.",
  },
  {
    title: "Temperature Controlled Warehouse Construction",
    description:
      "Our temperature controlled warehouse construction supports separate temperature zones within the same cold storage facility.",
  },
  {
    title: "Insulated Cold Storage Flooring",
    description:
      "Cold-room floors are designed with insulation and vapour protection for low-temperature operating conditions.",
  },
  {
    title: "In-house Designing & Integration",
    description:
      "As a cold storage building contractor, Mekark coordinates PEB structure, insulated panels and refrigeration before installation.",
  },
  {
    title: "Turnkey Cold Chain EPC",
    description:
      "For cold chain facility construction, civil works, structure, insulation, refrigeration and commissioning stay under one EPC contractor.",
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
                <span className="flex min-w-0 flex-1 items-start text-[16px] leading-[18px] font-bold">
                  <span className="w-[24px] shrink-0">{index + 1}.</span>
                  <span className="min-w-0 flex-1">{item.title}</span>
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
