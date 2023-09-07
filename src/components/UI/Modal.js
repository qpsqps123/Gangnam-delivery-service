import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onCloseModal }) => {
  return (
    <div className={classes.backdrop} onClick={onCloseModal}>
      backdrop
    </div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
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
