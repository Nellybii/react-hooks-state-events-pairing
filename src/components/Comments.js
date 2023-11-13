import React, { useState } from "react";
import video from "../data/video";
import  SearchBar  from "./SearchBar";

const Comments = () => {
  const [comments, setComments] = useState(video.comments);
 const [input, setInput] = useState(null)

  const handleCommentUpVote = (commentId) => {
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, upVotes: (comment.upVotes || 0) + 1 }
          : comment
      )
    );
  };

  const handleCommentDownVote = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, downVotes: (comment.downVotes || 0) + 1 }
          : comment
      )
    );
  };
  function handleSearch(e){
 e.preventdefault();
 const filteredComments = video.comments((comment)=>{
    comment.user().input()
 })
 setComments(filteredComments)
  }

  return (
    <div>
      <h4>{comments.length} Comments</h4>
      <SearchBar onChange={setInput}/>
      {comments.map((comment) => (
        <ul key={comment.id}>
          <li>
            <h5>{comment.user}</h5>
            <p>{comment.comment}</p>
            <button onClick={() => handleCommentUpVote(comment.id)}>
              {comment.upVotes || 0} "👍"
            </button>
            <button onClick={() => handleCommentDownVote(comment.id)}>
              {comment.downVotes || 0} "👎"
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Comments;