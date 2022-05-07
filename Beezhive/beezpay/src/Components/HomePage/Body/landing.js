import React from "react";
import menu from "../../../Assets/menu.png";
import Waitlist from "../WaitlistButton/waitlistbutton";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <img src={menu} alt="menu"></img>
      <div className="slogan">
        <h1>
          We Completely <br></br>
          <span style={{ color: "#FADE31" }}>Reimagined </span>Everything{" "}
          <br></br>About Credit Cards
        </h1>
        <br></br>
        <h3>
          Canada's First Buy now Pay Later App<br></br>Powered by Beezpay
        </h3>
      </div>
      <Waitlist></Waitlist>
    </div>
  );
};

export default Landing;
