import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
var _ = require('lodash');

const StudyWords = () => {
  const { userData, userDataLoaded, studyWords } =
    useContext(UserContext);

  return (
    <>
      <h1>Study Words</h1>
      {studyWords && studyWords.length > 0 ? (
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell align="center">Word</TableCell>
                <TableCell align="center">Lesson</TableCell>
                <TableCell align="center">Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studyWords.map((sw) => (
                <TableRow key={JSON.stringify(sw)}>
                  <TableCell align="center">{sw.word}</TableCell>
                  <TableCell align="center">{sw.lesson}</TableCell>
                  <TableCell align="center">{sw.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // TODO: fix this flashing - need loading module
        <Typography variant="h6">No words to study</Typography>
      )}
    </>
  );
};

export default StudyWords;
