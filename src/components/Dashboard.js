import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoOverview from "./VideoOverview";
import VideoHighlights from "./VideoHighlights";
import QuestionCategories from "./QuestionCategories";
import SentimentAnalysis from "./SentimentAnalysis";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;
function Dashboard() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const url = "/api/init/";
      const res = await fetch(url, {
        method: "PUT",
        body: new URLSearchParams({ id: id }),
      });
      res.json().then(
        (data) => {
          setLoaded(true);
          setData(data);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
    }
    fetchData();
  }, [id]);
  if (error) {
    return <div>Something went wrong! {error.message}</div>;
  } else if (!loaded || !data) {
    return (
      <LoadingContainer>
        <ReactLoading type={"bars"} color={"red"} />
      </LoadingContainer>
    );
  } else {
    return (
      <DashboardContainer>
        {typeof data.details !== "undefined" && (
          <VideoOverview details={data.details} />
        )}
        {typeof data.sentiment !== "undefined" && (
          <SentimentAnalysis sentiment={data.sentiment} />
        )}
        {data !== {} && typeof data !== "undefined" && (
          <VideoHighlights data={data} />
        )}
        <QuestionCategories />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
