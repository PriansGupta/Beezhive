import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="connect">
        Connect With Us
        <div className="platforms">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
