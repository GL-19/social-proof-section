import { createGlobalStyle } from "styled-components";

export const mediaQuery = {
	desktop: "1080px",
	mobile: "420px",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: ${mediaQuery.desktop}) {
      font-size: 93.75%;
    }

    @media (max-width: ${mediaQuery.mobile}) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: hsl(0, 0%, 100%);
    font-family: 'Spartan', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
    font-size: 16px;
  }
`;
