import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import slide_one from '../../dist/img/electric-closeup-1.jpg';
import slide_two from '../../dist/img/electric-closeup-2.jpg';
import slide_three from '../../dist/img/fretboard.jpg';

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    delay: 1000
  }

  return (
    <div
      className="carousel"
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel-item"
            style={{
              background: `url(${slide_one}) no-repeat center center / cover`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carousel-item"
            style={{
              background: `url(${slide_two}) no-repeat center center / cover`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carousel-item"
            style={{
              background: `url(${slide_three}) no-repeat center center / cover`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

