import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useHistory, useLocation } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import swal from 'sweetalert';

import { useFormik } from 'formik'
import { PAYPAL_URL } from '../util/constants'
var Snake = require('../img/Welcome.png')

//TODO: not a fan of the styling here
export default function Login() {
  let { pathname } = useLocation()
  const allowSignUp = pathname !== '/student'
  const isStudentLogin = pathname === '/student'

  const [isSignUp, setIsSignUp] = useState(false)

  const auth = useAuth()
  const history = useHistory()

  const handleSignIn = (values) => {
    if (isStudentLogin) {
      console.log('Signing in')
      auth.signInStudent(values.name, values.password)
    } else {
      swal({
        title: 'Donate',
        text: 'Would you like to donate before continuing?',
        buttons: ['Not today', true],
      }).then((redirectToPaypal) => {
        if (redirectToPaypal) {
          window.open(PAYPAL_URL, '_blank')
        }
        auth.signInWithEmailAndPassword(
          formik.values.email,
          formik.values.password
        )
      })
    }
  }

  const validate = (values) => {
    const errors = {}
    const { name, email, password, confirmPassword } = values

    if (!email) {
      errors.email = 'Required'
    }
    if (!name) {
      errors.name = 'Required'
    } else if (!/^[a-z0-9]+$/gi.test(name)) {
      errors.name = 'Username can only contain letters and numbers'
    }

    if (!password) {
      errors.password = 'Required'
    } else if (isSignUp && password.length < 6) {
      errors.password = 'Password must be 6+ characters'
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Required'
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Confirmation does not match'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: isStudentLogin
      ? {
        name: '',
        password: '',
      }
      : {
        email: '',
        password: '',
        confirmPassword: '',
      },
    validate,
  })

  return (
    <div id='landing-container'>
      <img src={Snake} />
      <div className='right-panel'>
        <form>
          <Grid container direction='column' alignItems='center' spacing={2}>
            <Grid item>
              <Typography>Welcome to SoundSpeller!</Typography>
            </Grid>
            {isStudentLogin ? (
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
            ) : (
              <Grid item>
                <TextField
                  name='email'
                  label='Email'
                  variant='outlined'
                  color='primary'
                  value={formik.values.email}
                  error={formik.errors.email}
                  helperText={formik.errors.email}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>
            )}
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
            {isSignUp && (
              <Grid item>
                <TextField
                  name='confirmPassword'
                  label='Confirm Password'
                  variant='outlined'
                  color='primary'
                  type='password'
                  value={formik.values.confirmPassword}
                  error={formik.errors.confirmPassword}
                  helperText={formik.errors.confirmPassword}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>
            )}
            {!isSignUp && (
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleSignIn(formik.values)}
                >
                  Sign In
                </Button>
              </Grid>
            )}
            {allowSignUp && (
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    if (!isSignUp) {
                      setIsSignUp(true)
                    } else {
                      console.log('Creating user')
                      auth.createUserWithEmailAndPassword(
                        formik.values.email,
                        formik.values.password
                      )
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            )}

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
