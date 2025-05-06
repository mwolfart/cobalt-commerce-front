"use client";

import { CartStore, createCartStore, initCartStore } from "@/stores/cart-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const CartStoreProvider = ({ children }: Props) => {
  const storeRef = useRef<CartStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCartStore(initCartStore());
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
