import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    console.log("No Items context provider found");
    alert("No ItemsContext found");
    return;
  }
  return context;
};
