import React from "react";
import "./_videos.scss";
import video from './vid1.jpg';
import image from './codaffection.jpg';
import { AiFillEye } from "react-icons/ai";

const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
         <img src={video} alt='' />
        <span className="video__top__duration">05:43</span>
      </div>
      <div className="video__title">
        Create App in 5 minutes made by rc
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>{" "}
        <span> </span>
      </div>
      <div className="video__channel">
      <img src={image} alt='' />
        <p>CodAffection</p>
      </div>
    </div>
  );
};

export default Videos;
