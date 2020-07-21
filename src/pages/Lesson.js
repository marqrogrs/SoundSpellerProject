import React, { useState } from "react";
import Keyboard from "../components/Keyboard";
import { Container, Typography, ButtonGroup, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useLessons } from "../hooks/useLessons";
import { LEVELS } from "../constants";

export default function Lesson() {
  const [level, setLevel] = useState(0);
  const params = useParams();
  const { lessons } = useLessons();
  const selectedLesson = lessons.filter((lesson) => {
    return lesson.lesson_id === params.lesson;
  })[0];

  const handleSelectLesson = (e) => {
    console.log("Setting level to ", e.target.innerText);
    setLevel(parseInt(e.target.innerText));
  };

  return (
    <>
      <Container maxWidth="sm">
        {/* {selectedLesson &&
          selectedLesson.words.map((word) => <Typography>{word}</Typography>)} */}
        <Typography>Pick a level:</Typography>

        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {LEVELS.map((l, index) => {
            return (
              <Button
                key={index}
                variant={level === index ? `contained` : `outlined`}
                onClick={handleSelectLesson}
              >
                {index}
              </Button>
            );
          })}
        </ButtonGroup>
        <Keyboard />
      </Container>
    </>
  );
}
