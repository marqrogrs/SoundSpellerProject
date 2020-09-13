import React, { useState, useEffect, useContext, useRef } from 'react'
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
  const {
    updateUserProgress,
    setLesson,
    currentLesson,
    currentLevel,
    currentLessonProgress,
    lessonsLoading,
  } = useContext(LessonContext)
  const [words, setWords] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const [enableInput, setEnableInput] = useState(false)

  const params = useParams()

  const handleSubmit = () => {
    //Check if correct
    const expectedWord = words[currentWordIndex]
    if (inputWord.toLowerCase() === expectedWord.toLowerCase()) {
      console.log('Noice, you got it!')
      updateUserProgress({ completed_words: currentWordIndex + 1 })
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
        if (simulated && currentLevel > 0) {
          break
        }
        if ((!simulated && enableInput) || simulated) {
          setInputWord(inputWord + key)
        }
        break
    }
  }
  const prevProgressRef = useRef()
  const prevProgress = prevProgressRef.current

  useEffect(() => {
    prevProgressRef.current = currentLessonProgress
    if (!lessonsLoading) {
      setLesson({ lesson_id: params.lesson })
      // console.log(`lesson_id: ${params.lesson}`)

      if (currentLesson) {
        setWords(currentLesson.words)
        // console.log(`words: ${currentLesson.words}`)
      }

      if (currentLessonProgress && prevProgressRef.current !== prevProgress) {
        setCurrentWordIndex(currentLessonProgress.completed_words)
        console.log(
          `Starting on word #${currentLessonProgress.completed_words}`
        )
      }
    }
  }, [
    currentLesson,
    setLesson,
    params,
    currentLessonProgress,
    lessonsLoading,
    prevProgress,
  ])

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
              onClick={() => setLessonStarted(true)}
            >
              Start
            </Button>
          </Grid>
          <Grid item>
            <LessonProgress variant='determinate' />
          </Grid>
        </Grid>
        <Paper className={classes.textbox}>
          {lessonStarted && (
            <OutputWord
              wordString={words[currentWordIndex]}
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
