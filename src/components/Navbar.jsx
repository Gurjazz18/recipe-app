import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">

        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
              Home
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/recipe"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Recipe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/diet"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Diet
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/calorie"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Calorie
              </NavLink>
            </li>

            


          </ul>


          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;