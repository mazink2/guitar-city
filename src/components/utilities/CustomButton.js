import React from 'react';
import Button from '@material-ui/core/Button';

import FastForwardIcon from '@material-ui/icons/FastForward';

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      {props.text}
      <FastForwardIcon />
    </Button >
  );
};

export default MyButton;