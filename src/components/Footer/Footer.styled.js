import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 1rem 0;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.yellowCream};
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.slate};
    font-size: 1.25rem;
    transition: color ease-in 280ms;

    &:hover {
      color: ${({ theme }) => theme.yellowCream};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
