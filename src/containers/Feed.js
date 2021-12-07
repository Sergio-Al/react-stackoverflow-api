import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`
    )
      .then((resdata) => resdata.json())
      .then(setData)
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        setLoading(false);
      });
  }, []);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error}</Alert>;
  }

  return (
    <FeedWrapper>
      {data.items.map((item) => (
        <CardLink key={item.question_id} to={`/questions/${item.question_id}`}>
          <Card data={item} />
        </CardLink>
      ))}
    </FeedWrapper>
  );
}
