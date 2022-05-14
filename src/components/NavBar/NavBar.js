import React, { useState } from 'react';
import { MenuBtn, Nav, NavList } from './NavBar.styled';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleHandler = () => {
    setActive(!active);
  };

  return (
    <Nav>
      <a href="/#">
        <img src={logo} alt="Grace Garcia" />
      </a>

      <MenuBtn className={active && 'active'} onClick={toggleHandler}>
        <span></span>
        <span></span>
        <span></span>
      </MenuBtn>

      <NavList>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavList>
    </Nav>
  );
};

export default NavBar;
