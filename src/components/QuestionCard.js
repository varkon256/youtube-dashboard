import React from 'react';
import '../App.css';
import styled from "styled-components";

const StyledQuestionCard = styled.div`
    width: 300px;
    max-height: 600px;
    padding: 10px;
    border-radius: 20px;
    .cardHeading{
        background: rgba(207,42,42,0.79);
        border-radius: 20px 20px 0 0;
        padding: 20px;
        h2{
            font-size: 18px;
            color: white;
            margin: 0px;
            text-align: center;
        }
        p{
            font-size: 12px;
            color: white;
            margin: 0px;
            text-align: center;
    
        }
    }
    .cardContent{
        background: #f9f9f9;
        border-radius: 0 0 20px 20px;        
        padding: 20px;
        p{
            color: #343434;
            font-size: 14px;
        }
    }
   
`;



function QuestionCard(props) {
    return (
            <StyledQuestionCard>
                <div class="cardHeading">
                    <h2>{props.name}</h2>
                    <p>{props.count} questions</p>
                </div>
                <div class="cardContent">
                    {
                  props.list.map(question => ( 
                        <p>{question}</p>
                  ))
                    }
                </div>   

            </StyledQuestionCard>
    );
}

    export default QuestionCard;