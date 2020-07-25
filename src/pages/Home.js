import * as React from 'react'
import Container from '@material-ui/core/Container'

import LessonList from '../components/LessonList'

const Home = () => {
  return (
    <Container maxWidth='sm'>
      <LessonList />
    </Container>
  )
}

export default Home
