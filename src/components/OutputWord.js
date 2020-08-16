import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { speakWord, playStartBells, speakPhoneme } from '../util/Audio'
import { useWords } from '../hooks/useWords'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function OutputWord({ wordString, index, level }) {
  const [displayWord, setDisplayWord] = useState('')
  const classes = useStyles()
  const { word, loading } = useWords(wordString)

  useEffect(() => {
    if (!loading && !word) {
      //This isn't a word - just letters
      console.log(wordString)
    } else if (!loading && word.word) {
      switch (level) {
        case 0:
          console.log('level 1: ', word)
          speakWord(word, index === 0).then(async () => {
            let i = 0
            var displayWord = ''
            for (const phoneme of word.phonemes) {
              displayWord += word.graphemes[i]
              await speakPhoneme(phoneme)
              setDisplayWord(displayWord)
              i++
            }
          })
          break
        case 1:
          console.log('level 2')
          break
        case 2:
          console.log('level 3')
          break
        case 3:
          console.log('level 4')
          speakWord(word, index === 0).then(() => {
            setTimeout(async () => {
              await playStartBells()
            }, 1000)
          })
          break
        default:
          return
      }
      // speakWord(word, index === 0)
      // .then(() => {
      //   // setDisplayWord(true)
      // })
      // .then(() => {
      //   setTimeout(async () => {
      //     await playStartBells()
      //     // setDisplayWord(false)
      //   }, 1000)
      // })
    } else {
      console.log('Still loading...')
    }
  }, [word, index, loading])

  return (
    <>
      <Typography className={classes.word} variant='h1'>
        {displayWord}
      </Typography>
    </>
  )
}
