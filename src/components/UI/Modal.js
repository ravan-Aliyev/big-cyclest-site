import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const contentClass = `${classes.modal} ${props.className}`;
  return (
    <div className={contentClass} style={props.style}>
      {props.children}
    </div>
  );
};

const Modal = function (props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className} style={props.style}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
