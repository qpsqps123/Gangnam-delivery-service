const CartItem = ({ id, name, price }) => {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <div>
          <span>{price}</span>
          <span>amount</span>
        </div>
      </div>
      <div>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
