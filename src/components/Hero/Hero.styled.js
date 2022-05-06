import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 0 clamp(0, 7vw, 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.yellowCream};
  }

  h3 {
    color: ${({ theme }) => theme.lightSlate};
    margin: 5px 0 1rem;
  }

  p {
    width: 100%;
  }

  span {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    p {
      width: 70%;
    }
  }
`;
