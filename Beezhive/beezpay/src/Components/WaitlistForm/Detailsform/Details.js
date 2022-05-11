import React, { useState,useRef,useEffect } from "react";
import form from "../../../Animations/form.json"
import Lottie from "lottie-web"
import "./Details.css";
import Otp from "../Modal/OtpModal/otp";
import Thanks from "../Modal/ThanksModal/Thanks";
import { Authentication } from "../../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const FormDetails = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: form,
    });
  }, []);

  const [display, setDisplay] = useState(false);
  const [verify, setVerify] = useState("NO");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const ModalDisplay = (e) => {
    e.preventDefault();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
        },
      },
      Authentication
    );
    signInWithPhoneNumber(
      Authentication,
      "+91" + phone,
      window.recaptchaVerifier
    )
      .then((result) => {
        window.confirmationResult = result;
      })
      .catch((error) => {
      });
    setDisplay(true);
  };

  const Verify = () => {
    setVerify("YES");
  };

  const CloseModal = (value) => {
    setDisplay(!display);
  };
  const CloseVerify = (value) => {
    setVerify("NO");
  };
  return (
    <React.Fragment>
      {display && (
        <Otp
          onClose={CloseModal}
          onVerify={Verify}
          name={name}
          phone={phone}
          email={email}
        ></Otp>
      )}
      {verify === "YES" && <Thanks onClose={CloseVerify}></Thanks>}
      <div id="sign-in-button"></div>
      <div className="form-data">
        <div className="form-lottie container" ref={container}></div>
        <div className="form-details">
          <div>
            <h1>Join Waitlist Now</h1>
            <br></br>
            <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
          </div>
          <div className="form">
            <form onSubmit={ModalDisplay}>
              <input
                required
                type="text"
                placeholder="Name"
                onChange={nameChange}
              ></input>
              <input
                required
                type="email"
                placeholder="Email"
                onChange={emailChange}
              ></input>
              <input type="text" placeholder="Referal Code"></input>
              <div>
                <input required type="text" placeholder="+91"></input>
                <input
                  required
                  type="number"
                  placeholder="Phone No."
                  onChange={phoneChange}
                ></input>
              </div>
              <button type="submit">Join Now</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormDetails;
