import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const loggedIn = localStorage.getItem("token");
  return (
    <div className="nav_bar_container">
      <nav>
        <NavLink to="/">{loggedIn ? "Home" : null}</NavLink>
        {loggedIn ? <NavLink className="logout_button" to="">Logout</NavLink> : <NavLink to="/">Log In</NavLink>}
      </nav>
    </div>
  );
}
