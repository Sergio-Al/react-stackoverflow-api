import React from "react";
import styled from "styled-components";
import imageIcon from "../../assets/images/stack-overflow.png";

const HeaderWrapper = styled.div`
  background: linear-gradient(180deg, #ff7a00 0%, #ff9d42 95.83%);

  display: flex;
  flex-direction: row;
  color: white;
`;

const TitleWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  min-height: 136px;
  text-align: start;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > * {
    margin-right: 10px;
  }
`;

const Title = styled.h1`
  pointer-events: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;

  width: auto;

  @media (max-width: 500px){
    font-size: 36px;
  }
`;

const CustomIcon = styled.img`
  margin-top: 1px;
  width: 63px;
  height: 63px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <CustomIcon src={imageIcon} alt="icon " />
        <Title>A lot of Questions</Title>
      </TitleWrapper>
    </HeaderWrapper>
  );
}
