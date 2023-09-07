import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = ({ onCloseModal }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <CartItem />
      <div>
        <span>Total Amount</span>
        <span>777</span>
      </div>
      <div>
        <button onClick={onCloseModal}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
