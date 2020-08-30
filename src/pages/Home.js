import * as React from 'react'
import Container from '@material-ui/core/Container'

import LessonList from '../components/LessonList'
import { useRealmApp } from '../realm/RealmApp'

const Home = () => {
  console.log("Hello from Home")
  return (
    <Container maxWidth='sm'>
      <LessonList />
    </Container>
  )
}

export default Home
