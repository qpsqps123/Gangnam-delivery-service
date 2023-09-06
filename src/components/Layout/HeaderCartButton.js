import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
