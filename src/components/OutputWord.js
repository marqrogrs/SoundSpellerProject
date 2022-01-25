import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, {
  useEffect,
  useContext,
  useState,
  useRef,
} from 'react';
import { LessonContext } from '../providers/LessonProvider';
import {
  speakWord,
  playStartBells,
  speakPhoneme,
  SPEECH_RATE,
  terminateAudio,
  setPlayAudio,
} from '../util/Audio';
import { COMMON_PHONEMES } from '../util/constants';
import { db, wordsCollection } from '../firebase';
import simulateEvent from 'simulate-event';

const useStyles = makeStyles({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
});

export default function OutputWord({ wordString, index }) {
  const classes = useStyles();
  const { currentLesson } = useContext(LessonContext);

  const renderKeyPress = (key) => {
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < Array.from(key).length; ++i) {
        await pressKey(Array.from(key)[i]);
        await unpressKey(Array.from(key)[i]);
      }
      await insertSpaceAfterLetter();
      resolve();
    });
  };

  const insertSpaceAfterLetter = () => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keydown', {
        key: 'shift',
      });
      simulateEvent.simulate(document.body, 'keyup', {
        key: 'shift',
      });
      resolve();
    });
  };

  const pressKey = (key) => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keydown', {
        key,
      });
      setTimeout(() => {
        resolve();
      }, 400 / SPEECH_RATE);
    });
  };

  const unpressKey = (key) => {
    return new Promise((resolve, reject) => {
      simulateEvent.simulate(document.body, 'keyup', {
        key,
      });
      resolve();
    });
  };

  // const phonemePause = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 600 / SPEECH_RATE)
  //   })
  // }

  const getGraphemesInSyllable = (
    syllable,
    graphemes,
    lastKnownSyllableIndex,
  ) => {
    let i = lastKnownSyllableIndex;
    var graphemesInSyllable = [];
    while (graphemesInSyllable.join('').toLowerCase() !== syllable) {
      graphemesInSyllable.push(graphemes[i]);
      i++;
    }
    return { graphemesInSyllable, index: i };
  };

  const getWordDataBySyllable = ({
    syllables,
    graphemes,
    phonemes,
  }) => {
    //Break up the data by syllable
    var wordDataBySyllable = [];
    let lastSyllableIndexGrapheme = 0;
    let lastSyllableIndexPhoneme = 0;

    for (let i = 0; i < syllables.length; ++i) {
      //Get graphemes in syllable
      var { graphemesInSyllable, index } = getGraphemesInSyllable(
        syllables[i],
        graphemes,
        lastSyllableIndexGrapheme,
      );
      lastSyllableIndexGrapheme = index;

      //Get phonemes in syllable
      var syllableStart = lastSyllableIndexPhoneme;
      var syllableEnd =
        i === syllables.length - 1
          ? phonemes.length
          : phonemes.indexOf('-', lastSyllableIndexPhoneme);
      var phonemesInSyllable = phonemes.slice(
        syllableStart,
        syllableEnd,
      );

      lastSyllableIndexPhoneme = syllableEnd + 1;
      wordDataBySyllable.push({
        phonemesInSyllable,
        graphemesInSyllable,
      });
    }
    return wordDataBySyllable;
  };

  const triggerEnableInput = () => {
    return setTimeout(async () => {
      await playStartBells();
      simulateEvent.simulate(document.body, 'keydown', {
        key: 'esc',
      });
    }, 1000);
  };

  useEffect(() => {
    wordsCollection
      .doc(wordString)
      .get()
      .then(async (wordDoc) => {
        if (
          wordDoc.exists &&
          currentLesson.lesson.lesson_section > 1
        ) {
          var { word, phonemes, graphemes, syllables } =
            wordDoc.data();
          // xample:  ["D", "EY", "-", "T", "AH"]
          // ["D", "A", "T", "A"]
          // ["da", "ta"]
          // console.log(word, phonemes, graphemes, syllables)
          switch (currentLesson.level) {
            case 0:
            case 1:
              speakWord(word, index === 0).then(async () => {
                var wordDataBySyllable = getWordDataBySyllable({
                  phonemes,
                  graphemes,
                  syllables,
                });

                for (const syllable of wordDataBySyllable) {
                  let i = 0;
                  for (const grapheme of syllable.graphemesInSyllable) {
                    if (syllable.phonemesInSyllable[i]) {
                      // Handle special cases
                      switch (grapheme) {
                        case 'U':
                          if (
                            syllable.phonemesInSyllable[i] === 'Y' &&
                            syllable.phonemesInSyllable[i + 1] ===
                              'UW'
                          ) {
                            await speakPhoneme(
                              syllable.phonemesInSyllable[i],
                            );
                            await speakPhoneme(
                              syllable.phonemesInSyllable[i + 1],
                            );
                            syllable.phonemesInSyllable[i] = 'YUW';
                            syllable.phonemesInSyllable =
                              syllable.phonemesInSyllable
                                .slice(0, i + 1)
                                .concat(
                                  syllable.phonemesInSyllable.slice(
                                    i + 2,
                                  ),
                                );
                          } else {
                            await speakPhoneme(
                              syllable.phonemesInSyllable[i],
                            );
                          }
                          break;
                        default:
                          await speakPhoneme(
                            syllable.phonemesInSyllable[i],
                          );
                      }
                    }
                    await renderKeyPress(grapheme.toLowerCase());
                    i++;
                  }
                  if (currentLesson.level === 0) {
                    simulateEvent.simulate(document.body, 'keydown', {
                      key: 'tab',
                    });
                  }
                }

                triggerEnableInput();
              });
              break;
            case 2:
              speakWord(word, index === 0).then(async () => {
                debugger;
                for (const phoneme of phonemes) {
                  if (phoneme !== '-'){
                    //speake the phoneme as long as it is a valid phoneme with an associated existing audio
                    await speakPhoneme(phoneme);
                  }else{
                    console.log('hiphen silence triggered to pause for a moment')
                    await setTimeout(()=> {
                      //waiting for a brief moment due to presence of hiphen "-"
                    },500)

                  }

                }
                triggerEnableInput();
              });
              break;
            case 3:
              speakWord(word, index === 0).then(() => {
                triggerEnableInput();
              });
              break;
            default:
              return;
          }
        } else {
          const graphemes = wordString.split('');
          const phonemes = graphemes.map(
            (g) => COMMON_PHONEMES[g.toLowerCase()],
          );
          switch (currentLesson.level) {
            case 0:
            case 1:
              let i = 0;
              for (const phoneme of phonemes) {
                await speakPhoneme(phoneme);
                await renderKeyPress(graphemes[i].toLowerCase());
                i++;
              }
              break;
            case 2:
              for (const phoneme of phonemes) {
                // TODO: phoneme audio may break if '-' hyphen is prensent since hiphen has no associated audio sound, 
                // resolve if problem manisfest by filtering '-' or only play audio as long as phoneme is not a hiphen, consolt code above in case '3 -1' ;
                await speakPhoneme(phoneme);
              }
              break;
            default:
              return;
          }
          triggerEnableInput();
        }
      });
  }, [wordString]);

  useEffect(() => {
    setPlayAudio(true);
    return terminateAudio;
  }, []);

  return (
    <>
      <Typography className={classes.word} variant="h1"></Typography>
    </>
  );
}
