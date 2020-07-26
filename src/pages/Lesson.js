import React, { useState, useEffect } from 'react'
import Keyboard from '../components/Keyboard'
import SpeechSlider from '../components/SpeechSlider'
import OutputWord from '../components/OutputWord'
import InputWord from '../components/InputWord'
import LessonProgress from '../components/LessonProgress'
import LevelPicker from '../components/LevelPicker'
import { Container, Button, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from 'react-router-dom'
import { useLessons } from '../hooks/useLessons'

const useStyles = makeStyles({
  textbox: {
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 200,
    padding: '0 30px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default function Lesson() {
  const classes = useStyles()
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const progress = words.length > 0 ? currentWordIndex + 1 / words.length : 0

  const params = useParams()
  //TODO: grab single lesson instead of all
  const { lessons } = useLessons()
  const selectedLesson = lessons.filter((lesson) => {
    return lesson.lesson_id === params.lesson
  })[0]

  const handleStartClicked = () => {
    setCurrentWordIndex(0)
    setLessonStarted(true)
  }

  const handleKeyPressed = (key, e) => {
    console.log(key)
    switch (key) {
      case 'enter':
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1)
        } else {
          //Handle end of lesson
        }
        setInputWord('')
        break
      case 'backspace':
        setInputWord(inputWord.slice(0, -1))
        break
      default:
        setInputWord(inputWord + key)
        break
    }
  }

  useEffect(() => {
    if (selectedLesson) setWords(selectedLesson.words)
  }, [selectedLesson])

  return (
    <>
      <Container maxWidth='sm'>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <LevelPicker />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={handleStartClicked}
            >
              Start
            </Button>
          </Grid>
          <Grid item>
            <SpeechSlider />
          </Grid>
          <Grid item>
            Progress:
            <LessonProgress variant='determinate' value={progress} />
          </Grid>
        </Grid>
        <Paper className={classes.textbox}>
          {lessonStarted && (
            <OutputWord
              word={words[currentWordIndex]}
              index={currentWordIndex}
            />
          )}
          <InputWord word={inputWord} />
        </Paper>
        <Keyboard onChange={handleKeyPressed} />
      </Container>
    </>
  )
}
