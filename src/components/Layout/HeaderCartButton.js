import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onOpenModal }) => {
  return (
    <button
      className={`${classes.button} ${classes.bump}`}
      onClick={onOpenModal}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
