import React from 'react';
import '../App.css';
function CommentBox(props) {
  return (
    <div className="commentBox">
        <img className="dp" src={props.dpUrl} />
        <div>
            <p className="authorName">{props.author}</p>
            <p><img src="calendar.svg"></img> {props.date} </p>
            <p>{props.comment}</p>
            <p><img src="thumbs-up.svg"></img> {props.likes}</p>
            <p><img src="message-square.svg"></img> {props.replies}</p>
        </div>
    </div>
  );
}

export default CommentBox;
