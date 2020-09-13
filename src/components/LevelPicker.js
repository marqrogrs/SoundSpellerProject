import React, { useContext } from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core'
import { LEVELS } from '../util/constants'
import { LessonContext } from '../providers/LessonProvider'

export default function LevelPicker({ onChange }) {
  const { setLevel, selectedLevel, currentLessonProgress } = useContext(
    LessonContext
  )
  const handleSelectLevel = (e) => {
    if (onChange) {
      onChange()
    }
    setLevel(parseInt(e.target.innerText) - 1)
  }

  return (
    <>
      <Typography>Pick a level:</Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {LEVELS.map((l, index) => {
          return (
            <Button
              key={index}
              disabled={
                currentLessonProgress
                  ? index > currentLessonProgress.level
                  : false
              }
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
