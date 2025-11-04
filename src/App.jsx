import './App.css'
import ColorWindow from "./Components/ColorWindow.jsx";

function App() {
  return (
    <div className="App">
      <h1>What the Hex!</h1>
      <p style={{color: 'black', fontSize: 'small'}}>Click color code to copy</p>
      <ColorWindow />
    </div>
  )
}

export default App
