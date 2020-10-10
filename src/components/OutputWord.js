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
import { COMMON_PHONEMES } from '../util/constants'
import { db } from '../firebase'
import simulateEvent from 'simulate-event'

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
})

export default function OutputWord({ wordString, index, handleEndOfSyllable }) {
  const classes = useStyles()
  const { currentLesson } = useContext(LessonContext)

  const renderKeyPress = (key) => {
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < Array.from(key).length; ++i) {
        await pressKey(Array.from(key)[i])
        await unpressKey(Array.from(key)[i])
      }
      await pressKey('shift')
      await unpressKey('shift')
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
    // console.log('OutputWord: ', wordString, index)
    db.collection('words')
      .doc(wordString)
      .get()
      .then(async (wordDoc) => {
        if (wordDoc.exists) {
          const { word, phonemes, graphemes, syllables } = wordDoc.data()
          switch (currentLesson.level) {
            case 0:
            case 1:
              speakWord(word, index === 0).then(async () => {
                let i = 0
                let lastSyllableIndex = 0
                for (const phoneme of phonemes) {
                  await speakPhoneme(phoneme)
                  const isEndOfSyllable = syllables.includes(
                    graphemes
                      .slice(lastSyllableIndex, i + 1)
                      .join('')
                      .toLowerCase()
                  )
                  await renderKeyPress(graphemes[i].toLowerCase())
                  if (isEndOfSyllable) {
                    lastSyllableIndex = i + 1
                    simulateEvent.simulate(document.body, 'keydown', {
                      key: 'tab',
                    })
                  }
                  i++
                }
                if (phonemes.length < graphemes.length) {
                  for (
                    let i = phonemes.length; // start where we left off
                    i < graphemes.length;
                    ++i
                  ) {
                    await renderKeyPress(graphemes[i].toLowerCase())
                  }
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
        } else {
          // console.log('Not a word')
          // TODO: output graphemes
          // console.log(wordString)
          const graphemes = wordString.split('')
          const phonemes = graphemes.map(
            (g) => COMMON_PHONEMES[g.toLowerCase()]
          )
          switch (currentLesson.level) {
            case 0:
            case 1:
              let i = 0
              for (const phoneme of phonemes) {
                await speakPhoneme(phoneme)
                await renderKeyPress(graphemes[i].toLowerCase())
              }
              await playStartBells()
              simulateEvent.simulate(document.body, 'keydown', {
                key: 'esc',
              })
              break
            case 2:
            case 3:
              //TODO: how do we handle level 4 ?
              for (const phoneme of phonemes) {
                await speakPhoneme(phoneme)
              }
              setTimeout(async () => {
                await playStartBells()
                simulateEvent.simulate(document.body, 'keydown', {
                  key: 'esc',
                })
              }, 1000)
              break
            default:
              return
          }
        }
      })
  }, [wordString])

  return (
    <>
      <Typography className={classes.word} variant='h1'></Typography>
    </>
  )
}
