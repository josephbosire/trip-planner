const Button = ({ type, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
