import React from "react";
import menu from "../../../Assets/menu.png";
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
      </div>
    </div>
  );
};

export default Landing;
