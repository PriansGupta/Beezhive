import React from "react";
import "./join.css";
import cardlogo from "../../../Assets/Card_logo.png";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="Join_waitlist">
      <h1>Join waitlist Now</h1>
      <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
      <Link to="/join-waitlist">
        <button>Join Now</button>
      </Link>
      <img className="intro" src={cardlogo} alt="intro"></img>
    </div>
  );
};

export default Join;
