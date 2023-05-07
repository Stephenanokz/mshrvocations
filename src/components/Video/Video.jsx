import React from "react";
import "./Video.scss";

const Video = ({ videoSrc }) => {
  return (
    <video controls className="videoPlayer">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
