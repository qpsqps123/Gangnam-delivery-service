import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItem={handleAddItem} />
      </div>
    </li>
  );
};

export default MealItem;
