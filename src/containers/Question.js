import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Helmet from "react-helmet";
import Card from "../components/Card/Card";

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 5%auto;
`;

const Alert = styled.div`
  text-align: center;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

export default function Question() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  let { id } = useParams();

  useEffect(() => {
    fetch(`${ROOT_API}questions/${id}?site=stackoverflow`)
      .then((resData) => resData.json())
      .then(setData)
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error}</Alert>;
  }

  return (
    <>
      <Helmet>
        <title>`The Stack Overflow Questions - #${data.items[0].title}`</title>
      </Helmet>
      <QuestionWrapper>
        <Card key={data.items[0].question_id} data={data.items[0]} />
      </QuestionWrapper>
    </>
  );
}
