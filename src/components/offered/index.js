import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import CustomButton from '../utilities/CustomButton';

import guitars from '../../dist/img/guitar-store-min.jpg';
import tuners from '../../dist/img/tuners-min.jpg';
import amplifier from '../../dist/img/amplifier-min.jpg';

class Offered extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="offered-section">
            <h2 className="section-title">What we offer</h2>
            <div className="bottom-line"></div>
            <div className="offers">
              {/* <Fade up duration={2000}> */}
              <div className="outer">
                <div className="inner">
                  <div className="image" style={{
                    background: `url('${guitars}') no-repeat center center / cover`
                  }} />
                  <div className="text">
                    <div>
                      <h1>Guitars</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium.</p>
                      <CustomButton
                        text="More info&nbsp;"
                        bck="yellow"
                        color="#000"
                        class="offered-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="outer">
                <div className="inner">
                  <div className="image" style={{
                    background: `url('${tuners}') no-repeat center center / cover`
                  }} />
                  <div className="text">
                    <h1>Accessories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium.</p>
                    <CustomButton
                      text="More info&nbsp;"
                      bck="yellow"
                      color="#000"
                      class="offered-button"
                    />
                  </div>
                </div>
              </div>
              <div className="outer">
                <div className="inner">
                  <div className="image" style={{
                    background: `url('${amplifier}') no-repeat center center / cover`
                  }} />
                  <div className="text">
                    <h1>Amps</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium.</p>
                    <CustomButton
                      text="More info&nbsp;"
                      bck="yellow"
                      color="#000"
                      class="offered-button"
                    />
                  </div>
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>

      </div >
    );
  }
}

export default Offered;