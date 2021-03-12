import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* css variables for theming */
  :root {
    --main-bg-color: ${({ theme }) => theme.mainBgColor};
    --alt-bg-color: ${({ theme }) => theme.altBgColor};
    --theme-primary: ${({ theme }) => theme.primary};
    --main-font-color: ${({ theme }) => theme.fontColor};
    --alt-font-color: rgba(0, 0, 0, 0.85);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.2s;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Press Start 2P', cursive;
  }
`;
