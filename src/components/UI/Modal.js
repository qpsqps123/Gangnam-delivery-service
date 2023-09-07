import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div>backdrop</div>;
};

const ModalOverlay = () => {
  return <div>modal overlay</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = () => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
