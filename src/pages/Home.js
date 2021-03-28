import * as React from 'react'
import Container from '@material-ui/core/Container'

import Progress from '../pages/Progress'

import { useAuth } from '../hooks/useAuth'
import { useStyles } from '../styles/material'

import Banner from '../components/Banner'

import { FUN_FACTS } from '../util/constants'

const Home = () => {
  const { user, username } = useAuth()
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Banner
        header={`Welcome back, ${
          user.email ? user.email.slice(0, user.email.indexOf('@')) : user.uid
        }!`}
        text={`Fun Fact of The Day: ${FUN_FACTS[new Date().getDate() - 1]}`}
      />
      <Progress />
    </Container>
  )
}

export default Home
