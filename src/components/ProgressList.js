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
import { Typography } from '@material-ui/core'

export default function ProgressList({ student }) {
  const { lessons, lessonSections, rules, lessonsLoading } = useContext(
    LessonContext
  )
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
      {!lessonsLoading &&
        lessonSections.map((section) => {
          return (
            <>
              <Typography variant='h4'>
                Section {section.id}. {section.title}
              </Typography>
              <Typography variant='subtitle1'>{section.description}</Typography>
              <TableContainer component={Paper} className={classes.table}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Lesson</TableCell>
                      <TableCell align='right'>Status</TableCell>
                      <TableCell align='right'>Score</TableCell>
                      <TableCell align='right'></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userLessonData && (
                      <>
                        {lessons
                          .filter(
                            (lesson) => lesson.lesson_section === section.id
                          )
                          .map((lesson, i) => {
                            const lesson_subsection = getLessonSubsection(
                              lesson
                            )

                            const progress = userLessonData.progress[section.id]
                              ? userLessonData.progress[section.id][
                                  lesson_subsection
                                ]
                                ? userLessonData.progress[section.id][
                                    lesson_subsection
                                  ]
                                : INIT_PROGRESS_OBJ
                              : INIT_PROGRESS_OBJ
                            const lesson_rules = lesson.rules
                              ? lesson.rules.map((rule) => rules[rule])
                              : null
                            return (
                              <ProgressListItem
                                lesson={lesson}
                                rules={lesson_rules}
                                progress={progress}
                                showButtons={student ? false : true}
                                key={i}
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
        })}
    </>
  )
}
