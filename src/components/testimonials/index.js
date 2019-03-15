import React from 'react';

import terrance from '../../dist/img/people/terrance-taylor.jpg';
import marie from '../../dist/img/people/marie-foster.jpg';
import dale from '../../dist/img/people/dale-hansen.jpg';
import bernice from '../../dist/img/people/bernice-holmes.jpg';

import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <div className="container">
      <div className="testimonials-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="bottom-line"></div>
        <div class="testimonials">
          <Fade bottom>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
            </p>
              <ul>
                <li><img src={bernice} alt="" /></li>
                <li>Bernice Holmes, Ottawa</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
            </p>
              <ul>
                <li><img src={terrance} alt="" /></li>
                <li>Terrance Taylor, Toronto</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
            </p>
              <ul>
                <li><img src={marie} alt="" /></li>
                <li>Marie Foster, Montreal</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
            </p>
              <ul>
                <li><img src={dale} alt="" /></li>
                <li>Dale Hansen, Victoria</li>
              </ul>
            </div>
          </Fade>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;