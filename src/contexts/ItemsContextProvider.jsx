import { createContext, useEffect, useState } from "react";
import { DEFAULT_ITEMS } from "../lib/constants";

export const ItemsContext = createContext();
const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || DEFAULT_ITEMS;
  });

  const totalNumberOfPackedItems = items.filter(
    (item) => item.packed === true,
  ).length;
  const totalNumberOfItems = items.length;

  const handleAddItem = (itemText) => {
    const newItem = {
      name: itemText,
      packed: false,
      id: new Date().getTime(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(DEFAULT_ITEMS);
  };

  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(updatedItems);
  };
  const handleMarkAllAsInComplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        totalNumberOfPackedItems,
        totalNumberOfItems,
        handleToggleItem,
        handleDeleteItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsInComplete,
        handleMarkAllAsComplete,
        handleAddItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
