import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CustomAlert from '../components/CustomAlert'

import { useStyles } from '../styles/material'
import { useFormik } from 'formik'

var Snake = require('../img/Welcome.png')

export default function StudentLogin() {
  const classes = useStyles()
  const [error, setError] = useState(null)
  const auth = useAuth()
  const history = useHistory()

  const handleSignIn = ({name, password}) => {
    setError(null)
    auth.signInStudent(name, password).catch((error) => {
      console.log(error)
      setError(error.message)
    })
  }

  const validate = (values) => {
    const errors = {}
    const { name, password } = values

    if (!name) {
      errors.name = 'Required'
    } else if (!/^[a-z0-9]+$/gi.test(name)) {
      errors.name = 'Username can only contain letters and numbers'
    }

    if (!password) {
      errors.password = 'Required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      handleSignIn(values)
    },
  })

  return (
    <div id='landing-container'>
      {error && <CustomAlert title='Error' message={error} severity='error' />}
      <img src={Snake} />
      <div className='right-panel'>
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
                color='primary'
                value={formik.values.name}
                error={formik.errors.name}
                helperText={formik.errors.name}
                onChange={formik.handleChange}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                name='password'
                label='Password'
                variant='outlined'
                color='primary'
                type='password'
                value={formik.values.password}
                error={formik.errors.password}
                helperText={formik.errors.password}
                onChange={formik.handleChange}
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                onClick={formik.handleSubmit}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Button color='primary' onClick={() => history.push('/')}>
                Go Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  )
}
