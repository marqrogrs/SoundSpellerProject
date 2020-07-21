import React, { useState } from "react";
import Keyboard from "../components/Keyboard";
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Slider,
  Grid,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useLessons } from "../hooks/useLessons";
import { LEVELS } from "../constants";

export default function Lesson() {
  const [level, setLevel] = useState(0);
  const [speed, setSpeed] = useState(50);
  const params = useParams();
  const { lessons } = useLessons();
  const selectedLesson = lessons.filter((lesson) => {
    return lesson.lesson_id === params.lesson;
  })[0];

  const handleSelectLesson = (e) => {
    console.log("Setting level to ", e.target.innerText);
    setLevel(parseInt(e.target.innerText));
  };

  const handleChangeSpeed = (e, newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <>
      <Container maxWidth="sm">
        {/* {selectedLesson &&
          selectedLesson.words.map((word) => <Typography>{word}</Typography>)} */}
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography>Pick a level:</Typography>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              {/* TODO: disable levels */}
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
          </Grid>
          <Grid item>
            <Typography>Speed:</Typography>
            <Slider
              value={speed}
              onChange={handleChangeSpeed}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
        <Keyboard />
      </Container>
    </>
  );
}
