import React from 'react';
import styled from 'styled-components';
import VideoOverview from './VideoOverview';
import Tile from "./Tile.styled";
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
function Dashboard (){
  return (
    <DashboardContainer>
        <VideoOverview/>
        <Tile/>
        <Tile/>
    </DashboardContainer>  
  );
}

export default Dashboard;