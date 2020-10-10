import React, { useContext, useEffect, useState } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { LessonContext } from '../providers/LessonProvider'
import ProgressListItem from './ProgressListItem'

import { UserContext } from '../providers/UserProvider'
import { getLessonSubsection } from '../util/functions'
import { INIT_PROGRESS_OBJ } from '../util/constants'
import { useStyles } from '../styles/material'
import { db, auth } from '../firebase'

export default function ProgressList({ student }) {
  const { lessons } = useContext(LessonContext)
  const userContext = useContext(UserContext)
  const [userData, setUserData] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    console.log('student: ', student)
    var unsubscribeStudent = () => {}
    if (student) {
      unsubscribeStudent = db
        .collection('users')
        .where('username', '==', student)
        .where('educator', '==', auth.currentUser.uid)
        .onSnapshot((snap) => {
          console.log('data: ', snap.docs[0].data())
          setUserData(snap.docs[0].data())
        })
    } else {
      if (userContext.userData) {
        setUserData(userContext.userData)
      }
    }
    return () => {
      unsubscribeStudent()
    }
  }, [student, userContext])

  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Lesson</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData && (
              <>
                {lessons.map((lesson) => {
                  const lesson_section = lesson.lesson_section
                  const lesson_subsection = getLessonSubsection(lesson)
                  const progress = userData.progress[lesson_section]
                    ? userData.progress[lesson_section][lesson_subsection]
                      ? userData.progress[lesson_section][lesson_subsection]
                      : INIT_PROGRESS_OBJ
                    : INIT_PROGRESS_OBJ
                  return (
                    <ProgressListItem lesson={lesson} progress={progress} />
                  )
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
