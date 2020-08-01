import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { speakWord, playStartBells } from '../util/Audio'
import { useWords } from '../hooks/useWords'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function OutputWord({ wordString, index }) {
  const [displayWord, setDisplayWord] = useState(false)
  const classes = useStyles()
  const { word, loading } = useWords(wordString)

  useEffect(() => {
    if (word.word && !loading) {
      console.log("ok time to speak!")
      speakWord(word, index === 0)
        .then(() => {
          setDisplayWord(true)
        })
        .then(() => {
          console.log("Setting timeout")
          setTimeout(async () => {
            await playStartBells()
            setDisplayWord(false)
          }, 1000)
        })
    } else {
      console.log('Still loading...')
    }
  }, [word, index, loading])

  return (
    <>
      {displayWord && (
        <Typography className={classes.word} variant='h1'>
          {wordString}
        </Typography>
      )}
    </>
  )
}
