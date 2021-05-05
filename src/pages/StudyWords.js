import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import useStudyWords from '../hooks/useStudyWords';

const StudyWords = () => {
  const { userData, userDataLoaded } = useContext(UserContext);
  const studyWords = useStudyWords(userData, userDataLoaded);

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
