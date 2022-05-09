import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Join from "./Pages/JoinWaitlist";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Join-waitlist" element={<Join />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
