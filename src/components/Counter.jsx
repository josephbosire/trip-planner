import { useItemsStore } from "../stores/itemsStore";

const Counter = () => {
  const items = useItemsStore((state) => state.items);
  const totalNumberOfItems = items.length;
  const totalNumberOfPackedItems = items.filter((item) => {
    return item.packed === true;
  }).length;
  return (
    <p>
      <b>{totalNumberOfPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
