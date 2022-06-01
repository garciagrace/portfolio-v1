import React from 'react';
import { FooterStyle, SocialLinks } from './Footer.styled';

import { RiGithubLine, RiTwitterLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterStyle>
      <SocialLinks>
        <a
          href="https://github.com/garciagrace"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubLine />
        </a>
        <a
          href="https://www.linkedin.com/in/gracegarcia08/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://twitter.com/__gracegarcia"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterLine />
        </a>
      </SocialLinks>
      <p>Designed and built by Grace Garcia.</p>
    </FooterStyle>
  );
};

export default Footer;
