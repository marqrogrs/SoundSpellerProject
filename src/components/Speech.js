import Speech from "speak-tts";

const speech = new Speech(); // will throw an exception if not browser supported
if (speech.hasBrowserSupport()) {
  // returns a boolean
  console.log("speech synthesis supported");
}

speech.init({
  volume: 1,
  lang: "en-US",
  rate: 1,
  pitch: 1,
  voice: "Google UK English Male",
  splitSentences: true,
  listeners: {
    onvoiceschanged: (voices) => {
      console.log("Event voiceschanged", voices);
    },
  },
});

export const greet = () => {
  speech
    .speak({
      text: "Hello, how are you today ?",
    })
    .then(() => {
      console.log("Success !");
    })
    .catch((e) => {
      console.error("An error occurred :", e);
    });
};
