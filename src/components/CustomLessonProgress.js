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
import { db, auth } from '../firebase';

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

export default function CustomLessonProgress({
  student,
  userProgress,
}) {
  const {
    lessonsLoading,
    customLessons,
    rules,
    customLessonSections,
  } = useContext(LessonContext);
  const { userData } = useContext(UserContext);
  const [customLessonProgress, setCustomLessonProgress] = useState(
    null,
  );
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    var progress = {};
    if (!lessonsLoading && userProgress) {
      customLessons.forEach((customLesson) => {
        if (userProgress[customLesson.id]) {
          progress[customLesson.id] = userProgress[customLesson.id];
        } else {
          progress[customLesson.id] = JSON.parse(
            JSON.stringify(INIT_PROGRESS_OBJ),
          );
        }
      });
      setCustomLessonProgress(progress);
    }
  }, [lessonsLoading, userProgress]);

  return (
    <>
      <Typography variant="h3">Custom Lessons</Typography>
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
          {!lessonsLoading &&
            customLessonSections.map((section, i) => (
              <Tab
                label={`${section.title}`}
                id={`tab-${i}`}
                aria-controls={`tabpanel-${i}`}
              />
            ))}
        </Tabs>
        {customLessonProgress && (
          <>
            {customLessonSections.map((customLessonSection, i) => {
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
                          {customLessonSection.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {customLessonSection.description}
                        </Typography>
                        <TableContainer component={Paper}>
                          <Table>
                            <Header />
                            <TableBody>
                              {!lessonsLoading &&
                                customLessons
                                  .filter(
                                    (lesson) =>
                                      lesson.lesson_section ===
                                      customLessonSection.id,
                                  )
                                  .map((lesson, i) => {
                                    return (
                                      <ProgressListItem
                                        lesson={lesson}
                                        progress={
                                          customLessonProgress[
                                            lesson.id
                                          ]
                                        }
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
          </>
        )}
      </div>
    </>
  );
}
