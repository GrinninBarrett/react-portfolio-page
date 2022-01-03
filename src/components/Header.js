import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  // Styled Components

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

  const StyledMainNavItem = styled(NavLink)`
    margin-left: 75px;

    @media screen and (max-width: 768px) {
      margin: 2em 0;
    }
  `;

  const StyledNavList = styled.div`
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 1em;
      padding: 0;
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
            <StyledNavList id="nav-menu" className="flex-item nav-list">
              <StyledMainNavItem
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Home
              </StyledMainNavItem>
              <StyledMainNavItem
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/about"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                About
              </StyledMainNavItem>
              <StyledMainNavItem
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/projects"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Projects
              </StyledMainNavItem>
              <StyledMainNavItem
                className="main-nav-item nav-item link green-link base-text"
                exact
                to="/contact"
                activeStyle={{
                  backgroundColor: '#47684a',
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Contact
              </StyledMainNavItem>
            </StyledNavList>
          </StyledNavLinksContainer>
        </StyledNav>
      </div>
    </header>
  );
};

export default Header;
