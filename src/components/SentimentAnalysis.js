import React from 'react';
import '../App.css';
import styled from "styled-components";
import SentimentAnalysisChart from './SentimentAnalysisChart';


const StyledSentimentAnalysis = styled.div`
    max-width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin: 10px;
    padding: 20px;
    flex-grow: 1;
    h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    margin-bottom: 0;
    }
    .content{
    margin: 10%;
    max-width: 80%
    }
    .help{  
        background: #F9F9F9;
        padding: 10px;
        border-radius: 10px;
        color: #6C6C6C;
    }
    .legends{
        display: flex;
        flex-direction: row;
        justify-content: space-around; 
    }
    .legend{
        margin: 5px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background: red;
    }
    .legend-container{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

function SentimentAnalysis(props) {
  return (
        <StyledSentimentAnalysis>
            <section>
                <h2>Viewer Sentiment Analysis</h2>
                <div class="content">
                    <SentimentAnalysisChart />
                    <div class="legends">                        
                        <div class="legend-container">
                            <div class="legend"></div>
                            <p><strong>80%</strong> positive</p>
                        </div>
                        <div class="legend-container">
                            <div class="legend"></div>
                            <p><strong>10%</strong> neutral</p>
                        </div>
                        <div class="legend-container">
                            <div class="legend"></div>
                            <p><strong>10%</strong> negative</p>
                        </div>
                    </div>
                    <p class="help">Based on likes, dislikes, and comments, viewers found your video <strong>mostly positive.</strong> <img src="help-circle.svg" alt="help"></img> </p>
                </div>
            </section>
        </StyledSentimentAnalysis>
  );
}

export default SentimentAnalysis;
