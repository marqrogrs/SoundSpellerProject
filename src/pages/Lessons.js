import React from 'react'
import LessonList from '../components/LessonList'
import Container from '@material-ui/core/Container'

export default function Lessons() {
  return (
    <Container maxWidth='sm'>
      <LessonList />
    </Container>
  )
}
