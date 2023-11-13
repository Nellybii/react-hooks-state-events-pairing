import React from "react";


const Votes = ({ upVotes, handleUpVotes, downVotes, handleDownVotes }) => {
  return (
    <div>
      <button onClick={handleUpVotes}>{upVotes} "👍"</button>
      <button onClick={handleDownVotes}>{downVotes} "👎"</button>
    </div>
  );
};

export default Votes;
