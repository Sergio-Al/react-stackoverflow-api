import React from "react";
import styled from "styled-components";
import Owner from "../Owner/Owner";
import { DateTime } from "luxon";

const CardWrapper = styled.div`
  text-align: left;
  padding: 28px 40px;
  background: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 2%;
  max-width: 479px;
  min-height: 392px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px){
    max-width: 300px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  width: 100%;
  padding-bottom: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 0;

  @media (max-width: 976px) {
    font-size: 24px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: 0 2%;
`;

const MetaBody = styled.div`
  flex-basis: 80%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 976px) {
    font-size: 15px;
  }
`;

export default function Card({ data }) {
  if (!data) {
    return;
  }
  let dt = DateTime.fromSeconds(data.creation_date);
  let lastActivity = DateTime.fromSeconds(data.last_activity_date);
  return (
    <CardWrapper>
      <Meta>
        <Title>{data.title}</Title>
        <MetaBody>
          {`Created At: ${dt.toLocaleString(DateTime.DATE_MED)}`} <br />
          {`
          Views: ${data.view_count} | Answers: ${data.answer_count}
          `}
          <br />
          {`Last Activity: ${lastActivity.toLocaleString(
            DateTime.DATETIME_MED
          )}`}
          <br />
        </MetaBody>
      </Meta>
      <Owner data={data.owner} />
    </CardWrapper>
  );
}
