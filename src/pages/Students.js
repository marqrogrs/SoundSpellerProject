import React, { useContext, useEffect } from 'react'
import { UserContext } from '../providers/UserProvider'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

import { useStyles } from '../styles/material'

import ClassListItem from '../components/ClassListItem'

export default function Students() {
  const classes = useStyles()
  const { addNewStudent, classrooms } = useContext(UserContext)

  const handleNewStudentClicked = () => {
    addNewStudent({ username: 'test', password: 'test', classroom: 'test' })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    console.log(classrooms)
  }, [classrooms])
  return (
    <div>
      <Container maxWidth='sm'>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Class Name</TableCell>
                <TableCell align='right'># Students</TableCell>
                {/* <TableCell align='right'>Date Created</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {classrooms.map((classroom) => {
                return <ClassListItem classroom={classroom} />
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant='contained'
          color='secondary'
          onClick={handleNewStudentClicked}
          startIcon={<Add />}
        >
          New Student
        </Button>
      </Container>
    </div>
  )
}
