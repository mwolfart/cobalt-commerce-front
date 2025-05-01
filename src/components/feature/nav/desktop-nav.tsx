import Link from "next/link";
import { NavItem } from "./types";

type Props = {
  items: NavItem[];
};

export const DesktopNav = ({ items }: Props) => {
  return (
    <nav className="hidden sm:flex items-center justify-center w-full bg-blue-400">
      <ul className="flex items-center justify-center bg-white gap-[1px]">
        {items.map(({ title, subitems, href }, index) => (
          <li key={index} className="relative bg-blue-400 group px-4 py-2">
            <Link className="text-white font-semibold text-lg" href={href}>
              {title}
            </Link>
            {subitems && subitems.length > 0 && (
              <div className="absolute top-[44px] left-0 w-fit h-fit bg-white shadow-lg p-4 hidden group-hover:block">
                <ul className="flex flex-col gap-2">
                  {subitems?.map((subitem, subindex) => (
                    <li key={subindex} className="">
                      <Link
                        className="font-semibold text-sky-800"
                        href={subitem.href}
                      >
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
