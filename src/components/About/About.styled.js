import styled from 'styled-components';

export const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.lg}) {
    flex-direction: row;
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 14rem;
    border-radius: 3px;
    box-shadow: 18px 18px 0 -1px ${({ theme }) => theme.bgPrimary},
      18px 18px ${({ theme }) => theme.yellowCream};

    @media (min-width: ${({ theme }) => theme.lg}) {
      max-width: 18rem;
    }
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin: 0.75rem 0;
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ theme }) => theme.yellowCream};
    text-align: center;
  }

  p:first-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 75%;

    h2 {
      text-align: left;
    }

    p:first-child {
      display: block;
    }
  }
`;
