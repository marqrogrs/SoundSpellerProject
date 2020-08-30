import React, { useContext, useState, useEffect } from 'react'
import { LinearProgress, Box, Typography } from '@material-ui/core'
import { LessonContext } from '../providers/LessonProvider'

export default function LessonProgress(props) {
  const { currentLessonProgress, currentLesson } = useContext(LessonContext)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (currentLesson && currentLessonProgress) {
      setValue(
        Math.round(
          (parseInt(currentLessonProgress.completed_words) /
            currentLesson.words.length) *
            100
        )
      )
    }
  }, [currentLessonProgress, currentLesson])
  return (
    <>
      <Typography>Progress:</Typography>
      <Box display='flex' alignItems='center'>
        <Box width='100%' mr={1}>
          <LinearProgress variant='determinate' {...props} value={value} />
        </Box>
        <Box minWidth={35}>
          <Typography variant='body2' color='textSecondary'>
            {`${value}%`}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
