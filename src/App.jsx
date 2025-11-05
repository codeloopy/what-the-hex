import './App.css'
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import ColorWindow from "./Components/ColorWindow.jsx";
import LearningReact from './Components/LEarningReact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
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
