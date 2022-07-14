import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-100: #f5f5f5;
    --gray-200: #DDDDDD;
    --gray-300: #e8e8e8;
    --gray-400: #ababab;
    --gray-900: #1c1c1c;

    --purple-400: #9e7aff;
    --red-500: #ff1717;

    --white: #fff;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: var(--white);
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  button {
    border: 0;
    background: 0;
    cursor: pointer;
  }

  input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }
`