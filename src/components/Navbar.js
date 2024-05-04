import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
     <nav className="nav container" id="nav-bar">
       <NavLink to="/" className="nav__logo">
          <img src="../img/image.png" alt="Logo" className="nav__logo-img" />
       </NavLink>

       <div className={"nav__menu"} id="nav-menu">
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/Home" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/About" className="nav__link">
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/Auth" className="nav__link button">
               Login
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>

  )
}