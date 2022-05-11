import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Join from "./Pages/JoinWaitlist";
import React from "react";
import Footer from "./Components/Footer/footer";
import Header from "./Components/HomePage/Header/Header";


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Join-waitlist" element={<Join />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <section className="Footer">
        <Footer></Footer>
      </section>
    </React.Fragment>
  );
}

export default App;
