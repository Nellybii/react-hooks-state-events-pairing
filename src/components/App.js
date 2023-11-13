
import { useState } from "react";
import Iframe from "./Iframe.js";
import video from "../data/video.js";

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
const handleUpVotes = ()=>{
setUpVotes(upVotes + 1)
}
function handleDownVotes (){
  setDownVotes(downVotes + 1)
}

  return (
    <div className="App">
      <Iframe upVotes={upVotes} downVotes={downVotes} handleUpVotes={handleUpVotes} handleDownVotes={handleDownVotes}/>
      
    </div>
  );
}

export default App;
