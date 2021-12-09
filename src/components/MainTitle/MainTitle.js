import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #f3f3f3;
  padding: 43px 34px;
  max-width: 495px;
  width: 100%;
  height: 208px;
  display: flex;
  align-items: center;

  @media (max-width: 997px) {
    max-width: 300px;
    margin-bottom: 20px;
  }
`;

const MainHeading = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  text-align: start;

  @media (max-width: 976px) {
    font-size: 36px;
  }
`;

export default function MainTitle() {
  return (
    <CardWrapper>
      <MainHeading>Questions about React</MainHeading>
    </CardWrapper>
  );
}
