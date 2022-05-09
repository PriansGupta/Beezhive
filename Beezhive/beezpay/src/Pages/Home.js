import Landing from "../Components/HomePage/Body/landing";
import LottiePlay from "../Components/HomePage/Lottie/lottie";
import Credit from "../Components/HomePage/Credit/credit";
import Join from "../Components/HomePage/JoinWaitlist/join";
import Details from "../Components/HomePage/Details/details";
import Download from "../Components/HomePage/Download/download";

const Home = () => {
  return (
    <div className="first_page">
      <section className="Home">
        <Landing></Landing>
        <LottiePlay></LottiePlay>
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
