import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: hsl(0, 0%, 100%);
    font-family: 'Spartan', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
  }
`;
