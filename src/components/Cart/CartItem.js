const CartItem = ({ name, amount, price, onAdd, onRemove }) => {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <div>
          <span>$ {price}</span>
          <span>x {amount}</span>
        </div>
      </div>
      <div>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
