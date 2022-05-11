import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./otp.css";
import Thanks from "../ThanksModal/Thanks";

const Otp = (props) => {
  const [verify, setVerify] = useState(false);
  const [code, SetCode] = useState("");

  const OtpHandler = (e) => {
    SetCode(e.target.value);
  };
  const VerifyOtp = () => {
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
      })
      .catch((error) => {
        console.log(error);
      });
    SendData({
      id: "iyNQC82WxWXwTwvYqqXZ5jqnGVx2",
      name: "priyansh",
      email: "priyanshg615@gmail.com",
      number: "+918423364688",
    });
    props.onClose();
    props.onVerify();
    setVerify(!verify);
  };
  const SendData = (Data) => {
    setTimeout(() => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(Data),
      };
      fetch(
        "https://us-central1-beezhive-79e2f.cloudfunctions.net/app/api/waitlist",
        requestOptions
      )
        .then(async (response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 100);
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
      const Test=<Thanks name={props.name}></Thanks>;
    return (
      <React.Fragment>
        {verify && Test }
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
              To <b>{`+91${props.phone}`}</b>
            </p>
          </div>
          <div className="otp_input">
            <form>
              <input type="text" value={code} onChange={OtpHandler}></input>
            </form>
          </div>
          <div className="resend">
            <p>Resend</p>
            <p>1:00</p>
          </div>
          <div className="verify">
            <button onClick={VerifyOtp}>Verify</button>
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
        <ModalOverlay
          onClose={props.onClose}
          display={props.display}
          phone={props.phone}
          name={props.name}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Otp;
