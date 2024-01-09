import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./features/pages/about"
import Navbar from "./features/navigation/Navbar"
import PilatesHome from "./features/pilates/PilatesHome"
import { Contact } from "./features/pages/contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />,
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
