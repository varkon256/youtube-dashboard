import React from "react";
import styled from "styled-components";
import Tile from './Tile.styled';
const StyledVideoOverview = styled(Tile)`
  height: 310px;
  width: 275px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  h2 {
    position: relative;
    width: 125px;
    height: 20px;
    left: 22px;
    top: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
  }
  img {
    width: 230px;
    height: 150px;
    left: 22px;
    position: relative;
    top: 20px;
    border-radius: 5px;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    position: relative;
    margin-bottom: 10px;
    top: 10px;
    color: black;
    left: 22px;
  }
  .Views {
    position: relative;
    font-family: Roboto;
    font-style: normal;
    left: 22px;
    font-size: 12px;
    color: grey;
  }
  div {
    position: relative;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    left: 30px;
    text-align: center;
    .Card {
      display: inline;
      width: 79px;
      height: 40px;
      margin: 0px 5px;
      background: #F7F7F7;
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

function VideoOverview() {
  return (
    <>
      <StyledVideoOverview>
        <h2>Video Overview</h2>
        <img
          src="https://img.youtube.com/vi/DJyxwIGdl8Y/mqdefault.jpg"
          alt="thumbnail of the video"
        ></img>
        <p>Ways to Collaborate in Quarantine</p>
        <span className = "Views">62k views • 2 days ago</span>
        <div>
          <span className = "Card"><h4>62k</h4>Likes</span>
          <span className = "Card"><h4>67k</h4>Comments</span>
        </div>
      </StyledVideoOverview>
    </>
  );
}

export default VideoOverview;
