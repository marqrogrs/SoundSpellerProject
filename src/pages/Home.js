import * as React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Progress from '../pages/Progress'

import { useAuth } from '../hooks/useAuth'
import { useStyles } from '../styles/material'

import { FUN_FACTS } from '../util/constants'

const Home = () => {
  const { user, username } = useAuth()
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Paper className={classes.welcomeBanner}>
        <Typography variant='h3' className={classes.welcomeBannerText}>
          Welcome back,{' '}
          {user.email ? user.email.slice(0, user.email.indexOf('@')) : user.uid}
          !
        </Typography>
        <Typography variant='h6'>
          Fun Fact of The Day: {FUN_FACTS[new Date().getDate() - 1]}
        </Typography>
      </Paper>
      <Progress />
    </Container>
  )
}

export default Home
