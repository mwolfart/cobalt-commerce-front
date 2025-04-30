import { MobileNav } from "../mobile-nav";

// TODO fix prop drilling
type Props = {
  items: {
    title: string;
    subitems?: string[];
  }[];
};

export const Header = ({ items }: Props) => {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-gray-100">
      <span className="flex-grow text-sky-400 font-zain text-3xl">
        Cobalt Shop
      </span>
      <MobileNav items={items} />
    </header>
  );
};
