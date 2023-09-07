import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = ({ onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <CartItem />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>777</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
