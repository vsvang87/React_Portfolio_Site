import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.scss";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="header-nav-content">
          <h3>
            <Link to="/" className="logo">
              .VANG
            </Link>
          </h3>
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
                <i class="fa-solid fa-diagram-project"></i> PROJECT
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i class="fa-solid fa-address-book"></i> CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className="line"></div>
      </div>
    </div>
  );
};

export default Header;
