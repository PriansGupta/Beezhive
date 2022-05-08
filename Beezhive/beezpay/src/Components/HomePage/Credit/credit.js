import React, { Fragment } from "react";
import "./credit.css";
import back1 from "../../../Assets/credit_back_1.png";
import logo from "../../../Assets/Card_logo.png";

const Credit = () => {
  return (
    <Fragment>
      <div className="card">
        <img className="card_2" src={back1} alt="Credit card"></img>
        <div className="data">
          <div className="card_logo">
            <img className="logo_img" alt="Logo" src={logo}></img>
          </div>
          <div className="limit">Credit Limit:$10000</div>
          <div className="name_card">
            <div className="name">Priyansh</div>
            <div className="chip">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Credit;
