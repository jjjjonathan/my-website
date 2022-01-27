import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { up } from 'styled-breakpoints';

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
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
    font-family: 'Jost', sans-serif;
    line-height: 1.75;
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3 {
    margin: 3rem 0 1.38rem;
    font-family: 'Jost', sans-serif;
    line-height: 1.3;
    font-weight: 800;
  }

  h1 {
    margin-top: 0;
    font-size: 4rem;

    ${up('sm')} {
      font-size: 5rem;
    }

    ${up('md')} {
      font-size: 7rem;
    }
  }

  h2 {
    font-size: 3rem;

    ${up('md')} {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 2rem;

    ${up('sm')} {
      font-size: 2.5rem;
    }
  }

  small, .text_small {
    font-size: 0.7rem;
  }

`;

export default GlobalStyle;
