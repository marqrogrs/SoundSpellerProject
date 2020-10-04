import React, { useContext, useEffect, useState } from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core'
import { LEVELS } from '../util/constants'
import { LessonContext } from '../providers/LessonProvider'

export default function LevelPicker({ onChange }) {
  const { currentLesson, setLevel } = useContext(LessonContext)
  const [lessonLoading, setLessonLoading] = useState(true)

  const handleSelectLevel = (e) => {
    if (onChange) {
      onChange()
    }
    setLevel(parseInt(e.target.innerText) - 1)
  }

  useEffect(() => {
    if (currentLesson) {
      setLessonLoading(false)
    }
  }, [currentLesson])

  return (
    <>
      <Typography>Pick a level:</Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {LEVELS.map((l, index) => {
          return (
            <Button
              key={index}
              disabled={!lessonLoading ? index > currentLesson.level : false}
              variant={
                !lessonLoading && currentLesson.level === index
                  ? `contained`
                  : `outlined`
              }
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
