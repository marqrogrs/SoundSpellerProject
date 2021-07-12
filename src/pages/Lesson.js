import React, {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { Prompt } from 'react-router-dom';

import SpeechRateFab from '../components/SpeechRateFab';
import Keyboard from '../components/Keyboard';
import OutputWord from '../components/OutputWord';
import InputWord from '../components/InputWord';
import LessonProgress from '../components/LessonProgress';
import LevelPicker from '../components/LevelPicker';
import { Container, Button, Grid, Paper } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useParams, useHistory } from 'react-router-dom';
import { LessonContext } from '../providers/LessonProvider';
import { playStartBells } from '../util/Audio';
import {
  LEVELS,
  SUCCESS_MESSAGES,
  FAILURE_MESSAGES,
} from '../util/constants';
import { useStyles } from '../styles/material';

import { useSnackbar } from 'notistack';
import LessonRulesModal from '../components/LessonRulesModal';
var _ = require('lodash');

export default function Lesson() {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const {
    saveProgress,
    setLesson,
    currentLesson,
    lessonsLoading,
    setProgress,
    updateScore,
    currentLessonLevel,
    currentLessonProgress,
    setLevel,
  } = useContext(LessonContext);
  const [words, setWords] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [lessonStarted, setLessonStarted] = useState(false);
  const [inputWord, setInputWord] = useState('');
  const [enableInput, setEnableInput] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [outputWordKey, setOutputWordKey] = useState(Math.random());
  const [displaySpeedSlider, setDisplaySpeedSlider] = useState(false);

  const params = useParams();
  const history = useHistory();

  const previousLevelRef = useRef();

  const handleStartLesson = () => {
    setLessonStarted(true);
  };

  const renderScoreSnackbar = (success) => {
    const message = success
      ? `${_.sample(SUCCESS_MESSAGES)} +${
          currentLessonLevel + 1 * 5
        } points`
      : _.sample(FAILURE_MESSAGES);
    const variant = success ? 'success' : 'error';
    enqueueSnackbar(message, { variant });
  };

  const handleSubmit = (checkScore = true) => {
    if (checkScore) {
      //Check if correct
      const expectedWord = words[currentWordIndex];
      const isCorrect =
        inputWord.toLowerCase() === expectedWord.toLowerCase();
      renderScoreSnackbar(isCorrect);
      updateScore(expectedWord, isCorrect);

      if (!isCorrect) {
        const level = currentLesson.progress[currentLesson.level];
        level.study_words[expectedWord] = {
          correct_attempts_needed: 2,
        };
        saveProgress();
      }
    }
    setProgress(currentWordIndex + 1);

    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      //Handle end of lesson
      saveProgress().then(() => {
        // console.log('Level done! Saved.')
        if (currentLessonLevel + 1 <= LEVELS.length - 1) {
          setLevel(currentLessonLevel + 1);
        } else {
          //Entire lesson is done yippee!
          console.log('Lesson completed yeehaw!');
          history.push('/progress');
        }
      });
    }

    setInputWord('');
    setEnableInput(false);
    setIsSaved(false);
  };

  const handleKeyPressed = (key, e) => {
    //TODO: this logic is horrendous
    var simulated = false;
    if (key === 'other') {
      simulated = true;
      key = e.key;
    }

    switch (key) {
      case 'enter':
      case 'space':
        if (enableInput) {
          handleSubmit();
        }
        break;
      case 'backspace':
        if (enableInput) {
          setInputWord(inputWord.slice(0, -1));
        }
        break;
      case 'esc':
        if (simulated) {
          setInputWord('');
          setEnableInput(true);
        }
        break;
      case 'shift':
      case 'Shift':
        if (simulated) {
          setInputWord(inputWord + ' ');
        }
        break;
      case 'tab':
        if (simulated) {
          // Insert dashes for syllables
          const expectedWord = words[currentWordIndex];
          const cleanedWord = Array.from(inputWord).filter(
            (char) => char !== ' ',
          );
          setInputWord(cleanedWord.join(''));
          if (
            Array.from(cleanedWord.join(''))
              .filter((char) => char !== '-')
              .join('')
              .toUpperCase() !== expectedWord
          ) {
            setInputWord(cleanedWord.join('') + ' - ');
          } else {
            console.log('End of word');
            const wordWithoutDashes = Array.from(cleanedWord)
              .filter((char) => char !== '-')
              .join('');
            setTimeout(() => setInputWord(wordWithoutDashes), 1000);
            setTimeout(async () => {
              await playStartBells();
              setInputWord('');
              setEnableInput(true);
            }, 500);
          }
        }

        break;
      default:
        if (simulated && currentLesson.level > 0) {
          break;
        }
        if ((!simulated && enableInput) || simulated) {
          if (key.length === 1) {
            setInputWord(inputWord + key);
          }
        }
        break;
    }
  };

  const save = () => {
    saveProgress().then(() => {
      setIsSaved(true);
    });
  };

  const handleRepeatWord = () => {
    //Check if correct
    setCurrentWordIndex(currentWordIndex);
    //TODO: hacky way of forcing the OutputWord to re-render
    setOutputWordKey(outputWordKey + 1);
    setInputWord('');
    setEnableInput(false);
    setIsSaved(false);
  };

  const handleSkipWord = () => {
    handleSubmit(false);
  };

  useEffect(() => {
    console.log('Setting lesson to params');
    if (!lessonsLoading) {
      setLesson({ lesson_id: params.lesson });
    }
  }, [params, lessonsLoading]);

  const previousLevel = previousLevelRef.current;

  useEffect(() => {
    previousLevelRef.current = currentLessonLevel;
    const newLevel = previousLevel !== currentLessonLevel;
    window.onbeforeunload = () => true;
    if (!lessonsLoading && currentLesson) {
      const level = currentLessonLevel;
      newLevel && setLessonStarted(false);
      setWords(currentLesson.lesson.words);
      const start_word =
        currentLesson.progress[level].completed_words ===
        currentLesson.lesson.words.length
          ? 0
          : currentLesson.progress[level].completed_words;
      setCurrentWordIndex(start_word);
    }
  }, [
    currentLesson,
    currentLessonLevel,
    lessonsLoading,
    currentWordIndex,
  ]);

  return (
    <>
      <Prompt
        message="You have unsaved changes, are you sure you want to leave?"
        when={!isSaved}
      />
      <Container maxWidth="md">
        <Grid container spacing={2} direction="column">
          <Grid item>
            <LevelPicker />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartLesson}
              disabled={lessonStarted}
            >
              Start
            </Button>
          </Grid>
          <Grid item>
            <LessonProgress
              variant="determinate"
              //TODO: this is a hacky way of making sure this progress bar updates
              currentWordIndex={currentWordIndex}
            />
          </Grid>
        </Grid>
        <Paper className={classes.textbox}>
          {lessonStarted && (
            <OutputWord
              wordString={words[currentWordIndex]}
              index={currentWordIndex}
              key={outputWordKey}
            />
          )}
          <InputWord word={inputWord} />
        </Paper>
        <Keyboard onChange={handleKeyPressed} />
        <Grid item align="center">
          <ButtonGroup
            orientation="vertical"
            color="primary"
            variant="contained"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleRepeatWord}
              disabled={!lessonStarted || !enableInput}
            >
              Repeat
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSkipWord}
              disabled={!lessonStarted || !enableInput}
            >
              Skip
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={save}
              disabled={isSaved}
            >
              Save Progress
            </Button>
          </ButtonGroup>
        </Grid>

        {currentLessonProgress && (
          <Grid item>
            Lesson Score:{' '}
            {currentLessonProgress[currentLessonLevel].score}
          </Grid>
        )}
        {currentLesson?.lesson.rules.length > 0 && (
          <LessonRulesModal isOpen={currentWordIndex === 0} />
        )}

        <SpeechRateFab />
      </Container>
    </>
  );
}
