import React, { useState, useEffect, useContext, useRef } from 'react'
import { Prompt } from 'react-router-dom'

import Keyboard from '../components/Keyboard'
import OutputWord from '../components/OutputWord'
import InputWord from '../components/InputWord'
import LessonProgress from '../components/LessonProgress'
import LevelPicker from '../components/LevelPicker'
import { Container, Button, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { useParams, useHistory } from 'react-router-dom'
import { LessonContext } from '../providers/LessonProvider'
import { playStartBells } from '../util/Audio'
import { LEVELS } from '../util/constants'

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
    currentLessonLevel,
    currentLessonProgress,
    setLevel,
  } = useContext(LessonContext)
  const [words, setWords] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [lessonStarted, setLessonStarted] = useState(false)
  const [inputWord, setInputWord] = useState('')
  const [enableInput, setEnableInput] = useState(false)
  const [isSaved, setIsSaved] = useState(true)
  const [outputWordKey, setOutputWordKey] = useState(Math.random())

  const params = useParams()
  const history = useHistory()

  const handleStartLesson = () => {
    setLessonStarted(true)
  }

  const handleSubmit = (checkScore = true) => {
    setProgress(currentWordIndex + 1)
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1)
    } else {
      //Handle end of lesson
      saveProgress().then(() => {
        // console.log('Level done! Saved.')
        if (currentLessonLevel + 1 <= LEVELS.length - 1) {
          setLevel(currentLessonLevel + 1)
        } else {
          //Entire lesson is done yippee!
          console.log('Lesson completed yeehaw!')
          history.push('/progress')
        }
      })
    }

    if (checkScore) {
      //Check if correct
      const expectedWord = words[currentWordIndex]
      const isCorrect = inputWord.toLowerCase() === expectedWord.toLowerCase()
      updateScore(expectedWord, isCorrect)
    }

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
      case 'shift':
        if (simulated) {
          setInputWord(inputWord + ' ')
        }
        break
      case 'tab':
        const expectedWord = words[currentWordIndex]
        const cleanedWord = Array.from(inputWord).filter((char) => char !== ' ')
        setInputWord(cleanedWord.join(''))
        if (
          Array.from(cleanedWord.join(''))
            .filter((char) => char !== '-')
            .join('')
            .toUpperCase() !== expectedWord
        ) {
          setInputWord(cleanedWord.join('') + ' - ')
        } else {
          console.log('End of word')
          const wordWithoutDashes = Array.from(cleanedWord)
            .filter((char) => char !== '-')
            .join('')
          setTimeout(() => setInputWord(wordWithoutDashes), 1000)
          setTimeout(async () => {
            await playStartBells()
            setInputWord('')
            setEnableInput(true)
          }, 500)
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

  const handleRepeatWord = () => {
    //Check if correct
    setCurrentWordIndex(currentWordIndex)
    //TODO: hacky way of forcing the OutputWord to re-render
    setOutputWordKey(outputWordKey + 1)
    setInputWord('')
    setEnableInput(false)
    setIsSaved(false)
  }

  const handleSkipWord = () => {
    handleSubmit(false)
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
      const level = currentLessonLevel
      setWords(currentLesson.lesson.words)
      const start_word =
        currentLesson.progress[level].completed_words ===
        currentLesson.lesson.words.length
          ? 0
          : currentLesson.progress[level].completed_words
      setCurrentWordIndex(start_word)
    }
  }, [currentLesson, currentLessonLevel, lessonsLoading, currentWordIndex])
  // console.log(currentLessonProgress, currentLessonLevel)
  return (
    <>
      <Prompt
        message='You have unsaved changes, are you sure you want to leave?'
        when={!isSaved}
      />
      <Container maxWidth='sm'>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <LevelPicker />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={handleStartLesson}
              disabled={lessonStarted}
            >
              Start
            </Button>
          </Grid>
          <Grid item>
            <LessonProgress
              variant='determinate'
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
        <Grid item align='center'>
          <ButtonGroup
            orientation='vertical'
            color='primary'
            variant='contained'
          >
            <Button
              variant='contained'
              color='primary'
              onClick={handleRepeatWord}
              disabled={!lessonStarted || !enableInput}
            >
              Repeat
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSkipWord}
              disabled={!lessonStarted || !enableInput}
            >
              Skip
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={save}
              disabled={isSaved}
            >
              Save Progress
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item></Grid>
        {currentLessonProgress && (
          <Grid item>
            Lesson Score: {currentLessonProgress[currentLessonLevel].score}
          </Grid>
        )}
      </Container>
    </>
  )
}
