import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { useStyles } from '../styles/material';

import { default as MaterialAppBar } from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Menu,
  MenuItem,
  Typography,
  Toolbar,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useAuth } from '../hooks/useAuth';
import { UserContext } from '../providers/UserProvider';

//import { SOUNDSPELLER_URL } from '../util/constants';
var SSBannerLong = require('../img/SSBannerLong.png');

export default function AppBar({ user }) {
  const classes = useStyles();
  const auth = useAuth();
  const { pathname } = useLocation();
  const history = useHistory();
  const [leftAnchorEl, setLeftAnchorEl] = useState(null);
  const [rightAnchorEl, setRightAnchorEl] = useState(null);

  const rightMenuOpen = Boolean(rightAnchorEl);
  const leftMenuOpen = Boolean(leftAnchorEl);

  const { totalScore } = useContext(UserContext);

  const handleLeftMenu = (e) => {
    setLeftAnchorEl(e.currentTarget);
  };

  const handleRightMenu = (e) => {
    setRightAnchorEl(e.currentTarget);
  };

  const handleClose = (menu) => {
    switch (menu) {
      case 'left':
        setLeftAnchorEl(null);
      case 'right':
        setRightAnchorEl(null);
      default:
        return;
    }
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleCreateLesson = () => {
    history.push('/create-lesson');
  };

  const handleViewStudents = () => {
    history.push('/students');
  };

  const handleRedirectToHome = () => {
    history.push('/');
  };

  const handleViewSpellingPatterns = () => {
    history.push('/spelling-patterns');
  };

  const handleViewStudyWords = () => {
    history.push('/study-words');
  };

  return (
    <div>
      <MaterialAppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleLeftMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={leftAnchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={leftMenuOpen}
            onClose={() => handleClose('left')}
          >
            
             <MenuItem
             onClick={() => window.open('/About', '_blank')}

              >About
            </MenuItem>
<MenuItem
             onClick={() => window.open('/Method', '_blank')}
            >
              Method
            </MenuItem>
<MenuItem
             onClick={() => window.open('/Contents', '_blank')}
            >
              Contents
            </MenuItem>

            <MenuItem
              onClick={() =>
                window.location.assign('mailto:mark@birdhaven.us')
              }
            >
              Contact Us
            </MenuItem>
            <MenuItem onClick={() => history.push('/')}>
              Login
            </MenuItem>
          </Menu>
          {user && (
            <Typography
              variant="h6"
              className={classes.menuTitle}
              onClick={handleRedirectToHome}
            >
              Sound Speller
            </Typography>
          )}
          {user && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleRightMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={rightAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={rightMenuOpen}
                onClose={() => handleClose('right')}
              >
                {auth.isEducator && (
                  <MenuItem onClick={handleViewStudents}>
                    My Students
                  </MenuItem>
                )}
                {/* <MenuItem onClick={handleCreateLesson}>
                  Create Lesson
                </MenuItem> */}
                <MenuItem
                  onClick={() => handleViewSpellingPatterns('alô')}
                >
                  Spelling Patterns
                </MenuItem>{' '}
                {/*  <MenuItem onClick={handleViewStudyWords}>
                  Study Words
                </MenuItem> */}
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                {/* {
                  <MenuItem
                    onClick={() => history.push('/contact-us')}
                  >
                    Contact Us
                  </MenuItem>
                } */}
                <MenuItem onClick={() => history.push('/home')}>
                  About
                </MenuItem>
              </Menu>
              <Typography>Score: {totalScore}</Typography>
            </>
          )}
        </Toolbar>
      </MaterialAppBar>
    </div>
  );
}
