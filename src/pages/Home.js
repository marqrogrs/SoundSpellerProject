import * as React from 'react'
import Container from '@material-ui/core/Container'

import Progress from '../pages/Progress'

const Home = () => {
  console.log("Hello from Home")
  return (
    <Container maxWidth='md'>
      <Progress />
    </Container>
  )
}

export default Home
