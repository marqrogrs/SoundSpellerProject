import React from 'react'
import { LinearProgress, Box, Typography } from '@material-ui/core'

export default function LessonProgress(props) {
  return (
    <>
      <Typography>Progress:</Typography>
      <Box display='flex' alignItems='center'>
        <Box width='100%' mr={1}>
          <LinearProgress variant='determinate' {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant='body2' color='textSecondary'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  )
}
