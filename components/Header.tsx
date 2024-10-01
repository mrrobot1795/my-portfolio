"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = styled.nav`
  background-color: #112;
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

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#00d1b2" : "white")};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00d1b2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 2px;
    background-color: #00d1b2;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    left: ${(props) => (props.$isActive ? "0" : "50%")};
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = () => {
  const pathname = usePathname();
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <NavLink href="/" $isActive={pathname === "/"}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" $isActive={pathname === "/about"}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects" $isActive={pathname === "/projects"}>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/skills" $isActive={pathname === "/skills"}>
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" $isActive={pathname === "/contact"}>
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Header;
