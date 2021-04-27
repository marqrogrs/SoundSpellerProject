import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { isEmptyObject } from './../util/functions';

const StudyWords = () => {
  const { userData, userDataLoaded } = useContext(UserContext);

  const progressLessons =
    userDataLoaded && Object.keys(userData.progress);

  const progressSections =
    userDataLoaded &&
    progressLessons.map((lesson) => ({
      lesson,
      sections: Object.keys(userData.progress[lesson]),
    }));

  //It is possible to assign studyWord directly with its value changing all the .forEach for .map, but is too nested so it is needed several returns, so this way is shorter
  const studyWords = [];
  {
    userDataLoaded &&
      progressSections.forEach((progressSection) =>
        progressSection.sections.forEach((section) => {
          if (
            !isEmptyObject(
              userData.progress[progressSection.lesson][section]
                .study_words,
            )
          ) {
            const words = Object.keys(
              userData.progress[progressSection.lesson][section]
                .study_words,
            );
            words.forEach((word) => {
              studyWords.push({
                lesson: progressSection.lesson,
                section,
                word,
              });
            });
          }
        }),
      );

    //console.log(studyWords);
  }

  return (
    <>
      <h1>Study Words</h1>
      {studyWords.length > 0 ? (
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell align="center">Word</TableCell>
                <TableCell align="center">Lesson</TableCell>
                <TableCell align="center">Section</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studyWords.map((studyWord) => (
                <TableRow key={JSON.stringify(studyWord)}>
                  <TableCell align="center">
                    {studyWord.word}
                  </TableCell>
                  <TableCell align="center">
                    {studyWord.lesson}
                  </TableCell>
                  <TableCell align="center">
                    {studyWord.section}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6">No words to study</Typography>
      )}
    </>
  );
};

export default StudyWords;
