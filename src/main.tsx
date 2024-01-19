import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Home from "./features/pages/Home"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./features/pages/About"
import Navbar from "./features/navigation/Navbar"
import PilatesHome from "./features/pilates/PilatesHome"
import { Contact } from "./features/pages/Contact"
import Shop from "./features/pages/Shop"

export type Page = {
  location: string
  displayValue: string
}

export const allPages: Page[] = [
  {
    location: "/",
    displayValue: "Home",
  },
  {
    location: "/shop",
    displayValue: "Shop",
  },
  { location: "/aboutme", displayValue: "About Me" },
  { location: "/contact", displayValue: "Contact" },
  { location: "/pilates", displayValue: "Other Projects" },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar navPages={allPages} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "aboutme",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pilates",
        element: <PilatesHome />,
      },
    ],
  },

  {},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
