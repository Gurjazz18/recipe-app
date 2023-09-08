import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const usenavigate=useNavigate()
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handlelogout=()=>{

    const auth = getAuth();
      signOut(auth).then(() => {
        usenavigate("/")
      }).catch((error) => {
        // An error happened.
      });

  }

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
              
                to="/calorie"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Calorie
              </NavLink>
            </li>

            
            <li className="nav-item">
              <NavLink
            
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
            
         
                activeClassName="active"
                className="nav-links"
                onClick={handlelogout}
           
               
               
              >
               Logout
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