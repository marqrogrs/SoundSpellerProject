import React from 'react'

import ProgressList from '../components/ProgressList'
import Container from '@material-ui/core/Container'

export default function Progress() {
  return (
    <>
      <Container maxWidth='sm'>
        <ProgressList />
      </Container>
    </>
  )
}
