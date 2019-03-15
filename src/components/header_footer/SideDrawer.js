import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -80
    });
    props.onClose(false)
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List style={{
        fontSize: '1.8rem'
      }}>
        <ListItem button onClick={() => scrollToElement('home')}>
          Home
        </ListItem>
        <ListItem button onClick={() => scrollToElement('what-we-offer')}>
          What we offer
        </ListItem>
        <ListItem button onClick={() => scrollToElement('testimonials')}>
          Testimonials
        </ListItem>
        <ListItem button onClick={() => scrollToElement('contact-us')}>
          Contact us
        </ListItem>
        <ListItem button onClick={() => scrollToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;



