import React from 'react'
import { useParams } from 'react-router-dom'
import ProgressList from '../components/ProgressList'
import Container from '@material-ui/core/Container'
import ProgressListFilter from '../components/ProgressListFilter'


export default function Progress() {
  const { student } = useParams()

  return (
    <>
      <Container maxWidth='md'>
        {/* <ProgressListFilter /> */}
        <ProgressList student={student} />
      </Container>
    </>
  )
}
