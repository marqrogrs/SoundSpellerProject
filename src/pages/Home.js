import * as React from 'react'
import Container from '@material-ui/core/Container'

import LessonList from '../components/LessonList'
import { useRealmApp } from '../realm/RealmApp'

const Home = () => {
  const app = useRealmApp()
  console.log(app.user)
  return (
    <Container maxWidth='sm'>
      <LessonList />
    </Container>
  )
}

export default Home
