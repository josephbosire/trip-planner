const Counter = ({ totalNumberOfItems, totalNumberOfPackedItems }) => {
  return (
    <p>
      <b>{totalNumberOfPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
