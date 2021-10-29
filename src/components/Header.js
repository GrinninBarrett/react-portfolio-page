import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav id="main-nav" className="flex-item nav-links-container">
          <NavHashLink id="header-logo" className="logo base-text" to="/react-portfolio-page/">
            T
          </NavHashLink>
          <div id="nav-links">
            <ul id="nav-menu" className="flex-item nav-list">
              <NavHashLink
                className="main-nav-item nav-item link green-link base-text"
                to="/"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Home
              </NavHashLink>
              <NavHashLink
                className="main-nav-item nav-item link green-link base-text"
                to="/about"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                About
              </NavHashLink>
              <NavHashLink
                className="main-nav-item nav-item link green-link base-text"
                to="/projects"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Projects
              </NavHashLink>
              <NavHashLink
                className="main-nav-item nav-item link green-link base-text"
                to="/contact"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Contact
              </NavHashLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
