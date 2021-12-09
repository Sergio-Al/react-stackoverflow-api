import React from "react";
import styled from "styled-components";

const OwnerWrapper = styled.div`
  display: flex;
  flex-basis: 40%;
  align-items: flex-end;
  justify-content: space-between;
`;

const Avatar = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-weight: bold;
`;

export default function Owner({ data }) {
  return (
    <OwnerWrapper>
      <Name>{data.display_name}</Name>
      <Avatar src={data.profile_image} />
    </OwnerWrapper>
  );
}
