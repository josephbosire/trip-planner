import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  return context;
};
