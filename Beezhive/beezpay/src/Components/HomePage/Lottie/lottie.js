import React from "react";
import Lottie from "react-lottie-player";
import Credit from "../../../Animations/Credit_card";
import "./lottie.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Credit,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Lottie = () => {
  return (
    <div className="lottie">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Lottie;
