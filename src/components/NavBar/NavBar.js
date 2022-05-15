import React, { useState } from 'react';
import { MenuBtn, Nav, NavList } from './NavBar.styled';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [active, setActive] = useState(true);

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

      <NavList className={active && 'active'}>
        <a href="#about" onClick={toggleHandler}>
          About
        </a>
        <a href="#projects" onClick={toggleHandler}>
          Projects
        </a>
        <a href="#contact" onClick={toggleHandler}>
          Contact
        </a>
      </NavList>
    </Nav>
  );
};

export default NavBar;
