import React, { useContext, useEffect } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { LessonContext } from '../providers/LessonProvider'
import ProgressListItem from './ProgressListItem'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ProgressList() {
  const { userProgress, lessons } = useContext(LessonContext)
  const classes = useStyles()
  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Lesson</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map((lesson) => {
              const progress = userProgress.filter(
                (progress) => progress.lesson === lesson.lesson_id
              )[0]
              return <ProgressListItem lesson={lesson} progress={progress} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
