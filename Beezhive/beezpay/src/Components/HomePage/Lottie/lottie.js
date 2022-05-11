import { React, useEffect, useRef } from "react";
import "./lottie.css";
import Lottie from "lottie-web";
import Card from "../../../Animations/card.json";

const LottiePlay = () => {
  const lottieBox = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      lottieBox: lottieBox.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Card,
    });
  }, []);
  return <div className="lottieBox" ref={lottieBox}></div>;
};

export default LottiePlay;
