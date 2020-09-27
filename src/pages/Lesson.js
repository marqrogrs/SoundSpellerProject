import React, { useState, useEffect, useContext, useRef } from 'react'
import { Prompt } from 'react-router-dom'

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
    saveProgress,
    setLesson,
    currentLesson,
    lessonsLoading,
    setProgress,
    updateScore,
  } = useContext(LessonContext)
  const [words, setWords] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const [enableInput, setEnableInput] = useState(false)
  const [isSaved, setIsSaved] = useState(true)

  const params = useParams()

  const handleSubmit = () => {
    //Check if correct
    const expectedWord = words[currentWordIndex]
    const isCorrect = inputWord.toLowerCase() === expectedWord.toLowerCase()
    setProgress(currentWordIndex + 1)
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1)
    } else {
      //Handle end of lesson
      saveProgress().then(() => {
        console.log('Level done! Saved.')
        //Do some things
      })
    }

    updateScore(expectedWord, isCorrect)

    setInputWord('')
    setEnableInput(false)
    setIsSaved(false)
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
      case 'space':
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
      case 'esc':
        if (simulated) {
          setInputWord('')
          setEnableInput(true)
        }
        break
      default:
        if (simulated && currentLesson.level > 0) {
          break
        }
        if ((!simulated && enableInput) || simulated) {
          setInputWord(inputWord + key)
        }
        break
    }
  }

  const save = () => {
    saveProgress().then(() => {
      setIsSaved(true)
    })
  }

  useEffect(() => {
    console.log('Setting lesson to params')
    if (!lessonsLoading) {
      setLesson({ lesson_id: params.lesson })
    }
  }, [params, lessonsLoading])

  useEffect(() => {
    window.onbeforeunload = () => true
    if (!lessonsLoading && currentLesson) {
      console.log('Setting words and stuff')
      const level = currentLesson.level
      setWords(currentLesson.lesson.words)
      setCurrentWordIndex(currentLesson.progress[level].completed_words)
    }
  }, [currentLesson, lessonsLoading, currentWordIndex])

  return (
    <>
      <Prompt
        message='You have unsaved changes, are you sure you want to leave?'
        when={!isSaved}
      />
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
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={save}
            disabled={isSaved}
          >
            Save & Exit
          </Button>
        </Grid>
        {currentLesson && (
          <Grid item>
            Score: {currentLesson.progress[currentLesson.level].score}
          </Grid>
        )}
      </Container>
    </>
  )
}
