import Link from "next/link";
import { MobileNav } from "../nav";
import { NavItem } from "../nav/types";

// TODO fix prop drilling
type Props = {
  items: NavItem[];
};

export const Header = ({ items }: Props) => {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-gray-100">
      <Link className="flex-grow text-sky-400 font-zain text-3xl" href="/">
        Cobalt Shop
      </Link>
      <MobileNav items={items} />
    </header>
  );
};
