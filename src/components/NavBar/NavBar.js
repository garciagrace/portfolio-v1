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
      <img src={logo} alt="Grace Garcia" />

      <MenuBtn className={active && 'active'} onClick={toggleHandler}>
        <span></span>
        <span></span>
        <span></span>
      </MenuBtn>

      <NavList>
        <a href="/#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavList>
    </Nav>
  );
};

export default NavBar;
