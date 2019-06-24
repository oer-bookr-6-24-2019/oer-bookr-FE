import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavBar({ history }) {
  const loggedIn = localStorage.getItem("token");
  return (
    <div className="nav_bar_container">
      <nav>
        <NavLink to="/">{loggedIn ? "Home" : null}</NavLink>
        {loggedIn ? (
          <NavLink
            className="logout_button"
            to=""
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/");
            }}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink to="/">Log In</NavLink>
        )}
      </nav>
    </div>
  );
}

export default withRouter(NavBar);
