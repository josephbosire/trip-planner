import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";

const SORTING_OPTIONS = [
  {
    label: "Sort by default",
    value: "default",
  },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy],
  );

  return (
    <ul>
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={SORTING_OPTIONS[0]}
            options={SORTING_OPTIONS}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default ItemList;
