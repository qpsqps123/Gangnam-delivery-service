import { createPortal } from "react-dom";

const Backdrop = ({ onCloseModal }) => {
  return <div onClick={onCloseModal}>backdrop</div>;
};

const ModalOverlay = () => {
  return <div>modal overlay</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = ({ onCloseModal }) => {
  return (
    <>
      {createPortal(<Backdrop onCloseModal={onCloseModal} />, portalElement)}
      {createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
