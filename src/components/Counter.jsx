import { useItemsContext } from "../lib/hooks";

const Counter = () => {
  const { totalNumberOfPackedItems, totalNumberOfItems } = useItemsContext();
  return (
    <p>
      <b>{totalNumberOfPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
