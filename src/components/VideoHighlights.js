import React from 'react';
import '../App.css';
import styled from "styled-components";
import CommentsCharts from './CommentsChart'
const StyledVideoHighlights = styled.div`
  max-width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    margin: 20px;
  }
  .content{
    margin: 10%;
  }
`;

function VideoHighlights(props) {
  return (
        <StyledVideoHighlights>
          <section>
            <h2>Video Highlights</h2>
            <div class="content">
              <CommentsCharts />
              <div>Comments</div>
            </div>
          </section>
        </StyledVideoHighlights>
  );
}

export default VideoHighlights;
