import Button from "./Button";

const ButtonGroup = ({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) => {
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllAsInComplete },
    { text: "Reset to initial", onClick: handleResetToInitial },
    { text: "Remove all items", onClick: handleRemoveAllItems },
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
