import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useSearchParams, useLocation } from "react-router-dom";
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

const PaginationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PaginationLink = styled(Link)`
  padding: 1%;
  background: lightblue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
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

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error}</Alert>;
  }

  console.log(searchParams.get("page"), pathname);

  return (
    <FeedWrapper>
      {data.items.map((item) => (
        <CardLink key={item.question_id} to={`/questions/${item.question_id}`}>
          <Card data={item} />
        </CardLink>
      ))}
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
