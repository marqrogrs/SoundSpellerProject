import tink from '../audio/phonemes/tink.mp3'

var synthesis
if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis
} else {
  console.log('Text-to-speech not supported.')
}

//GLOBALS
var SPEECH_RATE = 1.0

const getVoices = () => {
  return new Promise((resolve, reject) => {
    let id

    id = setInterval(() => {
      if (synthesis.getVoices().length !== 0) {
        resolve(synthesis.getVoices())
        clearInterval(id)
      }
    }, 10)
  })
}

export const speakWord = (word, firstWord = false) => {
  return new Promise((resolve, reject) => {
    synthesis.cancel()

    getVoices().then((voices) => {
      var voice = voices.filter(function (voice) {
        return voice.lang === 'en-US' && voice.localService === true
      })[2]

      var text = `${firstWord ? 'Your first' : 'Next'} word is ${word}.`
      var speech = new SpeechSynthesisUtterance(word)
      speech.voice = voice
      speech.text = text
      speech.rate = SPEECH_RATE
      speech.lang = 'en-US'
      synthesis.speak(speech)
      speech.onend = () => {
        // synthesis.cancel()
        resolve()
      }
    })
  })
}

export const changeSpeechSpeed = (speed) => {
  var transformedSpeed = SPEECH_RATE
  switch (speed) {
    case 0:
      transformedSpeed = 0.5
      break
    case 25:
      transformedSpeed = 0.6
      break
    case 50:
      transformedSpeed = 1.0
      break
    case 75:
      transformedSpeed = 1.5
      break
    case 100:
      transformedSpeed = 2.0
      break
    default:
      break
  }

  SPEECH_RATE = transformedSpeed
}

export const playStartBells = () => {
  return new Promise((resolve, reject) => {
    const TINK = new Audio(tink)
    var numTinks = 0
    TINK.play()
    TINK.addEventListener('ended', () => {
      setTimeout(() => {
        if (numTinks < 2) {
          TINK.play()
          numTinks++
        } else {
          resolve()
        }
      }, 400)
    })
  })
}
