import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { speakWord, playStartBells } from '../util/Audio'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function OutputWord({ word, index }) {
  const [displayWord, setDisplayWord] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    speakWord(word, index === 0)
      .then(() => {
        setDisplayWord(true)
      })
      .then(() => {
        setTimeout(async () => {
          await playStartBells()
          setDisplayWord(false)
        }, 1000)
      })
  }, [word, index])

  return (
    <>
      {displayWord && (
        <Typography className={classes.word} variant='h1'>
          {word}
        </Typography>
      )}
    </>
  )
}
