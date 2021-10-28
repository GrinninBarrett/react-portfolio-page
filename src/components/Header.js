import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav id="main-nav" className="flex-item nav-links-container">
          <Link id="header-logo" className="logo base-text" to="/">
            T
          </Link>
          <button
            id="hamburger-icon"
            className="hamburger hamburger--collapse"
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded="false"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div id="nav-links">
            <ul id="nav-menu" className="flex-item nav-list">
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Home
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/about"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                About
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/projects"
                activeStyle={{
                  backgroundColor: "#47684a",
                  color: "rgb(238, 238, 238)"
                }}
              >
                Projects
              </NavLink>
              <HashLink
                className="main-nav-item nav-item link green-link base-text"
                // TODO: update this link with new contact page
                to="/#contact"
              >
                Contact
              </HashLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
