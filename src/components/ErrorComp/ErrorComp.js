import React from "react";
import styled from "styled-components";
import ErrorIcon from "../../assets/images/error-icon.svg";

const ErrorWrapper = styled.div`
  max-width: 801px;
  max-height: 441px;
  background: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 19px;
  padding: 91px 45px;
  margin: 0 auto;

  @media (max-width: 680px) {
    flex-direction: column;
    max-height: fit-content;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  @media (max-width: 380px) {
    font-size: 36px;
  }
`;

const ErrorImage = styled.img`
  width: 321.86px;
  flex-basis: 50%;

  @media (max-width: 380px) {
    width: 200px;
  }
`;

const Body = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;

export default function ErrorComponent({ text = "It's an Error" }) {
  return (
    <ErrorWrapper>
      <ErrorImage src={ErrorIcon} alt="error-icon" />
      <BodyWrapper>
        <Title>We have an Error!</Title>
        <Body>{text}</Body>
      </BodyWrapper>
    </ErrorWrapper>
  );
}
