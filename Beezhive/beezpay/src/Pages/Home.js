import Landing from "../Components/HomePage/Body/landing";
import Header from "../Components/HomePage/Header/Header";
import LottiePlay from "../Components/HomePage/Lottie/lottie";
import Credit from "../Components/HomePage/Credit/credit";
import Join from "../Components/HomePage/JoinWaitlist/join";
import Details from "../Components/HomePage/Details/details";
import Download from "../Components/HomePage/Download/download";
import Footer from "../Components/Footer/footer";

const Home=()=> {
  return (
      <div className="first_page">
        <section className="Home">
          <Header></Header>
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
        <section className="Footer">
          <Footer></Footer>
        </section>
      </div>
  );
}

export default Home;
