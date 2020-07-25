import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { speakWord } from '../components/Speech'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function Word({ word, index }) {
  const [speechComplete, setSpeechComplete] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    speakWord(word, index === 0).then(() => {
      setSpeechComplete(true)
    })
  }, [word, index])

  return (
    <>
      {speechComplete && (
        <Typography className={classes.word} variant='h1'>
          {word}
        </Typography>
      )}
    </>
  )
}
