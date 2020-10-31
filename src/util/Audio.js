var tink = require('../audio/phonemes/tink.mp3')
var { PHONEMES } = require('./constants')

var synthesis
if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis
} else {
  console.log('Text-to-speech not supported.')
}

//GLOBALS
var SPEECH_RATE = 1.0
var PLAY_AUDIO = true

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

//TODO: pass in speechOn t/f
export const speakWord = (word, firstWord = false) => {
  if (!PLAY_AUDIO) {
    return
  }
  return new Promise((resolve, reject) => {
    synthesis.cancel()

    getVoices().then((voices) => {
      var voice = voices.filter(function (voice) {
        return (
          voice.lang === 'en-US' &&
          voice.localService === true &&
          voice.name === 'Samantha'
        )
      })[0]
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

//TODO: 400 should vary based on speech speed ( i htink? )
export const speakPhoneme = (phoneme) => {
  if (!PLAY_AUDIO) {
    return
  }
  return new Promise((resolve, reject) => {
    const audioFile = phoneme.endsWith('.mp3') ? phoneme : PHONEMES[phoneme]
    const sound = new Audio(require(`../audio/phonemes/${audioFile}`))
    amplifySound(sound, 6)

    setTimeout(() => {
      sound.play()
      resolve()
    }, 600 / SPEECH_RATE)
  })
}

const amplifySound = (sound, multiplier) => {
  var context = new (window.AudioContext || window.webkitAudioContext)(),
    result = {
      context: context,
      source: context.createMediaElementSource(sound),
      gain: context.createGain(),
      media: sound,
      amplify: function (multiplier) {
        result.gain.gain.value = multiplier
      },
      getAmpLevel: function () {
        return result.gain.gain.value
      },
    }
  result.source.connect(result.gain)
  result.gain.connect(context.destination)
  result.amplify(multiplier)
}

export const changeSpeechSpeed = (speed) => {
  var transformedSpeed = SPEECH_RATE
  var speedString
  switch (speed) {
    case 0:
      transformedSpeed = 0.5
      speedString = 'slower'
      break
    case 25:
      transformedSpeed = 0.6
      speedString = 'slow'
      break
    case 50:
      transformedSpeed = 1.0
      speedString = 'normal'
      break
    case 75:
      transformedSpeed = 1.5
      speedString = 'fast'
      break
    case 100:
      transformedSpeed = 2.0
      speedString = 'faster'
      break
    default:
      break
  }

  SPEECH_RATE = transformedSpeed
  synthesis.cancel()

  getVoices().then((voices) => {
    var voice = voices.filter(function (voice) {
      return voice.lang === 'en-US' && voice.localService === true
    })[2]

    var text = `This is how ${speedString} speed sounds.`
    var speech = new SpeechSynthesisUtterance(speedString)
    speech.voice = voice
    speech.text = text
    speech.rate = SPEECH_RATE
    speech.lang = 'en-US'
    synthesis.speak(speech)
  })
}

export const playStartBells = () => {
  if (!PLAY_AUDIO) {
    return
  }
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

export const setPlayAudio = (should_play) => {
  PLAY_AUDIO = should_play
}

export const terminateAudio = () => {
  PLAY_AUDIO = false
  synthesis.cancel()
}

export { SPEECH_RATE }
