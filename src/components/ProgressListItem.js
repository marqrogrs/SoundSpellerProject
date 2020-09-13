import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import { LEVELS } from '../util/constants'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

export default function ProgressListItem({ lesson, progress }) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  var status
  if (
    lesson.words.length === progress.completed_words &&
    progress.level === 3
  ) {
    status = 'Complete'
  } else if (progress.completed_words > 0) {
    status = 'In Progress'
  } else {
    status = 'Not Started'
  }

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {lesson.lesson_id}
        </TableCell>
        <TableCell align='right'>{lesson.title}</TableCell>
        <TableCell align='right'>{status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>Completed Words</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {LEVELS.map((level, i) => {
                    var percent_complete
                    if (progress.level === i) {
                      percent_complete = `${(
                        (progress.completed_words / lesson.words.length) *
                        100
                      ).toFixed(0)}%`
                    } else if (progress.level > i) {
                      percent_complete = '100%'
                    } else {
                      percent_complete = '0%'
                    }
                    return (
                      <TableRow key={`${lesson.lesson_id}.${level}`}>
                        <TableCell component='th' scope='row'>
                          {i + 1}
                        </TableCell>
                        <TableCell>{percent_complete}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
