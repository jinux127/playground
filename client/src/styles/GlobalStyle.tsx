import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.jpeg';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MICEGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  html{
    font-size: 2vh;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-image: url(${background});
    background-repeat : no-repeat;
    background-size : cover;
    font-family: 'MICEGothic',sans-serif;
    margin: 0;
    width: 100vw;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea {
    font-family: 'MICEGothic',sans-serif;
    background-color: transparent;
    border: none;
    outline: none;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-transition: background-color 9999s ease-out;
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
      box-shadow: 0 0 0px white inset !important;
    }
  }

  button{
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

`;

export default GlobalStyle;
