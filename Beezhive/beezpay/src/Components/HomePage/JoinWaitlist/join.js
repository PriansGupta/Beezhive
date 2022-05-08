import React from "react";
import "./join.css";
import cardlogo from "../../../Assets/Card_logo.png"

const Join=()=>{
return(
    <div className="Join_waitlist">
        <h1>Join waitlist Now</h1>
        <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
        <button>Join Now</button>
        <img className="intro" src={cardlogo} alt="intro"></img>
    </div>
);
}

export default Join;