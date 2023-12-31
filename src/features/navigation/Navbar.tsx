export interface Props {
  handleClick: (buttonClicked: string) => void
}

export default function Navbar({ handleClick }: Props) {
  return (
    <nav className="uk-navbar-container">
      <div className="uk-container">
        <div className="uk-navbar-left">
          <a
            className="uk-navbar-item uk-logo"
            aria-label="Back to Home"
            onClick={() => handleClick("home")}
          >
            <h2 className="uk-heading-small">Xander Creative</h2>
          </a>

          <div className="uk-navbar-right uk-margin-right">
            <ul className="uk-navbar-nav">
              <li>
                <a onClick={() => handleClick("move")}>StretchMinder</a>
              </li>
              <li>
                <a onClick={() => handleClick("pilates")}>Pilates</a>
                {/* <a href="#">Pilates</a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
