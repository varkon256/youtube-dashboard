import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoOverview from './VideoOverview';
import VideoHighlights from './VideoHighlights'
import QuestionCategories from './QuestionCategories'
import SentimentAnalysis from './SentimentAnalysis';
import {useParams} from 'react-router-dom';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`
function Dashboard (){
  let {id} = useParams();
  const [Data, setData] = useState({});
  useEffect(() => {
    const url = 'http://localhost:5000/init/';
    fetch(url, {
      method: 'PUT',
      body: new URLSearchParams({id: id})
    })
    .then((response) => response.json())
    .then((data) => setData(data));
  }, [])
  return (
    <DashboardContainer>
      {typeof Data.details !== 'undefined' && (
        <VideoOverview details = {Data.details}/>
      )}
      {typeof Data.sentiment !== 'undefined' && (
        <SentimentAnalysis sentiment = {Data.sentiment}/> 
      )}
      {Data !== {} && typeof Data !== 'undefined' && (
        <VideoHighlights data = {Data}/> 
      )}
        <QuestionCategories />
    </DashboardContainer>  
  );
}

export default Dashboard;