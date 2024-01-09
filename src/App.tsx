import "uikit/dist/css/uikit.css"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Shop } from "./features/shop/shop"
import { About } from "./features/pages/about"
import PilatesHome from "./features/pilates/PilatesHome"
import Navbar from "./features/navigation/Navbar"
import { useState } from "react"

export default function App() {
  const [showShop, setShowShop] = useState(true)

  return (
    <div className="App">
      <Shop />
    </div>
  )
}
