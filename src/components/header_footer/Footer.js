import React from 'react';

import Button from '@material-ui/core/Button';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fab)

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div class="footer-container">
          <div className="store-info">
            <h2 className="site-name">Guitar City</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus beatae inventore eius. Exercitationem eveniet velit laudantium saepe adipisci excepturi!</p>
          </div>
          <div className="social-links">
            <h2>Connect With Us</h2>
            <ul class="list">
              <li>
                <a href="/">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </div>
                  Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                  </div>
                  YouTube
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                  </div>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="site-links">
            <h2>Site Links</h2>
            <ul class="list">
              <li><a href="/">Help & Support</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="join">
            <h2>Join Our Club</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, ad.</p>
            <Button variant="contained" className='submit-btn'>
              Join now
            </Button>
          </div>
          <div className="copyright">
            <p>Copyright &copy; 2019, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;