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
      <div className="modal_thnx">
        <span onClick={props.onClose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </span>
        <h2>
          YOU'RE ON OUR <br></br>WAITLIST MY FRIEND{" "}
        </h2>
        <div className="waitlist_number">
          <div>#1234</div>
          <div>N/A</div>
        </div>
        <div className="Approved">
          <p>
            We will send you an email as soon as your Beezpay Plus application
            is approved.<br></br>See you soon
          </p>
        </div>
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
        <ModalOverlay
          onClose={props.onClose}
          display={props.display}
          name={props.name}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Thanks;
