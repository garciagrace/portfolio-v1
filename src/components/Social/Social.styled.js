import styled from 'styled-components';

export const SocialNav = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;

  a {
    color: ${({ theme }) => theme.slate};
    font-size: 1.5rem;
    transition: color ease-in 280ms;

    &:hover {
      color: ${({ theme }) => theme.yellowCream};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 15vh;
    background-color: ${({ theme }) => theme.slate};
  }

  @media (min-width: 768px) {
    display: flex;
    width: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 6rem;
  }
`;
