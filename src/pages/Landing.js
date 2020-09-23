import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

//Material UI
import { useStyles } from '../styles/material'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Landing = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      default:
        break
    }
  }

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password)
  }
  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
  }

  return (
    <form>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.signUpForm}
        spacing={2}
      >
        <Grid item>
          <Typography>Welcome to SoundSpeller!</Typography>
        </Grid>
        <Grid item>
          <TextField
            name='email'
            label='Email'
            variant='outlined'
            color='secondary'
            value={email}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            name='password'
            label='Password'
            variant='outlined'
            color='secondary'
            type='password'
            value={password}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary' onClick={handleSignIn}>
            Sign In
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary' onClick={handleSignUp}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Landing
