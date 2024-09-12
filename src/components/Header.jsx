import Counter from "./Counter";
import Logo from "./Logo";

const Header = ({ totalNumberOfItems, totalNumberOfPackedItems }) => {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        totalNumberOfPackedItems={totalNumberOfPackedItems}
      />
    </header>
  );
};

export default Header;
