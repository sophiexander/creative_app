import "uikit/dist/css/uikit.css"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Home } from "./features/home/home"
import { Move } from "./features/timer/move"
import PilatesHome from "./features/pilates/PilatesHome"
import Navbar from "./features/navigation/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Move />
      <PilatesHome />
      {/* <Counter /> */}
      {/* <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
    </div>
  )
}

export default App
