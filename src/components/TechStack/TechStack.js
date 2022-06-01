import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiVisualstudio,
  SiPostman,
} from 'react-icons/si';

import { Icon, StackWrapper } from './TechStack.styled';

const TechStack = () => {
  return (
    <StackWrapper>
      <Icon>
        <FaHtml5 />
        <p>Html</p>
      </Icon>
      <Icon>
        <FaCss3Alt />
        <p>CSS</p>
      </Icon>
      <Icon>
        <SiJavascript />
        <p>JS</p>
      </Icon>
      <Icon>
        <FaJava />
        <p>Java</p>
      </Icon>
      <Icon>
        <FaSass />
        <p>SASS</p>
      </Icon>
      <Icon>
        <FaReact />
        <p>React</p>
      </Icon>
      <Icon>
        <SiRedux />
        <p>Redux</p>
      </Icon>
      <Icon>
        <SiMongodb />
        <p>MongoDB</p>
      </Icon>
      <Icon>
        <SiExpress />
        <p>Express</p>
      </Icon>
      <Icon>
        <FaNodeJs />
        <p>NodeJS</p>
      </Icon>
      <Icon>
        <SiVisualstudio />
        <p>VS Code</p>
      </Icon>
      <Icon>
        <FaGitAlt />
        <p>Git</p>
      </Icon>
      <Icon>
        <SiPostman />
        <p>Postman</p>
      </Icon>
    </StackWrapper>
  );
};

export default TechStack;
