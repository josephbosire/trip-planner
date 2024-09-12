import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!itemText) {
      alert("item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
