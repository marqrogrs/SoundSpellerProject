import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import SpeedIcon from '@material-ui/icons/Speed';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';

import SpeechSlider from './SpeechSlider';
import { useStyles } from '../styles/material';

export default function SpeechRateFab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {' '}
      <Tooltip title="Check the current speed of the speech">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.speechRateFab}
          size="small"
          onClick={handleMenu}
        >
          <SpeedIcon />
        </Fab>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <SpeechSlider />
      </Menu>
    </>
  );
}
