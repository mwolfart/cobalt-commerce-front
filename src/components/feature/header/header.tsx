import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-sky-100">
      <Image src="/logo.png" alt="Cobalt Shop" width={128} height={24} />
    </header>
  );
};
