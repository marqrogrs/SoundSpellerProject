import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useContext, useState, useRef } from 'react'
import { LessonContext } from '../providers/LessonProvider'
import {
  speakWord,
  playStartBells,
  speakPhoneme,
  SPEECH_RATE,
  terminateAudio,
  setPlayAudio,
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

export default function OutputWord({ wordString, index }) {
  const classes = useStyles()
  const { currentLesson } = useContext(LessonContext)

  const renderKeyPress = (key) => {
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < Array.from(key).length; ++i) {
        await pressKey(Array.from(key)[i])
        await unpressKey(Array.from(key)[i])
      }
      await insertSpaceAfterLetter()
      resolve()
    })
  }

  const insertSpaceAfterLetter = () => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keydown', {
        key: 'shift',
      })
      simulateEvent.simulate(document.body, 'keyup', {
        key: 'shift',
      })
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
    db.collection('words')
      .doc(wordString)
      .get()
      .then(async (wordDoc) => {
        if (wordDoc.exists && currentLesson.lesson.lesson_section > 1) {
          var { word, phonemes, graphemes, syllables } = wordDoc.data()
          console.log(word, phonemes, graphemes, syllables)
          switch (currentLesson.level) {
            case 0:
            case 1:
              speakWord(word, index === 0).then(async () => {
                let i = 0
                let lastSyllableIndex = 0
                let syllableInd = 0
                for (const grapheme of graphemes) {
                  console.log(grapheme)
                  if (phonemes[i]) {
                    // Handle special cases
                    switch (grapheme) {
                      case 'E':
                        // Only speak phoneme if its NOT a silent E
                        if (
                          ['EH', 'IY', 'IH', 'ER', 'AH'].includes(phonemes[i])
                        ) {
                          await speakPhoneme(phonemes[i])
                        }
                        break
                      case 'U':
                        if (phonemes[i] === 'Y' && phonemes[i + 1] === 'UW') {
                          await speakPhoneme(phonemes[i])
                          await speakPhoneme(phonemes[i + 1])
                          phonemes[i] = 'YUW'
                          phonemes = phonemes
                            .slice(0, i + 1)
                            .concat(phonemes.slice(i + 2))
                        } else {
                          await speakPhoneme(phonemes[i])
                        }
                        break
                      default:
                        await speakPhoneme(phonemes[i])
                    }
                  }
                  const isEndOfSyllable =
                    syllables[syllableInd] ===
                    graphemes
                      .slice(lastSyllableIndex, i + 1)
                      .join('')
                      .toLowerCase()
                  console.log(
                    isEndOfSyllable,
                    graphemes
                      .slice(lastSyllableIndex, i + 1)
                      .join('')
                      .toLowerCase()
                  )
                  await renderKeyPress(grapheme.toLowerCase())

                  if ((currentLesson.level === 0) & isEndOfSyllable) {
                    lastSyllableIndex = i + 1
                    syllableInd++
                    simulateEvent.simulate(document.body, 'keydown', {
                      key: 'tab',
                    })
                  }
                  i++
                }
                setTimeout(async () => {
                  await playStartBells()
                  simulateEvent.simulate(document.body, 'keydown', {
                    key: 'esc',
                  })
                }, 500)
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
                i++
              }
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

  useEffect(() => {
    setPlayAudio(true)
    return terminateAudio
  }, [])

  return (
    <>
      <Typography className={classes.word} variant='h1'></Typography>
    </>
  )
}
