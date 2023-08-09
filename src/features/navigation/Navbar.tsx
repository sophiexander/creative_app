export default function Navbar() {
  return (
    <nav className="uk-navbar-container">
      <div className="uk-navbar-left">
        <a
          className="uk-navbar-item uk-logo"
          href="#"
          aria-label="Back to Home"
        >
          <h2 className="uk-heading-small">Xander Creative</h2>
        </a>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Parent</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
