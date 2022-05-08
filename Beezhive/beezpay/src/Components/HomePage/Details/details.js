import React from "react";
import Lottie from "react-lottie-player";
import "./details.css";
import card from "../../../Animations/card.json";

const Details = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: card,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="details">
      <div className="lottie_1">
        <div className="Lottie">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="points_1">
          <h3>Why Beezpay Plus?</h3>
          <div>
            <ul>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Use anywhere,Pay after 30 days</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Get upto $1000 credit limit</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Cashbacks on Purchases</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Pay at nearby stores</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lottie_2">
        <div className="points_1">
          <h3>How <b>Beezpay plus</b> is better than credit card?</h3>
          <div>
            <ul>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Pay at all nearby stores</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Cashbacks on every Purchase</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>No need Bank Account</p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p>Get credit card without credit score</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="Lottie">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default Details;
