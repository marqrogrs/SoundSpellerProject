import React, { useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { useStyles } from '../styles/material'

import { default as MaterialAppBar } from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import {
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Settings from '@material-ui/icons/Settings'
import SpeechSlider from '../components/SpeechSlider'

import { useAuth } from '../hooks/useAuth'
import { UserContext } from '../providers/UserProvider'

import { PAYPAL_URL, SOUNDSPELLER_URL } from '../util/constants'

export default function AppBar({ user }) {
  const classes = useStyles()
  const auth = useAuth()
  const { pathname } = useLocation()
  const history = useHistory()
  const [leftAnchorEl, setLeftAnchorEl] = useState(null)
  const [rightAnchorEl, setRightAnchorEl] = useState(null)

  const rightMenuOpen = Boolean(rightAnchorEl)
  const leftMenuOpen = Boolean(leftAnchorEl)

  const { totalScore } = useContext(UserContext)

  const handleLeftMenu = (e) => {
    setLeftAnchorEl(e.currentTarget)
  }

  const handleRightMenu = (e) => {
    setRightAnchorEl(e.currentTarget)
  }

  const handleClose = (menu) => {
    switch (menu) {
      case 'left':
        setLeftAnchorEl(null)
      case 'right':
        setRightAnchorEl(null)
      default:
        return
    }
  }

  const handleSignOut = () => {
    auth.signOut()
  }

  const handleViewLessons = () => {
    history.push('/lessons')
  }

  const handleViewStudents = () => {
    history.push('/students')
  }

  const handleRedirectToHome = () => {
    history.push('/')
  }

  return (
    <div>
      <MaterialAppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleLeftMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
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
            <MenuItem onClick={() => window.open(SOUNDSPELLER_URL, '_blank')}>
              About
            </MenuItem>
            {/* <MenuItem onClick={() => window.open(PAYPAL_URL, '_blank')}>
              Donate
            </MenuItem> */}
            <MenuItem onClick={() => history.push('/contact-us')}>
              Contact Us
            </MenuItem>
          </Menu>
          <Typography
            variant='h6'
            className={classes.menuTitle}
            onClick={handleRedirectToHome}
          >
            Sound Speller
          </Typography>
          {user && (
            <>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleRightMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                  <MenuItem onClick={handleViewStudents}>My Students</MenuItem>
                )}
                <MenuItem onClick={handleViewLessons}>View Lessons</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                <MenuItem onClick={() => history.push('/contact-us')}>
                  Contact Us
                </MenuItem>
              </Menu>
              <Typography>Score: {totalScore}</Typography>
            </>
          )}
        </Toolbar>
      </MaterialAppBar>
      {user && (
        <Breadcrumbs aria-label='breadcrumb'>
          {pathname.split('/').map((path, index) => {
            const last = pathname.split('/').length - 1
            if (index === 0) {
              return (
                <Link
                  color='inherit'
                  onClick={() => history.push('/')}
                  key={path}
                >
                  Sound Speller
                </Link>
              )
            }
            return (
              <Link
                color={index === last ? 'textPrimary' : 'textSecondary'}
                onClick={() =>
                  history.push(
                    pathname
                      .split('/')
                      .slice(0, index + 1)
                      .join('/')
                  )
                }
                aria-current='page'
                key={path}
              >
                {typeof path === 'string'
                  ? path.charAt(0).toUpperCase() + path.slice(1)
                  : path}
              </Link>
            )
          })}
        </Breadcrumbs>
      )}
    </div>
  )
}
