import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState, useRef } from 'react'
import {
  speakWord,
  playStartBells,
  speakPhoneme,
  SPEECH_RATE,
} from '../util/Audio'
import { useWords } from '../hooks/useWords'
import simulateEvent from 'simulate-event'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function OutputWord({ wordString, index, level }) {
  const classes = useStyles()
  const { word, loading } = useWords(wordString)

  const pressKey = (key) => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keydown', {
        key,
      })
      setTimeout(() => {
        resolve()
      }, 400 / SPEECH_RATE)
    })
  }

  const unpressKey = (key) => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keyup', {
        key,
      })
      resolve()
    })
  }

  useEffect(() => {
    console.log(loading, word)
    if (!loading && !word) {
      //This isn't a word - just letters
      console.log(wordString)
    } else if (!loading && word.word) {
      switch (level) {
        case 0:
          speakWord(word, index === 0).then(async () => {
            let i = 0
            for (const phoneme of word.phonemes) {
              await speakPhoneme(phoneme)
              await pressKey(word.graphemes[i].toLowerCase())
              await unpressKey(word.graphemes[i].toLowerCase())
              i++
            }
            await playStartBells()
            simulateEvent.simulate(document.body, 'keydown', {
              key: 'esc',
            })
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
    } else {
      console.log('Still loading...')
    }
  }, [loading, word])

  return (
    <>
      <Typography className={classes.word} variant='h1'></Typography>
    </>
  )
}
