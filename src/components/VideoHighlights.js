import React from 'react';
import '../App.css';
import styled from "styled-components";
import CommentsCharts from './CommentsChart'
import CommentsList from './CommentsList'
const StyledVideoHighlights = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  flex-grow: 4;
  h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
  }
  .content{
    margin: 10%;
    max-width: 80%
  }
`;

function VideoHighlights(props) {
  return (
        <StyledVideoHighlights>
          <section>
            <h2>Video Highlights</h2>
            <div class="content">
              <CommentsCharts />
              <CommentsList />
            </div>
          </section>
        </StyledVideoHighlights>
  );
}

export default VideoHighlights;
