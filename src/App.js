import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && <Modal onCloseModal={handleCloseModal} />}
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
