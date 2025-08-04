import React, { Component } from 'react';
import Desktopimg from './download-desktop.jpg';
import './Video.css';

export class Video extends Component {
  render() {
    return (
      <>
        <div className='video-main-container rounded-top-5 rounded-bottom-5'>
          <div className='year-text rounded-pill'>
            <p>
              <div className="spinner-border spinner-border-sm spinner" role="status">
                <span className="visually-hidden">Loading...</span> 
              </div> 
              25 years of trust, innovation & partnership 
               <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>

          <div className="video-container">
            <div className="video-box">
              <h3 className='video-text'>
                AI meets trusted <br />
                <span>communications</span>
              </h3>
              <p>
                Over 400,000 organisations worldwide — from small businesses to <br />
                the Fortune 1000 — use RingCentral to call, message, meet, support <br />
                customers, grow revenue, and run events.
              </p>
              <div className="btn">
                <button className='videobtn btn1'>See pricing</button>
                <button className='videobtn btn2'>Contact Sales</button>
              </div>
            </div>

            <div className='picdiv'>
              <img src={Desktopimg} alt="img" className='video-img' />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
