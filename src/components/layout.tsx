import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

type Props = {
  children: React.ReactNode;
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
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
