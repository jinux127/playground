import { Theme } from './src/styles/theme';
import { CSSProp, CSSObject } from 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
