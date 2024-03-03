import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">GM GM GM</div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
