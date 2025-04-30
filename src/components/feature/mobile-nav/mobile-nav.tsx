"use client";

import { useState } from "react";

type Props = {
  items: {
    title: string;
    subitems?: string[];
  }[];
};

export const MobileNav = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="relative flex items-center sm:hidden">
      <button
        className="material-symbols-outlined cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "close" : "menu"}
      </button>
      <div
        className={`fixed overflow-hidden right-0 top-[68px] h-full w-full p-8 bg-white z-30 transition duration-600 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {items.map(({ title, subitems }, index) => (
              <li key={index} className="text-blue-800 flex flex-col">
                <div className="flex gap-4 items-center">
                  <a className="flex-grow font-semibold text-lg" href="#">
                    {title}
                  </a>
                  {subitems && subitems.length > 0 && (
                    <button
                      className="material-symbols-outlined cursor-pointer"
                      onClick={() => {
                        if (activeCategory === index) {
                          setActiveCategory(null);
                        } else {
                          setActiveCategory(index);
                        }
                      }}
                    >
                      {activeCategory === index
                        ? "keyboard_arrow_up"
                        : "keyboard_arrow_down"}
                    </button>
                  )}
                </div>
                <div
                  className={`max-h-0 overflow-hidden transition-[max-height] duration-500 ${
                    activeCategory === index ? "max-h-[1000px]" : ""
                  }`}
                >
                  <ul className="flex flex-col gap-2 pl-4 pt-2">
                    {subitems?.map((subitem, subindex) => (
                      <li key={subindex}>
                        <a className="font-semibold text-blue-800" href="#">
                          {subitem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
