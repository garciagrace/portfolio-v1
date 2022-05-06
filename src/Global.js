import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.ffHeading};
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2rem, 8vw, 5.5rem);
  }
  
  h2 {
    font-size: clamp(1.75rem, 7vw, 4.5rem);
  }
  h3 {
    font-size: clamp(1.375rem, 5vw, 3.5rem);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.slate};
    font-family: ${({ theme }) => theme.ffPrimary};
    font-size: clamp(.875rem, 1vw, 1.125rem);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 28px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.yellowCream};
    border-radius: 10px;
  }

  section {
    width: 80vw;
    height: 100vh;
    margin-inline: auto;
  }
`;

export default GlobalStyles;
