import React, { useState, useEffect, useContext } from 'react'
import Keyboard from '../components/Keyboard'
import OutputWord from '../components/OutputWord'
import InputWord from '../components/InputWord'
import LessonProgress from '../components/LessonProgress'
import LevelPicker from '../components/LevelPicker'
import { Container, Button, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from 'react-router-dom'
import { LessonContext } from '../providers/LessonProvider'
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
  const { lessons } = useLessons()
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const progress = words.length > 0 ? currentWordIndex + 1 / words.length : 0

  const params = useParams()
  const { setLesson, selectedLesson, selectedLevel } = useContext(LessonContext)

  const handleStartClicked = () => {
    setCurrentWordIndex(0)
    setLessonStarted(true)
  }

  const handleKeyPressed = (key, e) => {
    if(key === 'other'){
      key = e.key
    }
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
      case 'space':
        setInputWord(inputWord + " ")
        break
      default:
        setInputWord(inputWord + key)
        break
    }
  }

  useEffect(() => {
    if (!selectedLesson) {
      console.log('Setting lesson')
      //TODO: grab single lesson instead of all
      const currentLesson = lessons.filter((lesson) => {
        return lesson.lesson_id === params.lesson
      })[0]
      setLesson(currentLesson)
    } else {
      console.log(selectedLesson)
      setWords(selectedLesson.words)
    }
  }, [selectedLesson, lessons, setLesson, params])

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
            <LessonProgress variant='determinate' value={progress} />
          </Grid>
        </Grid>
        <Paper className={classes.textbox}>
          {lessonStarted && (
            <OutputWord
              wordString={words[currentWordIndex]}
              index={currentWordIndex}
              level={selectedLevel}
            />
          )}
          <InputWord word={inputWord} />
        </Paper>
        <Keyboard onChange={handleKeyPressed} />
      </Container>
    </>
  )
}
