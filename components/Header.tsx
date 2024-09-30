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

  &:hover {
    color: #aaa;
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
