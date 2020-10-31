import React, { useState } from 'react'
import SpeechSlider from './SpeechSlider'
import Fab from '@material-ui/core/Fab'
import SpeedIcon from '@material-ui/icons/Speed'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { useStyles } from '../styles/material'

export default function SpeechRateFab() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const classes = useStyles()

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {' '}
      <Fab
        color='primary'
        aria-label='add'
        className={classes.fab}
        size='small'
        onClick={handleMenu}
      >
        <SpeedIcon />
      </Fab>
      <Menu
        anchorEl={anchorEl}
        // style={{ width: 300 }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <SpeechSlider />
      </Menu>
    </>
  )
}
