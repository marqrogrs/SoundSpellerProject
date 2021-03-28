import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'

import { useStyles } from '../styles/material'

export default function CustomAlert({ severity, title, message }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <Collapse in={open}>
        <Alert
          severity={severity}
          className={classes.alert}
          variant="filled"
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </div>
  )
}
