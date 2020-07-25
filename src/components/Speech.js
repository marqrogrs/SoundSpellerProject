var synthesis
if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis
} else {
  console.log('Text-to-speech not supported.')
}

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

export const startLessonSpeech = (words) => {
  synthesis.cancel()
  getVoices().then((voices) => {
    var voice = voices.filter(function (voice) {
      return voice.name === 'Google US English'
    })[0]
    return words.forEach((word, index) => {
      var speech = new SpeechSynthesisUtterance()
      speech.voice = voice
      var text
      if (index === 0) {
        text = `Your first word is ${word}`
      } else {
        text = `Next word is ${word}`
      }
      speech.text = text
      synthesis.speak(speech)
      synthesis.pause()
    })
  })
}

export const resumeLessonSpeech = () => {
  synthesis.resume()
  synthesis.pause()
}
