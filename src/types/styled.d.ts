import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      red: string;
      yellow: string;
      offWhite: string;
    };
  }
}
