"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { CurriculumItem } from "@/constants/content";

export function Accordion({ items }: { items: CurriculumItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] light:divide-neutral-200 light:border-neutral-200 light:bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `module-panel-${index}`;
        const buttonId = `module-button-${index}`;

        return (
          <div key={item.title}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-white/[0.04] light:hover:bg-neutral-75 small:px-6"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-500/15 text-xs font-semibold text-primary-300 light:bg-primary-50 light:text-primary-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white light:text-neutral-950 small:text-base">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs text-white/45 light:text-neutral-500">
                  {item.duration}
                </span>
              </span>
              <FiChevronDown
                className={`size-5 shrink-0 text-white/50 transition light:text-neutral-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-6 text-white/58 light:text-neutral-600 small:px-6 small:pl-[4.75rem]">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
