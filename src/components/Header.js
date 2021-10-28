import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // const hamburgerToggle = (event) => {
  //   event.preventDefault();

  //   const hamburgerIcon = document.querySelector('#hamburger-icon');
  //   const navLinksEl = document.querySelector('#nav-links');

  //   let menuOpen = false;
  //   hamburgerIcon.classList.toggle("is-active");
  //   if (!menuOpen) {
  //       navLinksEl.style.display = "block";
  //       navLinksEl.style.right = "0";
  //       hamburgerIcon.setAttribute("aria-expanded", "true");
  //       menuOpen = true;
  //   } else {
  //       navLinksEl.style.display = "none";
  //       navLinksEl.style.right = "-1000";
  //       hamburgerIcon.setAttribute("aria-expanded", "false");
  //       menuOpen = false;
  //   }
  // }

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
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact to="/contact"
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
