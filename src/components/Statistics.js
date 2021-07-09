import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { UserContext } from '../providers/UserProvider';

import { useStyles } from '../styles/material';

export default function Statistics() {
  const { totalScore, lessonsCompleted } = useContext(UserContext);

  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        My Stats
      </Typography>
      <Paper className={classes.statistics}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h2" color="primary">
              {totalScore}
            </Typography>
            <Typography variant="h6">Total Score</Typography>
            {/* <Divider variant='middle' /> */}
          </Grid>
          <Grid item>
            <Typography variant="h2" color="primary">
              {lessonsCompleted}
            </Typography>
            <Typography variant="h6">Lessons Completed</Typography>
            {/* <Divider variant='middle' /> */}
          </Grid>
          <Grid item>
            <Typography variant="h2" color="primary">
              0
            </Typography>
            <Typography variant="h6">Words Mastered</Typography>
            {/* <Divider variant='middle' /> */}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
