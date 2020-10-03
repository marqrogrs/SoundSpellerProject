import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { useStyles } from '../styles/material'

export default function EducatorLogin() {
  const classes = useStyles()
  const history = useHistory()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const auth = useAuth()

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
  }

  const handleSignUp = () => {
    if (!isSignUp) {
      setIsSignUp(true)
    } else {
      //Validate
      auth.createUserWithEmailAndPassword(email, password)
    }
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <div>
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
          {isSignUp && (
            <Grid item>
              <TextField
                name='confirmPassword'
                label='Confirm Password'
                variant='outlined'
                color='secondary'
                type='password'
                value={confirmPassword}
                onChange={handleChange}
              ></TextField>
            </Grid>
          )}
          {!isSignUp && (
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Grid>
          )}

          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Grid>
          {isSignUp && (
            <div
              className={classes.textButton}
              onClick={() => setIsSignUp(false)}
            >
              Return to Sign In
            </div>
          )}
        </Grid>
      </form>
    </div>
  )
}
