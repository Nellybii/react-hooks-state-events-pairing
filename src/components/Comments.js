import React from "react";
import video from "../data/video";

const Comments = () => {
  return (
    <div>
      <h4>{video.comments.length} Comments</h4>
      {video.comments.map((comment) => (
        <ul key={comment.id}>
          <li>
            <h5>{comment.user}</h5>
            <p>{comment.comment}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Comments;
