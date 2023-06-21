import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Navigation({ sidebar }) {
  console.log(sidebar);
  const [bar, setBar] = useState(false);
  const showSidebar = () => setBar(!bar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={bar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li>
              <Link to="/" className="path">
                <i class="fa-solid fa-house"></i> HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="path">
                <i class="fa-solid fa-user"></i> ABOUT
              </Link>
            </li>
            <li>
              <Link to="/project" className="path">
                <i class="fa-solid fa-diagram-project"></i> PROJECT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="path">
                <i class="fa-solid fa-address-book"></i> CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navigation;
