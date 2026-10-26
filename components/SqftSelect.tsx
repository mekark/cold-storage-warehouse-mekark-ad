"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

const MIN_LIST = 200;
const MAX_LIST = 300;

/**
 * Custom listbox for "Project Sq. Ft" so the open list can be styled (red hover / selected row),
 * like the peb-2 project's IndustryTypeSelect. Controlled: the form hook owns the value.
 */
export default function SqftSelect({
  id,
  name,
  value,
  options,
  placeholder,
  className,
  onSelect,
}: {
  id: string;
  name: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  /** Classes for the closed field (same as the other inputs) */
  className: string;
  onSelect: (name: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Always open downward; cap the list to the room left inside the nearest clipping ancestor.
  useLayoutEffect(() => {
    if (!open || !rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    let bottom = Infinity;
    for (let el = rootRef.current.parentElement; el; el = el.parentElement) {
      const { overflowX, overflowY } = getComputedStyle(el);
      if (overflowX === "visible" && overflowY === "visible") continue;
      bottom = Math.min(bottom, el.getBoundingClientRect().bottom);
    }
    const room = Math.max(bottom - rect.bottom - 14, MIN_LIST);
    setMaxHeight(Math.min(room, MAX_LIST));
  }, [open]);

  useEffect(() => {
    if (open) listRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [open, maxHeight]);

  return (
    <div ref={rootRef} className={`relative w-full min-w-0 ${open ? "z-30" : ""}`}>
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className={`${className} flex items-center justify-between gap-3 text-left`}
      >
        <span className={`truncate ${value ? "" : "text-[#757575]"}`}>{value || placeholder}</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#757575"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          style={{ maxHeight }}
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 w-full overflow-y-auto overscroll-contain rounded-[10px] border border-[#E5E5E5] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.16)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onSelect(name, option);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                    isSelected
                      ? "bg-[#D90916] text-white"
                      : "text-black hover:bg-[#D90916] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
