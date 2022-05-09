import "./App.css";
import Home from "./Pages/Home";
import Router from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router path="\Home">
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
