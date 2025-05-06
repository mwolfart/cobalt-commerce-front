"use client";

import { useCartStore } from "@/providers/cart-provider";
import Link from "next/link";

export const NavCartButton = () => {
  const { totalQty } = useCartStore((state) => state);
  return (
    <Link href="/cart" className="relative flex items-center">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="absolute -right-1 -bottom-2 bg-blue-400 text-white rounded-full font-bold px-1 text-xs">
        {totalQty}
      </span>
    </Link>
  );
};
