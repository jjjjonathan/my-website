import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.red};
    font-family: 'Jost', sans-serif;
    font-weight: 800;
  }

  h1 {
    
  }
`;

export default GlobalStyle;
