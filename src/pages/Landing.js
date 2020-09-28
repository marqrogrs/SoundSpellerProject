import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

//Material UI
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Landing = () => {
  const history = useHistory()

  return (
    <>
      <Grid
        container
        direction='column'
        alignItems='center'
        // className={classes.signUpForm}
        spacing={1}
      >
        <Grid item>
          <Typography variant='h2'>Welcome to SoundSpeller!</Typography>
        </Grid>
        <Typography>I am a...</Typography>
        {/* <Grid container item direction='row' spacing={3}>
          <Grid item xs={6}>
            <img src={require('../img/kids.png')} height={300}></img>
          </Grid>
          <Grid item xs={6}>
            <img src={require('../img/adults.png')} height={300}></img>
          </Grid>
        </Grid> */}
        <Grid container item direction='row' spacing={3}>
          <Grid item xs={6}>
            <Typography
              variant='h1'
              style={{
                fontFamily: 'Indie Flower',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => history.push('/student')}
            >
              KID
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant='h2'
              style={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => history.push('/educator')}
            >
              Adult
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Landing
