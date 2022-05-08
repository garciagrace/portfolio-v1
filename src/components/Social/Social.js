import React from 'react';
import { SocialNav } from './Social.styled';

import { RiGithubLine, RiTwitterLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';

const Social = () => {
  return (
    <SocialNav>
      <a href="/#">
        <RiGithubLine />
      </a>
      <a href="/#">
        <FiLinkedin />
      </a>
      <a href="/#">
        <RiTwitterLine />
      </a>
    </SocialNav>
  );
};

export default Social;
