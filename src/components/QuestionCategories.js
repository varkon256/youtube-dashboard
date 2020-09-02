import React from 'react';
import '../App.css';
import styled from "styled-components";
import QuestionCard from './QuestionCard'
const StyledQuestonCategories = styled.div`
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
        margin-bottom: 0;
    }
    .content{
        margin: 10%;
        max-width: 80%;
    }
    .subtitle{
        color: #C4C4C4;
        font-size: 14px;
        margin: 0;
        padding: 0; 
    }
    .titleContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

function QuestonCategories(props) {
  return (
        <StyledQuestonCategories>
            <section>
                <div class="titleContainer">
                    <div>
                        <h2>Question Categories</h2>
                        <p class="subtitle">5 categories, 19 questions</p>
                    </div>
                    <div class="listToggle">
                        list Toggle
                    </div>
                </div>
                <div class="content">
                    <QuestionCard />
                </div>
            </section>
        </StyledQuestonCategories>
  );
}

export default QuestonCategories;
