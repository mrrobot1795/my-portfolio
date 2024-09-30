"use client";

import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00d1b2; /* Change color on hover */
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #00d1b2; /* Add a line animation */
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:active {
    transform: scale(0.95); /* Scale down slightly on click */
  }
`;

const Header = () => (
  <Navbar>
    <NavList>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/skills">Skills</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">Contact</NavLink>
      </NavItem>
    </NavList>
  </Navbar>
);

export default Header;
