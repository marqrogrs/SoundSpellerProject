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
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { UserContext } from '../providers/UserProvider'
import { getLessonSubsection } from '../util/functions'
import { INIT_PROGRESS_OBJ } from '../util/constants'
import { useStyles } from '../styles/material'
import { db, auth } from '../firebase'
import StandardLessonProgress from './StandardLessonProgress'
import CustomLessonProgress from './CustomLessonProgress'

export default function ProgressList({ student }) {
  const {
    lessons,
    lessonSections,
    rules,
    lessonsLoading,
    customLessons,
  } = useContext(LessonContext)
  const { userData } = useContext(UserContext)
  const [userProgress, setUserProgress] = useState(null)
  //TODO: instead of initializing to `0` being the selected tab, let's try to guesstimate what section the user would want to be on. We will do that by finding the section at which all previous consecutive lessons are completed. OR... we can implement the ability to store the last lesson the user worked on
  const [selectedTab, setSelectedTab] = useState(0)

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
          setUserProgress(snap.docs[0].data().progress)
        })
    } else {
      if (userData && userData.progress) {
        setUserProgress(userData.progress)
      }
    }
    return () => {
      unsubscribeStudent()
    }
  }, [student, userData])

  return (
    <>
      <StandardLessonProgress userProgress={userProgress} />
      <CustomLessonProgress userProgress={userProgress} />
    </>

  )
}
