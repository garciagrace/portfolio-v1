import React from 'react';
import { SocialNav } from './Social.styled';

import { RiGithubLine, RiTwitterLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';

const Social = () => {
  return (
    <SocialNav>
      <a href="https://github.com/garciagrace" target="_blank" rel="noreferrer">
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
    </SocialNav>
  );
};

export default Social;
