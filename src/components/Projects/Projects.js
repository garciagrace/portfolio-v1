import React from 'react';
import {
  Card,
  CardDesc,
  CardImage,
  CardInfo,
  CardLink,
  CardStack,
  ProjectsSection,
  ProjectWrapper,
} from './Projects.styled';
import { RiGithubLine } from 'react-icons/ri';
import { MdOpenInNew } from 'react-icons/md';

import project1 from '../../assets/project-1.png';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <p>Some Things I’ve Built.</p>
      <h4>Projects</h4>
      <p>
        Showcasing of some of my projects that I made, you can check both the
        code and the live version of the project. If you're interested in my
        work you're welcome to check out my other public repositories on my
        GitHub profile.
      </p>

      <ProjectWrapper>
        <Card>
          <CardImage>
            <img src={project1} alt="Zaloza" />
          </CardImage>

          <CardInfo>
            <h5>Zaloza</h5>
            <CardDesc>
              <span>eCommerce website</span> based on Zalora online shopping app
              that includes user authentication, admin management and PayPal API
              for payment system.
            </CardDesc>

            <CardStack>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Redux</li>
              <li>React Bootstrap</li>
              <li>PayPal Api</li>
            </CardStack>

            <CardLink>
              <a href="/##">
                <RiGithubLine />
              </a>
              <a href="/##">
                <MdOpenInNew />
              </a>
            </CardLink>
          </CardInfo>
        </Card>
      </ProjectWrapper>
    </ProjectsSection>
  );
};

export default Projects;
