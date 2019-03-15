import React from 'react';

import fender from '../../dist/img/logos/fender.png';
import ibanez from '../../dist/img/logos/ibanez.png';
import schecter from '../../dist/img/logos/schecter.png';
import yamaha from '../../dist/img/logos/yamaha.png';


const Companies = () => {
  return (
    <div class="container">
      <div className="companies-container">
        <div className="companies-section">
          <img src={fender} alt="fender logo" />
          <img src={yamaha} alt="yamaha logo" />
          <img src={schecter} alt="schecter logo" />
          <img src={ibanez} alt="ibanez logo" />
        </div>
      </div>
    </div>
  );
};

export default Companies;