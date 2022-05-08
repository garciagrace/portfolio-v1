import React from 'react';
import { AboutInfo, AboutSection, ImageHolder, Stack } from './About.styled';

import grace from '../../assets/gracegarcia.jpg';
import TechStack from '../TechStack/TechStack';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutInfo>
        <p>Let me introduce myself.</p>
        <h4>About Me</h4>

        <p>I graduated from college with a degree in Computer Science. </p>
        <p>
          As someone who likes to create, I love the idea of being able to write
          code and see something tangible being built.
        </p>

        <p>
          My main focus these days is improving my soft and technical skills,
          explore new challenges, and grow professionally.
        </p>
        <Stack>
          <p>Tools and Technologies I Use</p>

          <TechStack />
        </Stack>
      </AboutInfo>
      <ImageHolder>
        <img src={grace} alt="Grace Garcia" />
      </ImageHolder>
    </AboutSection>
  );
};

export default About;
