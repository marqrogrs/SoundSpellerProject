import React from "react";
import Keyboard from "../components/Keyboard";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useLessons } from "../hooks/useLessons";

export default function Lesson() {
  const params = useParams();
  const { lessons } = useLessons();
  const selectedLesson = lessons.filter((lesson) => {
    return lesson.lesson_id === params.lesson;
  })[0];
  return (
    <>
      <Container maxWidth="sm">
        {selectedLesson &&
          selectedLesson.words.map((word) => <Typography>{word}</Typography>)}
        <Keyboard />
      </Container>
    </>
  );
}
