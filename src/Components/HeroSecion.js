import React, { Component } from 'react';
import './Hero.css';
import Heroimg from "./cardimg-3.jpg"
export class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container rounded-top-5 rounded-bottom-5">
        <div className="hero-text">
        <p className='hero-heading'><i className="fa-solid fa-phone first-icon rounded-top-3 rounded-bottom-3"></i> RingEX</p>
        <p className='hero-text1'><strong>The world’s most reliable <br /> communications <br /> platform</strong></p>
        <p className='hero-text2'>Empower every employee with AI-powered calls,<br /> messages, and meetings across devices.</p>
        <button className=" rounded-pill hero-btn">ExploreRingEx</button>
            <div className="products-container">
  <ul className="product-column">
    <li>| Phone <i className="fa-solid fa-arrow-right"></i></li>
    <li>| Online Fax <i className="fa-solid fa-arrow-right"></i></li>
    <li>| Messaging <i className="fa-solid fa-arrow-right"></i></li>
  </ul>
  <ul className="product-column">
    <li>| Messaging <i className="fa-solid fa-arrow-right"></i></li>
    <li>| Video Meeting <i className="fa-solid fa-arrow-right"></i></li>
    <li>| Open Platform <i className="fa-solid fa-arrow-right"></i></li>
  </ul>
</div>
        </div>

<div className="hero-img">
  <img src={Heroimg}alt="" style={{height:'300px'}} />
</div>
      </div>
    );
  }
}

export default HeroSection;
