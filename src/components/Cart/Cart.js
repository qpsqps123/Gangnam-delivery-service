import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

import DUMMY_MENU from "../../dummy-menu";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddCartItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleRemoveCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={handleAddCartItem.bind(null, item)}
          onRemove={handleRemoveCartItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseModal={onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount}</span>
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
