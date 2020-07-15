import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useLessons } from "../hooks/useLessons";

//TODO: refactor and export all these styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LessonList() {
  const { lessons, loading } = useLessons();
  console.log(lessons);
  const classes = useStyles();
  //TODO: replace with real lessons

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="lessons">
        {lessons.map((lesson) => (
          <ListItem button component="a" href={`lessons/${lesson}`}>
            <ListItemText primary={`Lesson ${lesson}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
