import React from "react";
import "./lottie.css";
import Lottie from "react-lottie-player";
import * as animationData from "../../../Animations/card.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LottiePlay = () => {
  return (
    <div className="lottie">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottiePlay;
