import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset default margin and padding */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  /* Set the box-sizing to border-box for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: uppercase;
    text-align: center;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
