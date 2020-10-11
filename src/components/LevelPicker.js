import React, { useContext, useEffect, useState } from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core'
import { LEVELS } from '../util/constants'
import { LessonContext } from '../providers/LessonProvider'

export default function LevelPicker() {
  const {
    currentLesson,
    currentLessonProgress,
    currentLessonLevel,
    setLevel,
  } = useContext(LessonContext)
  const [totalWords, setTotalWords] = useState(0)

  const handleSelectLevel = (e) => {
    setLevel(parseInt(e.target.innerText) - 1)
  }

  useEffect(() => {
    if (currentLesson) {
      const num_words = currentLesson.lesson.words.length
      setTotalWords(num_words)
    }
  }, [currentLesson])

  return (
    <>
      <Typography>Pick a level:</Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {LEVELS.map((l, index) => {
          var levelUnlocked = false

          if (currentLessonProgress) {
            if (index === 0) {
              levelUnlocked = true
            } else {
              levelUnlocked =
                currentLessonProgress[index - 1].completed_words === totalWords
            }
          }

          return (
            <Button
              key={index}
              disabled={!levelUnlocked}
              variant={currentLessonLevel === index ? `contained` : `outlined`}
              onClick={handleSelectLevel}
            >
              {index + 1}
            </Button>
          )
        })}
      </ButtonGroup>
    </>
  )
}
