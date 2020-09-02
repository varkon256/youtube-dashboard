import React from 'react';

import {useState, useEffect} from 'react';
import '../App.css';
import CommentBox from './CommentBox';

function CommentFetcher() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [maxResult, setMaxResult] = useState (1);
    const [comments, setComments] = useState([]);


    function handleFetch(max) {
    }

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&order=time&videoId=rBu0BRTx2x8&key=AIzaSyCapt-WkmhFfuvLDDlfoMk86hBsaAesLrI`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setComments(result.items);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

        return (
            <div className="commentBoxContainer">
                <div className="form">
                    <input type="text" placeholder="video link"></input>
                    <input type="number" min="0" placeholder="no. results"></input>
                    <button onClick={handleFetch(maxResult)}>Fetch</button>        
                </div>
                <div>
                    {
                    
                    comments.map(comment => ( 
                        <div>
                            {console.log(comments)}                                  
                            <CommentBox 
                                date = {comment.snippet.topLevelComment.snippet.publishedAt}
                                author = {comment.snippet.topLevelComment.snippet.authorDisplayName }
                                dpUrl = {comment.snippet.topLevelComment.snippet.authorProfileImageUrl }
                                comment = {comment.snippet.topLevelComment.snippet.textOriginal} // comment
                                likes = {comment.snippet.topLevelComment.snippet.likeCount}
                                replies = {comment.snippet.totalReplyCount}

                            />                    
                        </div> 
                    ))
                    }                    
                </div>
            </div>
        );
}

export default CommentFetcher;
