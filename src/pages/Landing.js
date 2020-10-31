import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../styles/material'

//Material UI
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

var Snake = require('../img/Welcome.png')
// var Landing = require('../img/Landing.png')

const Landing = () => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <div id='landing-container'>
      <img src={Snake} />
      <div className='right-panel'>
        <div className='welcome-text'>
          <Typography className='upper-text'>WELCOME TO</Typography>
          <Typography className='lower-text'>SoundSpeller</Typography>
        </div>

        <div className='user-type kid' onClick={() => history.push('/student')}>
          <Typography className='upper-text'>I AM A</Typography>
          <Typography className='lower-text'>Kid</Typography>
        </div>
        <div
          className='user-type adult'
          onClick={() => history.push('/educator')}
        >
          <Typography className='upper-text'>I AM AN</Typography>
          <Typography className='lower-text' style={{ fontFamily: 'Roboto' }}>
            Adult
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Landing
