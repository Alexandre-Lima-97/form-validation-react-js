import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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


`;
