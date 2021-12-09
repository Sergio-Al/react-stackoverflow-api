import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Feed from "./Feed";
import Question from "./Question";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/questions" element={<Feed />} />
          <Route path="/questions/:id" element={<Question />} />
        </Routes>
      </AppWrapper>
    </>
  );
}
