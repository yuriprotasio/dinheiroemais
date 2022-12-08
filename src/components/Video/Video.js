import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const Video = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [html, setHTML] = useState({__html: ""});
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [])
  return (
    <div dangerouslySetInnerHTML={{__html: `
    <style>
  
        .vjs-big-play-button {
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
        }
      </style>
      <video
          id="videoPlayer"
          class="video-js"
          controls
          preload="auto"
          width="1000"
          height="560"
          data-setup="{}"
        >
        <source src="https://d2i3s4hc3thm4p.cloudfront.net/files/${token}.mp4" type="video/mp4" />
      </video>
    `}} />
  )
};

Video.propTypes = {};

Video.defaultProps = {};

export default Video;
