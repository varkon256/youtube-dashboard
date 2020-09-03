import React, {useState, useEffect} from 'react';
import styled from "styled-components";
const StyledCommentsList = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  background: #F9F9F9;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 10px;
`;

function CommentsList(props) {
    return (
            <StyledCommentsList>
                <div>
                  {
                  props.list.map(comment => ( 
                    <div>
                        <p>{comment}</p>
                    </div> 
                  ))
                  }
                </div>
            </StyledCommentsList>
    );
}

export default CommentsList;
