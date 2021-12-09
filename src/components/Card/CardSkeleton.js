import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const WrapperCardSkeleton = styled.div`
  margin: 20px;
  padding: 30px;
`;

const CardSkeleton = (props) => (
  <WrapperCardSkeleton>
    <ContentLoader
      speed={2}
      width={window.innerWidth < 500 ? 225 : 395}
      height={333}
      viewBox="0 0 395 333"
      preserveAspectRatio="none"
      backgroundColor="#b0b0b0"
      foregroundColor="#e6e6e6"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="395" height="42" />
      <rect x="0" y="49" rx="10" ry="10" width="395" height="42" />
      <rect x="0" y="114" rx="10" ry="10" width="137" height="23" />
      <rect x="0" y="300" rx="10" ry="10" width="137" height="23" />
    </ContentLoader>
  </WrapperCardSkeleton>
);

export default CardSkeleton;
