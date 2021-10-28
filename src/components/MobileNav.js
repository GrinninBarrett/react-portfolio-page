import React from "react";
import { StyledMobileNav } from "./MobileNav.styled";
import { bool } from 'prop-types';
import { NavLink } from "react-router-dom";

const MobileNav = ({ open, setOpen }) => {
  return (
    <StyledMobileNav open={open}>
      <NavLink exact to="/react-portfolio-page/" onClick={() => setOpen(!open)}>Home</NavLink>
      <NavLink exact to="/react-portfolio-page/about" onClick={() => setOpen(!open)}>About</NavLink>
      <NavLink exact to="/react-portfolio-page/projects" onClick={() => setOpen(!open)}>Projects</NavLink>
      <NavLink exact to="/react-portfolio-page/contact" onClick={() => setOpen(!open)}>Contact</NavLink>
    </StyledMobileNav>
  );
};

MobileNav.propTypes = {
  open: bool.isRequired,
}

export default MobileNav;
