import "uikit/dist/css/uikit.css"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Home } from "./features/home/home"
import { About } from "./features/pages/about"
import PilatesHome from "./features/pilates/PilatesHome"
import Navbar from "./features/navigation/Navbar"
import { useState } from "react"

export default function App() {
  const [showShop, setShowShop] = useState(true)
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const handleClick = (buttonClicked: string) => {
    console.log("buttonClicked", buttonClicked)
    switch (buttonClicked) {
      case "shop": {
        setShowAbout(false)
        setShowContact(false)
        setShowShop(true)
        break
      }
      case "about": {
        setShowAbout(true)
        setShowContact(false)
        setShowShop(false)
        break
      }
      case "contact": {
        setShowAbout(false)
        setShowContact(true)
        setShowShop(false)
        break
      }
    }
  }
  // console.log(showMove)

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {showShop && <Home />}
      {showAbout && <About />}
      {showContact && <PilatesHome />}
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
