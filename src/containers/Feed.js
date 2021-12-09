import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import MainTitle from "../components/MainTitle/MainTitle";
import CardSkeleton from "../components/Card/CardSkeleton";

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1040px;
  padding-top: 23px;
  width: 100%;

  @media (max-width: 975px) {
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
  }
`;

const Alert = styled.div`
  text-align: center;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  max-width: 480px;
  color: inherit;
  margin-bottom: 10px;

  @media (min-width: 976px) {
    display: contents;
    &:nth-child(2n)::after {
      content: "";
      width: 100%;
    }
  }
`;

const PaginationBar = styled.div`
  max-width: 1040px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;

  @media (min-width: 1070px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 50%;
    > * {
      margin-bottom: 5px;
    }
  }
`;

const PaginationLink = styled(Link)`
  padding: 1%;
  background: linear-gradient(180deg, #3c43ff 0%, #484edd 100%);
  color: white;
  text-decoration: none;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );

  useEffect(() => {
    setLoading(true);
    fetch(
      `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow${
        page ? `&page=${page}` : ""
      }`
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
  }, [page]);

  if (loading) {
    return (
      <FeedWrapper>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </FeedWrapper>
    );
  }

  if (error) {
    return <Alert>{error}</Alert>;
  }

  data.items.splice(1, 0, <MainTitle />);

  return (
    <FeedWrapper>
      {data.items.map((item, i) => {
        if (item.question_id) {
          return (
            <CardLink
              key={item.question_id}
              to={`/questions/${item.question_id}`}
            >
              <Card data={item} />
            </CardLink>
          );
        }
        return <div key={i}>{item}</div>;
      })}
      <PaginationBar>
        {page > 1 && (
          <PaginationLink
            onClick={() => setPage(page - 1)}
            to={`${pathname}?page=${page - 1}`}
          >
            Previous
          </PaginationLink>
        )}
        {data.has_more && (
          <PaginationLink
            onClick={() => setPage(page + 1)}
            to={`${pathname}?page=${page + 1}`}
          >
            Next
          </PaginationLink>
        )}
      </PaginationBar>
    </FeedWrapper>
  );
}
