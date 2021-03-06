import React from 'react';
import '../App.css';
import styled from "styled-components";
import SentimentAnalysisChart from './SentimentAnalysisChart';


const StyledSentimentAnalysis = styled.div`
    max-width: 100%;
    height: 300px;
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
    margin: 5%;
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
    .legend-positive{
        margin: 5px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background: #F03030;
    }
    .legend-neutral{
        margin: 5px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background: #F09090;
    }
    .legend-negative{
        margin: 5px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background: #F0C0C0;
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
                <div className="content">
                {typeof props.sentiment !== 'undefined' && (
                    <SentimentAnalysisChart sentiment = {props.sentiment}/>
                )}
                    <div className="legends">                        
                        <div className="legend-container">
                            <div className="legend-positive"></div>
                            <p><strong>{props.sentiment.positive}%</strong> positive</p>
                        </div>
                        <div className="legend-container">
                            <div className="legend-neutral"></div>
                            <p><strong>{props.sentiment.neutral}%</strong> neutral</p>
                        </div>
                        <div className="legend-container">
                            <div className="legend-negative"></div>
                            <p><strong>{props.sentiment.negative}%</strong> negative</p>
                        </div>
                    </div>
                    <p className="help">Based on likes, dislikes, and comments, viewers found your video 
                        <strong>
                            {props.sentiment.neutral > props.sentiment.positive + props.sentiment.negative ? 
                            ' mostly neutral. ' 
                            : 
                            (props.sentiment.postive > props.sentiment.negative ? ' mostly positive.' : ' mostly negative.')}
                        </strong>
                    </p>
                </div>
            </section>
        </StyledSentimentAnalysis>
  );
}

export default SentimentAnalysis;
