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
import Crochet from "./features/pages/Crochet"
import { products } from "./features/components/crochet/ItemCatalogue"
import { ItemPage } from "./features/components/crochet/ItemPage"

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
    location: "/crochet",
    displayValue: "Crochet",
  },
  { location: "/aboutme", displayValue: "About Me" },
  { location: "/contact", displayValue: "Contact" },
  { location: "/pilates", displayValue: "Other Projects" },
]

const productPages = products.map((product) => {
  return {
    path: product,
    element: <ItemPage />,
  }
})

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
        path: "crochet",
        element: <Crochet />,
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
      {
        path: "shop/leggy-frog",
        element: <ItemPage />,
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
