import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./otp.css";
import Thanks from "../ThanksModal/Thanks";

const Otp = (props) => {
  const [verify, setVerify] = useState(false);

  const Verify = () => {
    props.onClose();
    props.onVerify();
    setVerify(!verify);
  };

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
      <React.Fragment>
        {verify && <Thanks></Thanks>}
        <div className="modal">
          <span onClick={props.onClose}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </span>
          <div className="otp_lottie"></div>
          <div className="Verificatiion_code">
            <h2>Verificatiion Code</h2>
            <br></br>
            <p>Please Enter the Code Sent</p>
            <br></br>
            <p>
              To <b>+11234567890</b>
            </p>
          </div>
          <div className="otp_input">
            <form>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
            </form>
          </div>
          <div className="resend">
            <p>Resend</p>
            <p>1:00</p>
          </div>
          <div className="verify">
            <button onClick={Verify}>Verify</button>
          </div>
        </div>
      </React.Fragment>
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

export default Otp;
