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

export default function CustomLessonProgress({ student, userProgress }) {
  const { lessonsLoading, customLessons } = useContext(LessonContext)
  const { userData } = useContext(UserContext)
  const [customLessonProgress, setCustomLessonProgress] = useState(null)
  const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyles()

  useEffect(() => {
    var progress = {}
    if (!lessonsLoading) {
      customLessons.forEach((customLesson) => {
        if (userProgress[customLesson.id]) {
          progress[customLesson.id] = userProgress[customLesson.id]
        } else {
          progress[customLesson.id] = INIT_PROGRESS_OBJ
        }
      })
      setCustomLessonProgress(progress)
    }
  }, [lessonsLoading])

  return (
    <>
      <Typography variant='h3'>Custom Lessons</Typography>
      <div className={classes.progressTabContainer}>
        <Tabs
          value={selectedTab}
          onChange={(e, selected) => setSelectedTab(selected)}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='on'
          orientation='vertical'
          aria-label='section-tabs'
          className={classes.progressTabs}
        >
          {!lessonsLoading &&
            customLessons.map((lesson, i) => (
              <Tab
                label={`${lesson.title}`}
                id={`tab-${i}`}
                aria-controls={`tabpanel-${i}`}
              />
            ))}
        </Tabs>
        {customLessonProgress && (
          <>
            {customLessons.map((customLesson, i) => {
              return (
                <div
                  role='tabpanel'
                  hidden={selectedTab !== i}
                  id={`tab-${i}`}
                  aria-labelledby={`tabpanel-${i}`}
                  style={{ overflowY: 'scroll' }}
                >
                  {selectedTab === i && (
                    <>
                      <Box p={3} maxWidth={700}>
                        <Typography variant='h4'>
                          {customLesson.title}
                        </Typography>
                        <Typography variant='subtitle1'>
                          {customLesson.description}
                        </Typography>
                        <ProgressListItem
                          lesson={customLesson}
                          progress={customLessonProgress[customLesson.id]}
                          showButtons={student ? false : true}
                          key={i}
                          isOpen={true}
                          collapsible={false}
                          showDescription={false}
                        />
                      </Box>
                    </>
                  )}
                </div>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}
