import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseModal }) => {
  const [hasItem, setHasItem] = useState(false);

  const cartCtx = useContext(CartContext);

  const handleAddCartItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleRemoveCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
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

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      setHasItem(false);
    } else {
      setHasItem(true);
    }
  }, [cartCtx.items.length]);

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
        {hasItem ? (
          <button className={classes.button}>Order</button>
        ) : (
          <button className={classes["button--disabled"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
