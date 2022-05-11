import { React, useRef } from "react";
import "./lottie.css";
import Lottie from "lottie-web";

const lottie = useRef(null);

useRef(()=>{
Lottie.loadAnimation({
    lottie:lottie.current,
})
},[])
const LottiePlay = () => {
  return <div className="lottie" ref={lottie}></div>;
};

export default LottiePlay;
