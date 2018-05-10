import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
  return (
    <div className="nav-wrapper">
      <div className="nav-links">
        <div className="nav-link">
          <NavLink exact to="/" activeClassName="active-nav-link">
            Discussion
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/rules" activeClassName="active-nav-link">
            Rules
          </NavLink>
        </div>
      </div>
    </div>
  );
}
