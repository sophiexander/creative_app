import "uikit/dist/css/uikit.css"
import logo from "./logo.svg"
import { Counter } from "../counter/Counter"
// import "../../App.css"
import { Index } from "../components/shop/Index"

import PilatesHome from "../pilates/PilatesHome"
import Navbar from "../navigation/Navbar"
import { useState } from "react"
import { WelcomeIndex } from "../components/home/WelcomeIndex"

export default function Home() {
  const [showShop, setShowShop] = useState(true)

  return (
    <div className="App">
      <WelcomeIndex />
    </div>
  )
}
