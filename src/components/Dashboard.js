import React from 'react';
import styled from 'styled-components';
import VideoOverview from './VideoOverview';
import VideoHighlights from './VideoHighlights'
import Tile from "./Tile.styled";
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
        <Tile/>
        <VideoHighlights />
        <Tile/>
    </DashboardContainer>  
  );
}

export default Dashboard;