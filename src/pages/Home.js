import * as React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import LessonList from "../components/LessonList";

const Home = () => {
  return (
    <Container maxWidth="sm">
      {/* <div className={classes.root}>
        <Paper elevation={3}>
          <Typography variant="h6" component="h6">
            Welcome Back!
          </Typography>
        </Paper>
      </div> */}
      <LessonList />
    </Container>
  );
};

export default Home;
