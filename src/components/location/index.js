import React from 'react';

import Fade from 'react-reveal/Fade';

const Location = () => {
  return (
    <Fade bottom>
      <div className="location-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.857906680509!2d-75.6912767!3d45.4251777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadb5eb264eeb2625!2sCF+Rideau+Centre!5e0!3m2!1sen!2sca!4v1552501853454"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="map"
        ></iframe>

        <div className="location-tag">
          <div className="location-text">
            Location
        </div>
        </div>
      </div>
    </Fade>

  );
};

export default Location;