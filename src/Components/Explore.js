import React, { useRef } from 'react';
import './Explore.css';
import itemjpg from "./healthcare.jpg";

const data = [
  {
    id: 1,
    category: 'INTEGRATIONS',
    title: 'RingCentral for Microsoft Teams',
    image: itemjpg,
    link: '#'
  },
  {
    id: 2,
    category: 'AI NOTES',
    title: 'Save time with instant, accurate notes during every call',
    image: itemjpg,
    link: '#'
  },
  {
    id: 3,
    category: 'AI QUALITY MANAGEMENT',
    title: 'Coach agents faster with AI-automated scorecards',
    image: itemjpg,
    link: '#'
  },
  {
    id: 4,
    category: 'VOICE INTELLIGENCE',
    title: 'AI-powered call summaries for smarter conversations',
    image: itemjpg,
    link: '#'
  }
];

const Explore = () => {
  const sliderRef = useRef(null);

  const handleScroll = (dir) => {
    if (sliderRef.current) {
      const scrollAmount = 320; // 300 card + 20 gap
      sliderRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="explore-container">
     <h2 className="explore-title">
  <span>Explore product innovations</span>
</h2>

<div className="explore-nav-buttons">
  <button onClick={() => handleScroll('left')}>&larr;</button>
  <button onClick={() => handleScroll('right')}>&rarr;</button>
</div>


      <div className="explore-slider" ref={sliderRef}>
        {data.map((item) => (
          <div className="explore-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="explore-card-content">
              <small>{item.category}</small>
              <h3>{item.title}</h3>
              <a href={item.link}>Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

