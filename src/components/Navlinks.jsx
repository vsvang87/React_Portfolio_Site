import React from "react";
import { Link } from "react-router-dom";

function Navlinks() {
  return (
    <div className="navbar-content">
      <div className="logo-div">
        <h3>
          <Link to="/" className="logo">
            .VANG
          </Link>
        </h3>
      </div>

      <ul className="navlinks">
        <li>
          <Link to="/">
            <i class="fa-solid fa-house"></i> HOME
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fa-solid fa-user"></i> ABOUT
          </Link>
        </li>
        <li>
          <Link to="/project">
            <i class="fa-solid fa-file"></i> PROJECT
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i class="fa-solid fa-address-book"></i> CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navlinks;
