import styled from 'styled-components';

export const ContactSection = styled.section`
  min-height: 80vh;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;

  p {
    width: 60%;

    &:first-child {
      display: none;

      @media (min-width: ${({ theme }) => theme.md}) {
        display: block;
      }
    }
  }
`;

export const SendEmail = styled.a`
  color: ${({ theme }) => theme.yellowCream};
  border: 1px solid ${({ theme }) => theme.yellowCream};
  border-radius: 5px;
  margin-top: 3rem;
  padding: 1rem 2rem;
  transition: all ease-in-out 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.yellowCreamTrans};
  }
`;
