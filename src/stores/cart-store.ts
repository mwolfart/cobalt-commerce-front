import { createStore } from "zustand/vanilla";

export type CartState = {
  items: {
    id: string;
    qty: number;
  }[];
  totalPrice: number;
  totalQty: number;
};

export type CartActions = {
  add: (id: string, qty: number, price: number) => void;
  remove: (id: string, qty: number, price: number) => void;
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
    add: (id: string, qty: number, price: number) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
          existingItem.qty += qty;
        } else {
          state.items.push({ id, qty });
        }
        return {
          items: [...state.items],
          totalPrice: state.totalPrice + qty * price,
          totalQty: state.totalQty + qty,
        };
      }),
    remove: (id: string, qty: number, price: number) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
          existingItem.qty -= qty;
          if (existingItem.qty <= 0) {
            state.items = state.items.filter((item) => item.id !== id);
          }
        }
        return {
          items: [...state.items],
          totalPrice: state.totalPrice - qty * price,
          totalQty: state.totalQty - qty,
        };
      }),
  }));
};
