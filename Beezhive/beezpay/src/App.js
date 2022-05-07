import './App.css';
import Landing from './Components/HomePage/Body/landing';
import Header from './Components/HomePage/Header/Header';
import LottiePlay from './Components/HomePage/Lottie/lottie';


function App() {
  return (
    <div className="App">
      <div className='first_page'>
      <Header></Header>
      <Landing></Landing>
      <LottiePlay></LottiePlay>
      </div>
    </div>
  );
}

export default App;
