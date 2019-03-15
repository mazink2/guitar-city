import React from 'react';
import Carousel from './Carousel';

const home = () => {
  return (
    <div>
      <Carousel />

      <div className="store-name">
        <div className="flex-container">
          <div>
            <h1>Guitar City</h1>
            <p>For all your guitar needs!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;