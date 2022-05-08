import React from "react";
import "./download.css";

const Download = () => {
  
  return (
    <div className="download">
        <h1>Download The <br></br> Beezhive</h1>
        <div className="download_button">
            <button><ion-icon name="logo-google-playstore"></ion-icon> Play Store</button>
            <button><ion-icon name="logo-apple"></ion-icon> Apple Store</button>
        </div>
    </div>
  );
};

export default Download;
