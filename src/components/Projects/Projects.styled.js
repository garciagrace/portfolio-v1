import styled from 'styled-components';

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 2rem;

  h4 {
    text-align: center;
  }

  p:first-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 60vw;

    h4 {
      text-align: left;
    }

    p:first-child {
      display: block;
    }
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.darkBlueGreen};
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.lg}) {
    background: none;
    flex-direction: row;
    align-items: center;
    text-align: right;
  }
`;

export const CardImage = styled.div`
  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const CardInfo = styled.div`
  padding: 1rem;

  h5 {
    color: ${({ theme }) => theme.lightSlate};
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 40%;
  }
`;

export const CardDesc = styled.p`
  margin: 1rem 0;

  span {
    color: ${({ theme }) => theme.yellowCream};
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 120%;
    background-color: ${({ theme }) => theme.darkBlueGreen};
    border-radius: 3px;
    box-shadow: 0 10px 30px -15px #000;
    padding: 1.25rem;
    margin-left: -20%;
  }
`;

export const CardStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 1rem;
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.lg}) {
    justify-content: flex-end;
  }
`;

export const CardLink = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.lightSlate};
    transition: color ease-in-out 280ms;

    &:hover {
      color: ${({ theme }) => theme.yellowCream};
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    justify-content: flex-end;
  }
`;
