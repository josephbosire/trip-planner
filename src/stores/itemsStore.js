import { create } from "zustand";
import { DEFAULT_ITEMS } from "../lib/constants";

export const useItemsStore = create((set) => ({
  items: DEFAULT_ITEMS,
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: DEFAULT_ITEMS }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const updatedItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: updatedItems };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      return { items: updatedItems };
    });
  },
  markAllAsInComplete: () => {
    set((state) => {
      const updatedItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: updatedItems };
    });
  },
  addItem: (itemText) => {
    const newItem = {
      name: itemText,
      packed: false,
      id: new Date().getTime(),
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
}));
