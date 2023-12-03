import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root {
    line-height: 1.5;
    font-weight: 400;
    min-height: 100%;

    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 100px;
  }

  body {
    margin: 0;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  body, html {
    width: 100%;
    height: 100%
  }

  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

`
