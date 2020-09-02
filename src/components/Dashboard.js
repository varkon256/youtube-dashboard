import React from 'react';
import VideoOverview from './VideoOverview';
import VideoHighlights from './VideoHighlights'
function Dashboard (){
  return (
    <div>
        <VideoOverview/>
        <VideoHighlights />
    </div>
  );
}

export default Dashboard;