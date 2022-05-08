import styled from 'styled-components';

export const EmailNav = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  writing-mode: vertical-rl;

  a {
    color: ${({ theme }) => theme.slate};
    font-size: 1rem;
    letter-spacing: 1px;
    transition: color ease-in 280ms;

    &:hover {
      color: ${({ theme }) => theme.yellowCream};
    }
  }

  &::after {
    content: '';
    margin-top: 2rem;
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
