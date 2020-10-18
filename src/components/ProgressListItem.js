import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '@material-ui/core/Button'

import { LEVELS } from '../util/constants'

import { useStyles } from '../styles/material'

export default function ProgressListItem({ lesson, progress, showButtons }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [button, setButton] = useState('')

  const [totalScore, setTotalScore] = useState(0)
  const [totalPossibleScore, setTotalPossibleScore] = useState(1)

  const classes = useStyles()

  useEffect(() => {
    // isInProgress if at at least one level is completed or had >0 completed words
    const isInProgress = Object.values(progress).filter(
      (p) => p.completed_words > 0 || p.completed
    )[0]

    // isCompleted is level 4 is complete
    const isCompleted = progress[LEVELS.length - 1].completed

    if (isCompleted) {
      setStatus(<CheckCircleIcon color='primary' />)
    } else if (isInProgress) {
      setStatus('In progress')
      setButton(
        <Link to={`lessons/${lesson.lesson_id}`}>
          <Button color='secondary' variant='contained'>
            Continue
          </Button>
        </Link>
      )
    } else {
      setStatus('Not started')
      setButton(
        <Link to={`lessons/${lesson.lesson_id}`}>
          <Button color='secondary' variant='outlined'>
            Start
          </Button>
        </Link>
      )
    }
    const total_score = Object.values(progress).reduce(
      (acc, current) => acc + current.high_score,
      0
    )
    setTotalScore(total_score)

    const total_possible_score =
      lesson.lesson_section === '1' // Only 3 levels
        ? lesson.words.length * 5 +
          lesson.words.length * 10 +
          lesson.words.length * 15
        : lesson.words.length * 5 +
          lesson.words.length * 10 +
          lesson.words.length * 15 +
          lesson.words.length * 20

    setTotalPossibleScore(total_possible_score)
  }, [lesson, progress])

  return (
    <>
      <TableRow className={classes.progressList}>
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
        <TableCell align='right'>
          {((totalScore / totalPossibleScore) * 100).toFixed(0)}%
        </TableCell>
        <TableCell align='right'>{showButtons && button}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>High Score</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {LEVELS.map((level, i) => {
                    if (lesson.lesson_section === '1' && i === 3) return
                    const isCompleted = progress[i].completed
                    const isInProgress =
                      progress[i].completed_words > 0 && !isCompleted

                    var levelStatus
                    if (isCompleted) {
                      levelStatus = <CheckCircleIcon color='primary' />
                    } else if (isInProgress) {
                      levelStatus = 'In Progress'
                    } else {
                      levelStatus = 'Not Started'
                    }
                    const highest_possible_score =
                      lesson.words.length * (i + 1) * 5
                    return (
                      <TableRow key={`${lesson.lesson_id}.${i}`}>
                        <TableCell component='th' scope='row'>
                          {i + 1}
                        </TableCell>
                        <TableCell>
                          {(
                            (progress[i].high_score / highest_possible_score) *
                            100
                          ).toFixed(0)}
                          %
                        </TableCell>
                        <TableCell>{levelStatus}</TableCell>
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
