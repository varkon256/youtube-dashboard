import React from 'react';
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
const Comment = styled.div`
`;
function CommentsList(props) {
    return (
            <StyledCommentsList>
                <div>
                  {
                  props.list.map(comment => ( 
                    <Comment>
                        <p>{comment}</p>
                    </Comment>
                  ))
                  }
                </div>
            </StyledCommentsList>
    );
}

export default CommentsList;
