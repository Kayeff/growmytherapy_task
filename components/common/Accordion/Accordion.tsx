"use client";
import { AccordionT } from "@/utils/constants/static";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type AccordionComponentProps = {
  array: AccordionT[];
};

export default function Accordion({ array }: AccordionComponentProps) {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  function handleClick(id: string) {
    if (id === activeAccordion) setActiveAccordion("");
    else setActiveAccordion(id);
  }

  return (
    <ul className="w-full">
      {array.map((item) => (
        <li
          key={item.id}
          className="w-full p-2 flex flex-col gap-4 border-t border-foreground/20 last:border-b"
        >
          <div
            onClick={() => handleClick(item.id)}
            className="w-full flex items-center justify-between gap-2 cursor-pointer group"
          >
            <h5 className="text-base md:max-lg:text-lg lg:max-xl:text-xl xl:text-3xl tracking-tighter font-geist-sans font-medium group-hover:underline">
              {item.question}
            </h5>
            {item.id === activeAccordion ? (
              <Minus strokeWidth={1} />
            ) : (
              <Plus strokeWidth={1} />
            )}
          </div>
          {item.id === activeAccordion && (
            <div>
              <p className="text-sm md:max-lg:text-base lg:text-lg tracking-tight font-geist-sans text-foreground/70">
                {item.answer}
              </p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
