import React from "react";
import "./Details.css";

const FormDetails = () => {
  return (
    <div className="form-details">
      <div className="form-lottie"></div>
      <div className="form-details">
        <div>
          <h1>Join Waitlist Now</h1>
          <br></br>
          <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
        </div>
          <div className="form">
              <form>
                  <input type="text" placeholder="Name"></input>
                  <input type="email" placeholder="Email"></input>
                  <input type="text" placeholder="Referal Code"></input>
                  <div>
                      <input type="text" placeholder="+91"></input>
                      <input type="number" placeholder="Phone No."></input>
                  </div>
                  <button type="submit">Join Now</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default FormDetails;

