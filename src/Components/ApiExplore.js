import React from 'react';
import './ApiExplore.css'; // CSS file ko import karein

import logos from "./logos-tablet-png-rendition.webp"

const ApiExplore = () => {
  return (
    <div className="api-container">
      <div className="api-content">
        <h1>Integrate with our open platform <br /> to simplify workflows</h1>
        <p>
         Connect over 300 pre-built integrations, or build custom integrations with our open APIs. </p>

        <div className="icons">
          {/* 9 icons for display */}
        <img src={logos} alt="" />
        </div>

        <div className="buttons">
          <button className="primary">Explore integrations</button>
          <a href="#">Explore APIs</a>
        </div>
      </div>
    </div>
  );
};

export default ApiExplore;
