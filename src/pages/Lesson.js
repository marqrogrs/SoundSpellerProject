import React, { useState, useEffect } from 'react'
import Keyboard from '../components/Keyboard'
import SpeechSlider from '../components/SpeechSlider'
import Word from '../components/Word'
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Grid,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from 'react-router-dom'
import { useLessons } from '../hooks/useLessons'
import { LEVELS } from '../constants'

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
  const [level, setLevel] = useState(0)
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState('')
  const [lessonStarted, setLessonStarted] = useState(false)

  const params = useParams()
  //TODO: grab single lesson instead of all
  const { lessons } = useLessons()
  const selectedLesson = lessons.filter((lesson) => {
    return lesson.lesson_id === params.lesson
  })[0]

  const handleSelectLesson = (e) => {
    setLevel(parseInt(e.target.innerText))
  }

  const handleStartClicked = () => {
    setCurrentWordIndex(0)
    setLessonStarted(true)
  }

  const handleNextClicked = () => {
    setCurrentWordIndex(currentWordIndex + 1)
  }

  useEffect(() => {
    if (selectedLesson) setWords(selectedLesson.words)
  }, [selectedLesson])

  return (
    <>
      <Container maxWidth='sm'>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <Typography>Pick a level:</Typography>
            <ButtonGroup
              color='primary'
              aria-label='outlined primary button group'
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
                )
              })}
            </ButtonGroup>
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
            <Button
              variant='contained'
              color='primary'
              onClick={handleNextClicked}
            >
              Next
            </Button>
          </Grid>
          <Grid item>
            <SpeechSlider />
          </Grid>
        </Grid>
        <Paper className={classes.textbox}>
          {lessonStarted && (
            <Word word={words[currentWordIndex]} index={currentWordIndex} />
          )}
        </Paper>
        <Keyboard />
      </Container>
    </>
  )
}
