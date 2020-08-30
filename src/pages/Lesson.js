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
  const { lessons } = useContext(LessonContext)
  const [words, setWords] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const [enableInput, setEnableInput] = useState(false)

  const currentLessonProgress =
    words.length > 0 ? currentWordIndex + 1 / words.length : 0

  const params = useParams()
  const { setLesson, selectedLesson, selectedLevel } = useContext(LessonContext)

  const handleStartClicked = () => {
    setCurrentWordIndex(0)
    setLessonStarted(true)
  }

  const handleSubmit = () => {
    //Check if correct
    const expectedWord = words[currentWordIndex]
    if (inputWord.toLowerCase() === expectedWord.toLowerCase()) {
      console.log('Noice, you got it!')
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1)
      } else {
        //Handle end of lesson
      }
    } else {
      console.log('Womp, no bueno')
    }
    setInputWord('')
    setEnableInput(false)
  }

  const handleKeyPressed = (key, e) => {
    //TODO: this logic is horrendous
    var simulated = false
    if (key === 'other') {
      simulated = true
      key = e.key
    }

    switch (key) {
      case 'enter':
        if (enableInput) {
          handleSubmit()
          setInputWord('')
        }
        break
      case 'backspace':
        if (enableInput) {
          setInputWord(inputWord.slice(0, -1))
        }
        break
      case 'space':
        if (enableInput) {
          setInputWord(inputWord + ' ')
        }
        break
      case 'esc':
        if (simulated) {
          setInputWord('')
          setEnableInput(true)
        }
        break
      default:
        if (simulated && selectedLevel > 0) {
          break
        }
        if ((!simulated && enableInput) || simulated) {
          setInputWord(inputWord + key)
        }
        break
    }
  }

  useEffect(() => {
    if (!selectedLesson) {
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
            <LevelPicker onChange={() => setLessonStarted(false)} />
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
            <LessonProgress
              variant='determinate'
              value={currentLessonProgress}
            />
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
