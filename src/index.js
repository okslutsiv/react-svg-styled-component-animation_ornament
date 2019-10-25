import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import Ornament from "./ornament";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  background-color: #6a2329;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Ornament color="#d0b064"/>
      </Main>
    </>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
