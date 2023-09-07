import { createPortal } from "react-dom";

const Backdrop = ({ onCloseModal }) => {
  return <div onClick={onCloseModal}>backdrop</div>;
};

const ModalOverlay = ({ children }) => {
  return <div>{children}</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {createPortal(<Backdrop onCloseModal={onCloseModal} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
