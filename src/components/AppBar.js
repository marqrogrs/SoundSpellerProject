import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { default as MaterialAppBar } from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import {
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
} from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function AppBar({ user }) {
  const classes = useStyles()
  const { pathname } = useLocation()
  console.log(pathname)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleBreadcrumbClick = () => {}

  return (
    <div className={classes.root}>
      <MaterialAppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Sound Speller
          </Typography>
          {user && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
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
                  href='/'
                  onClick={handleBreadcrumbClick}
                  key={path}
                >
                  Sound Speller
                </Link>
              )
            }
            return (
              <Link
                color={index === last ? 'textPrimary' : 'textSecondary'}
                href={pathname
                  .split('/')
                  .slice(0, index + 1)
                  .join('/')}
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
