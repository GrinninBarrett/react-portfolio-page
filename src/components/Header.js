import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const StyledNav = styled.nav`
    justify-content: space-between;
    height: 100%;
    padding: 1em 0;
  `;

  const StyledLogo = styled(Link)`
    &:hover {
      color: var(--green-accent);
    }
  `;

  return (
    <header>
      <div className="container">
        <StyledNav id="main-nav" className="flex-item nav-links-container">
          <StyledLogo id="header-logo" className="logo base-text" to="/">
            T
          </StyledLogo>
          <div id="nav-links">
            <div id="nav-menu" className="flex-item nav-list">
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Home
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/about"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                About
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/projects"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Projects
              </NavLink>
              <NavLink
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/contact"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </StyledNav>
      </div>
    </header>
  );
};

export default Header;
