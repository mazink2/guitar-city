import React, { Component } from 'react';
import './dist/css/main.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Home from './components/home';
import Offered from './components/offered';
import Companies from './components/companies';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="home">
          <Home />
        </Element>

        <Element name="what-we-offer">
          <Offered />
        </Element>

        <Companies />

        <Element name="testimonials">
          <Testimonials />
        </Element>

        <Element name="contact-us">
          <Contact />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
