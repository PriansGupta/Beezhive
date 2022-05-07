import React from "react";
import "./waitlistButton.css"

const Waitlist=()=>{

    return(
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
    );
}

export default Waitlist;