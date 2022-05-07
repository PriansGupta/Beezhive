import React from "react";
import "./lottie.css";
import LottiePlay from "react-lottie-player";
import Card from "../../../Animations/card.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Card,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Lottie = () => {
  return (
    <div className="lottie">
      <LottiePlay options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Lottie;
