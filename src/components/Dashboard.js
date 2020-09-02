import React from 'react';
import styled from 'styled-components';
import VideoOverview from './VideoOverview';
import VideoHighlights from './VideoHighlights'
import Tile from "./Tile.styled";
import QuestionCategories from './QuestionCategories'
import SentimentAnalysis from './SentimentAnalysis';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`
function Dashboard (){
  return (
    <DashboardContainer>
        <VideoOverview/>
        <SentimentAnalysis />
        <VideoHighlights />
        <QuestionCategories />
    </DashboardContainer>  
  );
}

export default Dashboard;