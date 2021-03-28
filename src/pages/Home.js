import * as React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Progress from '../pages/Progress'

import { useAuth } from '../hooks/useAuth'
import { useStyles } from '../styles/material'

import Banner from '../components/Banner'
import Statistics from '../components/Statistics'

import { FUN_FACTS } from '../util/constants'

const Home = () => {
  const { user } = useAuth()

  return (
    <Container maxWidth='lg'>
      <Banner
        header={`Welcome back, ${
          user.email ? user.email.slice(0, user.email.indexOf('@')) : user.uid
        }!`}
        text={`Fun Fact of The Day: ${FUN_FACTS[new Date().getDate() - 1]}`}
      />
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Progress />
        </Grid>
        <Grid item xs={3}>
          <Statistics />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
