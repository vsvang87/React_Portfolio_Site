import { useState } from "react";
import "../css/styles.scss";
import Navlinks from "./Navlinks";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="header-nav-content">
          <Navlinks />
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
