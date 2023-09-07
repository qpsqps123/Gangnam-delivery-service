import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <CartProvider>
      {isOpenModal && <Cart onCloseModal={handleCloseModal} />}
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
