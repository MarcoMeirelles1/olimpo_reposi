import React from 'react';
import video from '../assets/academia.mp4';

function VideoBackground() {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default VideoBackground;
