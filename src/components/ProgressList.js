import React, { useContext, useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LessonContext } from '../providers/LessonProvider';
import ProgressListItem from './ProgressListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { UserContext } from '../providers/UserProvider';
import { getLessonSubsection } from '../util/functions';
import { INIT_PROGRESS_OBJ } from '../util/constants';
import { useStyles } from '../styles/material';
import { db, auth, usersCollection } from '../firebase';

export default function ProgressList({ student, type }) {
  const {
    lessons,
    lessonSections,
    lessonsLoading,
    customLessonSections,
    customLessons,
  } = useContext(LessonContext);
  const { userData, userDataLoaded } = useContext(UserContext);

  const isCustom = type === 'custom';
  const [userProgress, setUserProgress] = useState(null);
  const [sections, setSections] = useState([]);
  const [typeLessons, setTypeLessons] = useState(null);
  //TODO: instead of initializing to `0` being the selected tab, let's try to guesstimate what section the user would want to be on. We will do that by finding the section at which all previous consecutive lessons are completed. OR... we can implement the ability to store the last lesson the user worked on
  const [selectedTab, setSelectedTab] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    var unsubscribeStudent = () => {};
    if (student) {
      // Educator is signed in and looking at a student - find the selected student's info
      unsubscribeStudent = usersCollection
        .where('username', '==', student)
        .where('educator', '==', auth.currentUser.uid)
        .onSnapshot((snap) => {
          // console.log('data: ', snap.docs[0].data())
          setUserProgress(snap.docs[0].data().progress);
        });
    } else {
      if (userDataLoaded) {
        setUserProgress(userData.progress);
      }
    }
    return () => {
      unsubscribeStudent();
    };
  }, [student, userDataLoaded]);

  useEffect(() => {
    if (isCustom) {
      setSections(customLessonSections);
      setTypeLessons(customLessons);
    } else {
      setSections(lessonSections);
      setTypeLessons(lessons);
    }
  }, [
    lessons,
    lessonSections,
    customLessons,
    customLessonSections,
    type,
  ]);

  return (
    <>
      <Typography variant="h3">
        {type.charAt(0).toUpperCase() + type.slice(1)} Lessons
      </Typography>
      <div className={classes.progressTabContainer}>
        <Tabs
          value={selectedTab}
          onChange={(e, selected) => setSelectedTab(selected)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          orientation="vertical"
          aria-label="section-tabs"
          className={classes.progressTabs}
        >
          {sections.map((section, i) => (
            <Tab
              label={
                isCustom
                  ? section.title
                  : `${section.id}: ${section.title}`
              }
              id={`tab-${i}`}
              aria-controls={`tabpanel-${i}`}
            />
          ))}
        </Tabs>
        {userProgress &&
          sections.map((section, i) => {
            return (
              <div
                role="tabpanel"
                hidden={selectedTab !== i}
                id={`tab-${i}`}
                aria-labelledby={`tabpanel-${i}`}
                style={{ overflowY: 'scroll' }}
              >
                {selectedTab === i && (
                  <>
                    <Box p={3} maxWidth={700}>
                      <Typography variant="h4">
                        {section.title}
                      </Typography>
                      <Typography variant="subtitle1">
                        {section.description}
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <Header />
                          <TableBody>
                            {!lessonsLoading &&
                              typeLessons
                                .filter(
                                  (lesson) =>
                                    lesson.lesson_section ===
                                    section.id,
                                )
                                .map((lesson, i) => {
                                  const progress =
                                    userProgress[lesson.lesson_id] ||
                                    JSON.parse(
                                      JSON.stringify(
                                        INIT_PROGRESS_OBJ,
                                      ),
                                    );
                                  return (
                                    <ProgressListItem
                                      lesson={lesson}
                                      progress={progress}
                                      showButtons={
                                        student ? false : true
                                      }
                                      key={i}
                                      // isOpen={true}
                                      // collapsible={false}
                                      // showDescription={false}
                                    />
                                  );
                                })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

const Header = () => (
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>Lesson</TableCell>
      <TableCell align="right">Status</TableCell>
      <TableCell align="right">Score</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  </TableHead>
);
