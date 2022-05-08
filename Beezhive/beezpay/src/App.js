import "./App.css";
import Landing from "./Components/HomePage/Body/landing";
import Header from "./Components/HomePage/Header/Header";
import LottiePlay from "./Components/HomePage/Lottie/lottie";
import Credit from "./Components/HomePage/Credit/credit";

function App() {
  return (
    <div className="App">
      <div className="first_page">
        <section className="Home">
          <Header></Header>
          <Landing></Landing>
          <LottiePlay></LottiePlay>
        </section>
        <section className="card">
          <Credit></Credit>
        </section>
      </div>
    </div>
  );
}

export default App;
