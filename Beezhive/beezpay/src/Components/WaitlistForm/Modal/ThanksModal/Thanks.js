import ReactDOM from "react-dom";
import React from "react";
import "./Thanks.css";

const Thanks = (props) => {
  const Backdrop = (props) => {
    return (
      <div
        className={`backdrop ${props.display ? "openBd" : "closeBd"}`}
        onClick={props.onClose}
      />
    );
  };
  const ModalOverlay = (props) => {
    return (
      <div className="modal">
        <span onClick={props.onClose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </span>
       
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} display={props.display} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} display={props.display} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Thanks;
