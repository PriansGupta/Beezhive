import React from "react";
import "./credit.css";
import back1 from "../../../Assets/credit_back_1.png";

const Credit = () => {
  return (
    <div className="credit_card_details">
      <div className="card">
        <img className="card_2" src={back1} alt="Credit card"></img>
        <div className="data">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Credit;
