import React from "react";
import menu from "../../../Assets/menu.png";
import Waitlist from "../WaitlistButton/waitlistbutton";
import Lottie from "react-lottie-player"
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <img src={menu} alt="menu"></img>
      <div className="slogan">
        <h1>
          We Completely <br></br>Reimagined Everything <br></br>About Credit
          Cards
        </h1>
        <br></br>
        <h3>
          Canada's First Buy now Pay Later App<br></br>Powered by Beezpay
        </h3>
      </div>
      <Waitlist></Waitlist>
      <Lottie
        src="9711.json"
        background="transparent"
        speed="1"
        style="width: 911px; height: 1620px;"
        loop
        autoplay
      ></Lottie>
    </div>
  );
};

export default Landing;
