import React, { useState, useEffect } from "react";
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

var synthesis;
if ("speechSynthesis" in window) {
  synthesis = window.speechSynthesis;
} else {
  console.log("Text-to-speech not supported.");
}

export default function Lesson() {
  const [level, setLevel] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [speech, setSpeech] = useState(null);

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

  const handleStartClicked = () => {
    window.speechSynthesis.cancel();

    // speech
    //   .init({
    //     volume: 1,
    //     lang: "en-US",
    //     rate: 1,
    //     pitch: 1,
    //     voice: "Google US English",
    //     splitSentences: true,
    //   })
    //   .then(() => {
    speech.text = "Get ready to type. Put your fingers on the home row.";
    synthesis.speak(speech);
    selectedLesson.words.forEach((word, index) => {
      var text;
      if (index === 0) {
        text = `Your first word is ${word}`;
      } else {
        text = `Next word is ${word}`;
      }
      speech.text = text
      synthesis.speak(speech);
      synthesis.pause();
    });
    // })
    // .catch((e) => {
    //   console.error("An error occurred :", e);
    // });
  };

  const getVoices = () => {
    return new Promise((resolve, reject) => {
      let id;

      id = setInterval(() => {
        if (synthesis.getVoices().length !== 0) {
          resolve(synthesis.getVoices());
          clearInterval(id);
        }
      }, 10);
    });
  };

  useEffect(() => {
    // Create an utterance object
    var speech = new SpeechSynthesisUtterance();

    getVoices().then((voices) => {
      var voice = voices.filter(function (voice) {
        return voice.name === "Google US English";
      })[0];
      speech.voice = voice;
      setSpeech(speech);
    });
  }, []);

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
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartClicked}
            >
              Start
            </Button>
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
