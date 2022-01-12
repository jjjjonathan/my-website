import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-family: 'Jost', sans-serif;
    line-height: 1.75;
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Jost', sans-serif;
    line-height: 1.3;
    font-weight: 800;
  }

  h1 {
    margin-top: 0;
    font-size: 7.594rem;
  }

  h2 {
    font-size: 5.063rem;
    color: ${(props) => props.theme.colors.yellow};
  }

  h3 {
    font-size: 3.375rem;
  }

  h4 {
    font-size: 2.25rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  small, .text_small {
    font-size: 0.667rem;
  }
`;

export default GlobalStyle;
