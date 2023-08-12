import "uikit/dist/css/uikit.css"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Home } from "./features/home/home"
import { Move } from "./features/timer/move"
import PilatesHome from "./features/pilates/PilatesHome"
import Navbar from "./features/navigation/Navbar"
import { useState } from "react"

export default function App() {
  const [showMove, setShowMove] = useState(false)
  const [showPilates, setShowPilates] = useState(false)
  const [showHome, setShowHome] = useState(true)

  const handleClick = (buttonClicked: string) => {
    console.log("buttonClicked", buttonClicked)
    switch (buttonClicked) {
      case "move": {
        setShowPilates(false)
        setShowHome(false)
        setShowMove(true)
        break
      }
      case "pilates": {
        setShowMove(false)
        setShowHome(false)
        setShowPilates(true)
        break
      }
      case "home": {
        setShowMove(false)
        setShowPilates(false)
        setShowHome(true)
        break
      }
    }

    console.log(
      "home: ",
      showHome,
      "move: ",
      showMove,
      "pilates: ",
      showPilates,
    )
  }
  // console.log(showMove)

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {showHome && <Home />}
      {showMove && <Move />}
      {showPilates && <PilatesHome />}
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
