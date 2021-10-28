import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav id="main-nav" className="flex-item nav-links-container">
          <Link id="header-logo" className="logo base-text" to="/">
            T
          </Link>
          <div id="nav-links">
            <ul id="nav-menu" className="flex-item nav-list">
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/react-portfolio-page/"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Home
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/react-portfolio-page/about"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                About
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/react-portfolio-page/projects"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Projects
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/react-portfolio-page/contact"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
