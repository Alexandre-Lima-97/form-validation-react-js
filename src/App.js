import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/globalstyles';
import Form from './components/form';

function App() {
  return (
    <>
    <Form />

    <GlobalStyle />
    <ToastContainer autoClose={3000} className="toast-container"/>

    </>
  );
}

export default App;
