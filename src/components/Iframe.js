import { useState } from "react";
import video from "../data/video";
import Comments from "./Comments";
import HideButton from "./HideButton";
import Votes from "./Votes";
import { Container, Col, Button } from "react-bootstrap";

function Iframe({ upVotes, handleUpVotes, downVotes, handleDownVotes }) {
  const [hideButton, setHideButton] = useState(false);

  function handlesComments() {
    setHideButton(!hideButton);
  }

  let buttonContent = hideButton ? "Show Comments" : "Hide Comments";

  //console.log({ hideButton });
  return (
    <Container>
      <Col>
        <iframe
          width="900"
          height="450"
          src={video.embedUrl}
          allowFullScreen
          title="Thinking in React"
        />
        <h3>{video.title}</h3>
        <p>
          {video.views} views| Uploaded {video.createdAt}
        </p>
        <Votes
          upVotes={upVotes}
          handleUpVotes={handleUpVotes}
          downVotes={downVotes}
          handleDownVotes={handleDownVotes}
        />

        <HideButton handlesComments={handlesComments} buttonContent={buttonContent} />
        {hideButton ? null : <Comments />}
      </Col>
    </Container>
  );
}

export default Iframe;
