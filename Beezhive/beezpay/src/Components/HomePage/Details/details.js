import React from "react";
import Lottie from "react-lottie-player";
import "./details.css"
import card from "../../../Animations/card.json"
// import Lottie from "lottie-web";

const Details=()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
       animationData:card,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
    return(
        <div className="details">
            <div className="lottie_1">
            <Lottie options={defaultOptions} height={300} width={300} />
                <div className="points_1">
                    <h3>Why Beezpay Plus?</h3>
                    <div></div>
                </div>
            </div>
            <div className="lottie_2"></div>
        </div>
    );
}

export default Details;