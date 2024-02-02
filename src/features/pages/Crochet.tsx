import logo from "./logo.svg"
import { Counter } from "../counter/Counter"
// import "../../App.css"
import { Index } from "../components/crochet/Index"

import PilatesHome from "../pilates/PilatesHome"
import Navbar from "../navigation/Navbar"
import { useState } from "react"

export default function Crochet() {
  const [showShop, setShowShop] = useState(true)

  return (
    <div className="App">
      <Index />
    </div>
  )
}
