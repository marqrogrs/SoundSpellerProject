import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../styles/material';

//Material UI
import { Typography } from '@material-ui/core';

var SSLogo = require('../img/SSLogo.png');

const Landing = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div id="landing-container">
      <img id="logo" src={SSLogo} />
      <div
        className="user-type kid"
        onClick={() => history.push('/student')}
      >
        <Typography className="upper-text">Sign in as</Typography>
        <Typography className="lower-text">Student</Typography>
      </div>
      <div
        className="user-type adult"
        onClick={() => history.push('/educator')}
      >
        <Typography className="upper-text">Sign in as</Typography>
        <Typography
          className="lower-text"
          style={{ fontFamily: 'Roboto' }}
        >
          Educator
        </Typography>
      </div>
    </div>
  );
};

export default Landing;
