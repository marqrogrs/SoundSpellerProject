import React, { useState, useEffect, useContext } from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core'
import { LEVELS } from '../constants'
import { LessonContext } from '../providers/LessonProvider'

export default function LevelPicker({ onChange }) {
  const { setLevel, selectedLevel, progress, currentLesson } = useContext(
    LessonContext
  )
  const [lastLevelCompleted, setLastLevelCompleted] = useState(false)
  const handleSelectLevel = (e) => {
    if (onChange) {
      onChange()
    }
    setLevel(parseInt(e.target.innerText) - 1)
  }

  useEffect(() => {
    if (progress.length > 0 && currentLesson) {
      const progressObj = progress.filter((progressItem) => {
        return progressItem.lesson === currentLesson.lesson_id
      })[0]
      setLastLevelCompleted(progressObj.level)
    }
  })

  return (
    <>
      <Typography>Pick a level:</Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {LEVELS.map((l, index) => {
          return (
            <Button
              key={index}
              disabled={index > lastLevelCompleted}
              variant={selectedLevel === index ? `contained` : `outlined`}
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
