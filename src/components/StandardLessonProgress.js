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


// TODO: we can refactor the StandardLesson and CustomLesson lists, just need to figure it out
export default function StandardLessonProgress({ student, userProgress }) {
  const { lessons, lessonSections, rules, lessonsLoading } = useContext(
    LessonContext
  )
  const { userData } = useContext(UserContext)
  //TODO: instead of initializing to `0` being the selected tab, let's try to guesstimate what section the user would want to be on. We will do that by finding the section at which all previous consecutive lessons are completed. OR... we can implement the ability to store the last lesson the user worked on
  const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyles()

  return (
    <>
      {' '}
      <Typography variant='h3'>Standard Lessons</Typography>
      <div className={classes.progressTabContainer}>
        <Tabs
          value={selectedTab}
          onChange={(e, selected) => setSelectedTab(selected)}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          orientation='vertical'
          aria-label='section-tabs'
          className={classes.progressTabs}
        >
          {!lessonsLoading &&
            lessonSections.map((section, i) => (
              <Tab
                label={`Section ${section.id}`}
                id={`tab-${i}`}
                aria-controls={`tabpanel-${i}`}
              />
            ))}
        </Tabs>
        {!lessonsLoading && (
          <>
            {' '}
            {lessonSections.map((section, i) => {
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
                        <Typography variant='h4'>{section.title}</Typography>
                        <Typography variant='subtitle1'>
                          {section.description}
                        </Typography>
                        <TableContainer component={Paper}>
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
                              {userProgress && (
                                <>
                                  {lessons
                                    .filter(
                                      (lesson) =>
                                        lesson.lesson_section === section.id
                                    )
                                    .map((lesson, i) => {
                                      const lesson_subsection = getLessonSubsection(
                                        lesson
                                      )

                                      const progress = userProgress[section.id]
                                        ? userProgress[section.id][
                                            lesson_subsection
                                          ]
                                          ? userProgress[section.id][
                                              lesson_subsection
                                            ]
                                          : INIT_PROGRESS_OBJ
                                        : INIT_PROGRESS_OBJ
                                      const lesson_rules = lesson.rules
                                        ? lesson.rules.map(
                                            (rule) => rules[rule]
                                          )
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
