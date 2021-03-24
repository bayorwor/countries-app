import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info justify-content-between fixed-top mb-5">
      <div className="container">
        <div>
          <Link to="/" className="nav-link text-white">
            COUNTRIES API
          </Link>
        </div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/countries" className="nav-link text-white">
              Countries
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
