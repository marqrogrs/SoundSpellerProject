import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useContext } from 'react'
import { LessonContext } from '../providers/LessonProvider'
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

export default function OutputWord({ wordString, index }) {
  const classes = useStyles()
  const { word } = useWords(wordString)
  const { currentLevel } = useContext(LessonContext)

  const renderKeyPress = (key) => {
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < Array.from(key).length; ++i) {
        await pressKey(Array.from(key)[i])
        await unpressKey(Array.from(key)[i])
      }
      resolve()
    })
  }

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
    console.log('OutputWord: ', wordString, index, word)
    if (word && word.word) {
      switch (currentLevel) {
        case 0:
          speakWord(word, index === 0).then(async () => {
            let i = 0
            for (const phoneme of word.phonemes) {
              await speakPhoneme(phoneme)
              await renderKeyPress(word.graphemes[i].toLowerCase())
              i++
            }
            if (word.phonemes.length < word.graphemes.length) {
              for (
                let i = word.phonemes.length; // start where we left off
                i < word.graphemes.length;
                ++i
              ) {
                await renderKeyPress(word.graphemes[i].toLowerCase())
              }
            }
            await playStartBells()
            simulateEvent.simulate(document.body, 'keydown', {
              key: 'esc',
            })
          })
          break
        case 1:
          speakWord(word, index === 0).then(async () => {
            let i = 0
            for (const phoneme of word.phonemes) {
              await speakPhoneme(phoneme)
              await pressKey(word.graphemes[i].toLowerCase())
              unpressKey(word.graphemes[i].toLowerCase())
              i++
            }
            await playStartBells()
            simulateEvent.simulate(document.body, 'keydown', {
              key: 'esc',
            })
          })
          break
        case 2:
          speakWord(word, index === 0).then(async () => {
            for (const phoneme of word.phonemes) {
              await speakPhoneme(phoneme)
            }
            setTimeout(async () => {
              await playStartBells()
              simulateEvent.simulate(document.body, 'keydown', {
                key: 'esc',
              })
            }, 1000)
          })
          break
        case 3:
          speakWord(word, index === 0).then(() => {
            setTimeout(async () => {
              await playStartBells()
            }, 1000)
          })
          break
        default:
          return
      }
    } else if (!word) {
      console.log('Not a word...')
    }
  }, [word])

  return (
    <>
      <Typography className={classes.word} variant='h1'></Typography>
    </>
  )
}
