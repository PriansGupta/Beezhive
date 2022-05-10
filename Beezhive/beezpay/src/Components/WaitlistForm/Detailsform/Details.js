import React, { useState } from "react";
import "./Details.css";
import Otp from "../Modal/OtpModal/otp";
import Transition from "react-transition-group"

const FormDetails = () => {
  const [display, setDisplay] = useState(false);

  const ModalDisplay = (e) => {
      e.preventDefault();
    setDisplay(true);
  };

const CloseModal=(value)=>{
    console.log(value)
    setDisplay(!display)
}
  return (
    <React.Fragment>
      {display && <Otp onClose={CloseModal}></Otp>}
      <div className="form-data">
        <div className="form-lottie"></div>
        <div className="form-details">
          <div>
            <h1>Join Waitlist Now</h1>
            <br></br>
            <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
          </div>
          <div className="form">
            <form onSubmit={ModalDisplay}>
              <input required type="text" placeholder="Name"></input>
              <input required type="email" placeholder="Email"></input>
              <input type="text" placeholder="Referal Code"></input>
              <div>
                <input required type="text" placeholder="+91"></input>
                <input required type="number" placeholder="Phone No."></input>
              </div>
              <button type="submit">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormDetails;
