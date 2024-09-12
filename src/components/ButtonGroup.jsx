import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete,
  );
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsInComplete },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button key={button.text} onClick={button.onClick} type="secondary">
          {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
