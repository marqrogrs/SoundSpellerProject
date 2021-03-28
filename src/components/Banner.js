import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles } from '../styles/material'

export default function Banner({ header, text }) {
  const classes = useStyles()
  return (
    <Paper className={classes.welcomeBanner}>
      <Typography variant='h3' className={classes.welcomeBannerText}>
        {header}
      </Typography>
      <Typography variant='h6'>{text}</Typography>
    </Paper>
  )
}
