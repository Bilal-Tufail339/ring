import React from 'react';
import './Footer.css'; // styling alag file mein rakhen
import video from './footer-bkg.webm';
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <div className='responsive-video'>
      <video autoPlay muted loop playsInline className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

 <div className="content">
    <div className='content-text'>    <h1 className='era'>Welcome to a new era  <br /> of AI at work</h1>
      <div className='footer-btn'>  <button className='footer-btn1  rounded-pill'>See pricing</button>
        <button className='footer-btn2 rounded-pill'>contact sales</button></div>
        </div>
      
      </div>
      <div />
</div>
     
    </div>
  );
};

export default BackgroundVideo;
