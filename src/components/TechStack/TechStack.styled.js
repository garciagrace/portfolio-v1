import styled from 'styled-components';

export const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  gap: 5px;

  @media (min-width: ${({ theme }) => theme.lg}) {
    justify-content: flex-start;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  gap: 5px;
  width: 4rem;
  height: 4rem;
  transition: all ease-in 280ms;

  p {
    display: none;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  &:hover {
    color: ${({ theme }) => theme.yellowCream};
    font-size: 2.75rem;

    p {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;
