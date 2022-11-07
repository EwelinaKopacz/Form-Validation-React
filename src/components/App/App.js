import React from 'react';
import AppWrapper from "./App.styled.js";
import ResetStyle from "../../styled/Reset.styled";
import GlobalStyle from "../../styled/Global.styled";
import Form from "../Form/Form.js";


const App = () => {
  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <AppWrapper>
        <Form/>
      </AppWrapper>
    </>
  );
}

export default App;
