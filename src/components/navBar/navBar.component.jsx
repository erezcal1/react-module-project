import { useSelector } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const showLogIn = () => {
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create-card">
              Create Business Card
            </NavLink>
          </li>
          <li className="nav-item">{userData.email}</li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              login
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    //rename from class to className
    <nav
      className={`navbar navbar-expand-lg navbar-light mb-2 ${
        loggedIn ? "bg-success" : "bg-warning"
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">
                About
              </NavLink>
            </li>

            {showLogIn()}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
