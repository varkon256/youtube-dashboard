import React, {useState, useEffect} from 'react';
import styled from "styled-components";
const StyledCommentsList = styled.div`
  width: 100%;
  margin-top: 20px;
  background: #F9F9F9;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 10px;
`;

function CommentsList(props) {
    const [Comments, setComments] = useState([])
    useEffect(() => {
      setComments(
        ['comment 1',
        'ahhhhh I love this look!',
        'This is my favorite',
        'hahahaha so funny',
        'you should check out my channel here',
        'love it ♥']
      );
    }, [])
    return (
            <StyledCommentsList>
                <div>
                  {
                  Comments.map(comment => ( 
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
