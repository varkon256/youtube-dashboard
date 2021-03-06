import React from "react";
import styled from "styled-components";
import Tile from "./Tile.styled";
const StyledVideoOverview = styled(Tile)`
  height: 300px;
  max-width: 275px;
  flex-grow: 1;
  margin: 10px;
  padding: 20px;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0px;
    color: black;
  }
  .Views {
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    color: grey;
  }
  div {
    margin: 5px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    justify-content: center;
    text-align: center;

    .Card {
      display: inline;
      width: 79px;
      height: 40px;
      margin: 0px 5px;
      background: #f7f7f7;
      border-radius: 10px;
      color: black;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    }
    h4 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #f72537;
      margin: 0px;
      margin-top: 5px;
    }
  }
`;

function VideoOverview(props) {
    return (
      <div>
        <StyledVideoOverview>
          <h2>Video Overview</h2>
          <img
            src={props.details.thumbnail}
            alt="thumbnail of the video"
          ></img>
          <p>{props.details.title}</p>
    <span className="Views">{props.details.viewCount} views • Posted on {props.details.date}</span>
          <div>
            <span className="Card">
    <h4>{props.details.likeCount}</h4>Likes
            </span>
            <span className="Card">
    <h4>{props.details.commentCount}</h4>Comments
            </span>
          </div>
        </StyledVideoOverview>
      </div>
    );
}

export default VideoOverview;
