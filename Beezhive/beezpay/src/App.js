import './App.css';
import Lottie from 'react-lottie-player';
import Landing from './Components/HomePage/Body/landing';
import Header from './Components/HomePage/Header/Header';


function App() {
  return (
    <div className="App">
      <div className='first_page'>
      <Header></Header>
      <Landing></Landing>
      <Lottie></Lottie>
      </div>
    </div>
  );
}

export default App;
