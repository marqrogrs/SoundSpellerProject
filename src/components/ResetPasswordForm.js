import React, { useState, useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../styles/material'
import { resetStudentPassword } from '../firebase'

export default function ResetPasswordForm({ student, open, setOpen }) {
  const classes = useStyles()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const handleResetPassword = () => {
    resetStudentPassword({ username: student, password }).then((res) => {
      const { error } = res.data
      if (error) {
        //TODO: use pretty error modal
        console.log(error)
      }
      setOpen(false)
    })
  }

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2>Reset Password</h2>
            <TextField
              name='password'
              label='Password'
              variant='outlined'
              color='primary'
              type='password'
              value={password}
              onChange={handleChange}
            ></TextField>
            <TextField
              name='confirmPassword'
              label='Confirm Password'
              variant='outlined'
              color='primary'
              type='password'
              value={confirmPassword}
              onChange={handleChange}
            ></TextField>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleResetPassword}
            >
              Reset
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
