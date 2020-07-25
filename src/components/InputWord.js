import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function InputWord({ word }) {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.word} variant='h1'>
        {word}
      </Typography>
    </>
  )
}
