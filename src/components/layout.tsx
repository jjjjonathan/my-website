import React from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import reset from 'styled-reset';

type Props = {
  children: React.ReactNode;
};

const theme: DefaultTheme = {
  colors: {
    bg: '#f6fffb',
  },
};

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
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
