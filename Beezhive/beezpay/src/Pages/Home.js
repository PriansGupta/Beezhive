import {React,useEffect,useRef} from "react";
import man from "../Animations/man.json"
import Lottie from "lottie-web";
import Landing from "../Components/HomePage/Body/landing";
import Credit from "../Components/HomePage/Credit/credit";
import Join from "../Components/HomePage/JoinWaitlist/join";
import Details from "../Components/HomePage/Details/details";
import Download from "../Components/HomePage/Download/download";

const Home = () => {
    const landingLottie = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container:landingLottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: man,
    });
  }, []);

  return (
    <div className="first_page">
      <section className="Home">
        <Landing></Landing>
        <div className="LandingLottie" ref={landingLottie}></div>
      </section>
      <section className="card">
        <Credit></Credit>
        <Join></Join>
      </section>
      <section className="Details">
        <Details></Details>
      </section>
      <section className="Download">
        <Download></Download>
      </section>
    </div>
  );
};

export default Home;
