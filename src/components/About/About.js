import React from 'react';
import { AboutInfo, AboutSection, ImageHolder } from './About.styled';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaSass,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
// } from 'react-icons/fa';
// import {
//   SiJavascript,
//   SiRedux,
//   SiExpress,
//   SiMongodb,
//   SiVisualstudio,
//   SiPostman,
//   SiStyledcomponents,
// } from 'react-icons/si';

import grace from '../../assets/gracegarcia.jpg';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutInfo>
        <p>Let me introduce myself.</p>
        <h2>About Me</h2>
        <p>
          I am passionate on enhancing my skills as a developer and to challenge
          myself to try new things.
        </p>

        {/* <Stack>
          <p>Tools and Technologies I Use</p>

          <StackWrapper>
            <FaHtml5 />
            <FaCss3Alt />
            
            <SiJavascript />
            <FaSass />
            <FaReact />
            <FaNodeJs />
            <FaGitAlt />
            <SiRedux />
            <SiMongodb />
            <SiExpress />
            <SiVisualstudio />
            <SiPostman />
            <SiStyledcomponents />
          </StackWrapper>
        </Stack> */}
      </AboutInfo>
      <ImageHolder>
        <img src={grace} alt="Grace Garcia" />
      </ImageHolder>
    </AboutSection>
  );
};

export default About;
