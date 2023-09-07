import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

import DUMMY_MENU from "../../dummy-menu";

const Cart = ({ onCloseModal }) => {
  const CartItems = DUMMY_MENU.map((item) => (
    <CartItem key={item.id} id={item.id} name={item.name} price={item.price} />
  ));

  return (
    <Modal onCloseModal={onCloseModal}>
      {CartItems}
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
