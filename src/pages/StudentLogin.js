import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CustomAlert from '../components/CustomAlert'

import { useStyles } from '../styles/material'

export default function StudentLogin() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = useAuth()

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      default:
        break
    }
  }

  const handleSignIn = () => {
    setError(null)
    auth.signInStudent(name, password).catch((error) => {
      setError(error.message)
    })
  }

  return (
    <div>
      {error && <CustomAlert title='Error' message={error} severity='error' />}
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
              name='name'
              label='Name'
              variant='outlined'
              color='secondary'
              value={name}
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
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
