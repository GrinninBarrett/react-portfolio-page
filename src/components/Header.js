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

  const StyledNavLinksContainer = styled.div`
    @media screen and (max-width: 768px) {
      background-color: var(--background);
      display: none;
      position: absolute;
      top: 0;
      right: -1000;
      height: 100vh;
      width: 100vw;
      margin-top: 5em;
      z-index: 2;
    }
  `;

  return (
    <header>
      <div className="container">
        <StyledNav id="main-nav" className="flex-item nav-links-container">
          <StyledLogo id="header-logo" className="logo base-text" to="/">
            T
          </StyledLogo>
          <StyledNavLinksContainer id="nav-links">
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
          </StyledNavLinksContainer>
        </StyledNav>
      </div>
    </header>
  );
};

export default Header;
