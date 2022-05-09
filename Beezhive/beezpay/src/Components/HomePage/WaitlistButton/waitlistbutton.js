import React from "react";
import "./waitlistButton.css";
import { Link } from "react-router-dom";

const Waitlist = () => {
  return (
    <Link className="Join-link" to="/Join-waitlist">
      <div className="waitlist">
        <div className="placeholder">Join Waitlist</div>
        <div className="arrow">
          <span className="arrow_holder">
            <ion-icon name="play-sharp"></ion-icon>
            <ion-icon name="play-sharp"></ion-icon>
            <ion-icon name="play-sharp"></ion-icon>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Waitlist;
