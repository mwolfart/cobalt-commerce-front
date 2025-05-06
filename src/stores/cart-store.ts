import { CartProductEntity } from "@/entities/product";
import { createStore } from "zustand/vanilla";

export type CartState = {
  items: {
    product: CartProductEntity;
    amount: number;
  }[];
  totalPrice: number;
  totalQty: number;
};

export type CartActions = {
  add: (product: CartProductEntity, qty: number) => void;
  remove: (id: string, qty: number) => void;
};

export type CartStore = CartState & CartActions;

export const initCartStore = (): CartState => {
  return {
    items: [],
    totalPrice: 0,
    totalQty: 0,
  };
};

export const defaultInitState: CartState = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    add: (product: CartProductEntity, amount: number) =>
      set((state) => {
        const existingItem = state.items.find(
          (item) => item.product.id === product.id
        );
        if (existingItem) {
          existingItem.amount += amount;
        } else {
          state.items.push({ product, amount });
        }
        return {
          items: [...state.items],
          totalPrice: state.totalPrice + amount * product.price,
          totalQty: state.totalQty + amount,
        };
      }),
    remove: (id: string, amount: number) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.product.id === id);

        if (!existingItem) return state;

        existingItem.amount -= amount;
        if (existingItem.amount <= 0) {
          state.items = state.items.filter((item) => item.product.id !== id);
        }
        return {
          items: [...state.items],
          totalPrice: state.totalPrice - amount * existingItem.product.price,
          totalQty: state.totalQty - amount,
        };
      }),
  }));
};
