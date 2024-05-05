import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/image.png"
import { AuthContext } from "./AuthContext";


export const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
     <nav className="nav container" id="nav-bar">
       <NavLink className="nav__logo">
          <img src={logo} alt="Logo" className="nav__logo-img" />
       </NavLink>

       <div className={"nav__menu"} id="nav-menu">
         <ul className="nav__list">
         <li className="nav__item">
             <NavLink to="/About" className="nav__link">
               About Us
             </NavLink>
           </li>
           {isLoggedIn ? (
            <>
              <li className="nav__item">
                <NavLink to="/Home" className="nav__link">
                  Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li className="nav__item">
              <NavLink to="/Auth" className="nav__link button">
                Login
              </NavLink>
            </li>
          )}
     
           
         </ul>
       </div>
     </nav>

  )
}