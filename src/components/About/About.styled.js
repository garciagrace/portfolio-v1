import styled from 'styled-components';
import quote from '../../assets/quote.svg';

export const AboutSection = styled.section`
  height: 40rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 60vw;
    flex-direction: row;
    flex: 1;
    align-items: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.xl}) {
    width: 50vw;
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  max-width: 12rem;

  img {
    border-radius: 3px;
    box-shadow: 18px 18px 0 -1px ${({ theme }) => theme.bgPrimary},
      18px 18px ${({ theme }) => theme.yellowCream};

    @media (min-width: ${({ theme }) => theme.lg}) {
      max-width: 17rem;
    }
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 0.75rem 0;
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ theme }) => theme.yellowCream};
    text-align: center;
    position: relative;

    &::before {
      position: absolute;
      content: url(${quote});
      left: 0;
      bottom: -6rem;
      display: block;
      color: #fff;
      opacity: 0.1;
    }
  }

  p:not(p:first-child) {
    margin: 8px 0;
  }

  p:first-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    h4 {
      text-align: left;
    }

    p:first-child {
      display: block;
    }
  }
`;

export const Stack = styled.div`
  display: block;
  margin-top: 1.5rem;
`;
