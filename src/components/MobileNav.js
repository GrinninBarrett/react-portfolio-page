import React from "react";
import { StyledMobileNav } from "./MobileNav.styled";
import { bool } from 'prop-types';
import { NavLink } from "react-router-dom";

const MobileNav = ({ open, setOpen }) => {
  return (
    <StyledMobileNav open={open}>
      <NavLink to="/" onClick={() => setOpen(!open)}>Home</NavLink>
      <NavLink to="/about" onClick={() => setOpen(!open)}>About</NavLink>
      <NavLink to="/projects" onClick={() => setOpen(!open)}>Projects</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(!open)}>Contact</NavLink>
    </StyledMobileNav>
  );
};

MobileNav.propTypes = {
  open: bool.isRequired,
}

export default MobileNav;
