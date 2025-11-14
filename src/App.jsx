import {useEffect} from 'react';
import ReactGA from 'react-ga4';
import './App.css'
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import ColorWindow from "./Components/ColorWindow.jsx";
import LearningReact from './Components/LearningReact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <div className='container'>
      <Nav />
      <Hero />
      <div className="App">
        <p style={{color: 'black', fontSize: 'small'}}>Click color code to copy</p>
      <ColorWindow />

      </div>
      <LearningReact />
      <Footer />
    </div>
  )
}

export default App
