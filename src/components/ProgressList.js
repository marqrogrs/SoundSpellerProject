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
  const { userData } = useContext(UserContext)
  const [userLessonData, setUserLessonData] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    // console.log('student: ', student)
    var unsubscribeStudent = () => {}
    if (student) {
      unsubscribeStudent = db
        .collection('users')
        .where('username', '==', student)
        .where('educator', '==', auth.currentUser.uid)
        .onSnapshot((snap) => {
          // console.log('data: ', snap.docs[0].data())
          setUserLessonData(snap.docs[0].data())
        })
    } else {
      if (userData && userData.progress) {
        setUserLessonData(userData)
      }
    }
    return () => {
      unsubscribeStudent()
    }
  }, [student, userData])

  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Lesson</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Score</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userLessonData && (
              <>
                {lessons.map((lesson) => {
                  const lesson_section = lesson.lesson_section
                  const lesson_subsection = getLessonSubsection(lesson)

                  const progress = userLessonData.progress[lesson_section]
                    ? userLessonData.progress[lesson_section][lesson_subsection]
                      ? userLessonData.progress[lesson_section][
                          lesson_subsection
                        ]
                      : INIT_PROGRESS_OBJ
                    : INIT_PROGRESS_OBJ
                  return (
                    <ProgressListItem
                      lesson={lesson}
                      progress={progress}
                      showButtons={student ? false : true}
                    />
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
