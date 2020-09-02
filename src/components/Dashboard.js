import React from 'react';
import VideoOverview from './VideoOverview';
import SentimentAnalysis from './SentimentAnalysis';

function Dashboard (){
  return (
    <div>
        <VideoOverview/>
        <SentimentAnalysis/>
    </div>
  );
}

export default Dashboard;