import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {

    font-family: sans-serif;
    background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: green;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: red;
  }

`;
