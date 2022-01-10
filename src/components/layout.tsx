import React from 'react';
import { createGlobalStyle } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
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
