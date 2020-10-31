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

export default function AppBar({ user }) {
  const classes = useStyles()
  const auth = useAuth()
  const { pathname } = useLocation()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false)
  const [sizeMenuOpen, setSizeMenuOpen] = useState(false)
  const [volumeMenuOpen, setVolumeMenuOpen] = useState(false)
  const open = Boolean(anchorEl)

  const { totalScore } = useContext(UserContext)

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleSettingsDrawer = (open) => {
    setDrawerOpen(open)
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
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            className={classes.menuTitle}
            onClick={handleRedirectToHome}
          >
            Sound Speller
          </Typography>
          {user && (
            <div>
              <Typography>Score: {totalScore}</Typography>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                {auth.isEducator && (
                  <MenuItem onClick={handleViewStudents}>My Students</MenuItem>
                )}
                <MenuItem onClick={handleViewLessons}>View Lessons</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
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
