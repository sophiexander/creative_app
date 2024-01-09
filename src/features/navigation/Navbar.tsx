import { Link, Outlet } from "react-router-dom"

export interface Props {
  // handleClick: (buttonClicked: string) => void
}

export default function Navbar({}: Props) {
  return (
    <div>
      <nav className="uk-navbar-container">
        <div className="uk-container">
          <div className="uk-navbar-left">
            <Link to={"/"} className="uk-navbar-item uk-logo">
              {" "}
              <h2 className="uk-heading-small">Xander Creative</h2>
            </Link>

            <div className="uk-navbar-right uk-margin-right">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to={"aboutme"}>About</Link>
                </li>
                <li>
                  <Link to={"contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
