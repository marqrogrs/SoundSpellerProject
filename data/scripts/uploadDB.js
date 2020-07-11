"use strict";
const fs = require("fs");
const data = require("./data");
const { ObjectID, MongoClient } = require("mongodb");
const { words, lessons, phonemes } = data;

const uri =
  "mongodb+srv://soundspeller:SoundSpeller@cluster0-mbali.azure.mongodb.net/SoundSpeller2?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// const objectInstance = new ObjectID();
client.connect(async (err) => {
  if (err) console.log(err);
  const wordCollection = client.db("SoundSpeller2").collection("words");
  const phonemeCollection = client.db("SoundSpeller2").collection("phonemes");
  const lessonCollection = client.db("SoundSpeller2").collection("lessons");

  var { phonemeDocs, phonemeIds } = await createPhonemeDocs();
  var { wordDocs, wordIds } = await createWordDocs(phonemeIds);
  var lessonDocs = await createLessonDocs(wordIds);
  const uploadPhonemes = phonemeCollection.insertMany(phonemeDocs);
  const uploadWords = wordCollection.insertMany(wordDocs);
  const uploadLessons = lessonCollection.insertMany(lessonDocs);
  Promise.all([uploadPhonemes, uploadWords, uploadLessons])
    .then(() => {
      console.log("Done!");
      client.close();
    })
    .catch((err) => {
      console.log("Borked :(\n", err);
    });
});

const createPhonemeDocs = () => {
  return new Promise((resolve, reject) => {
    var phonemeIds = {};
    var phonemeDocs = phonemes.map((phonemeItem) => {
      const phoneme = phonemeItem[0];
      const files = phonemeItem.slice(1);
      const _id = new ObjectID();
      phonemeIds[phoneme] = _id;
      return {
        _id,
        phoneme,
        files,
      };
    });
    console.log(`Phoneme docs created. n=${phonemeDocs.length}`);
    resolve({ phonemeDocs, phonemeIds });
  });
};

const createWordDocs = (phonemeIds) => {
  return new Promise((resolve, reject) => {
    var wordIds = {};
    var wordDocs = words.map((wordItem) => {
      const word = wordItem[1];
      const graphemes = wordItem[3].split(",");
      const syllables = wordItem[4].split(".");
      var phonemes = wordItem[2].split(/\s|-/);
      //Get phoneme IDs
      phonemes = phonemes.map((phoneme) => phonemeIds[phoneme]);
      const _id = new ObjectID();
      wordIds[word] = _id;
      return {
        _id,
        word,
        phonemes,
        graphemes,
        syllables,
      };
    });
    console.log(`Lesson docs created. n=${wordDocs.length}`);
    resolve({ wordDocs, wordIds });
  });
};

const createLessonDocs = (wordIds) => {
  return new Promise((resolve, reject) => {
    var lessonDocs = lessons.map((lessonItem) => {
      const lesson_id = lessonItem[0];
      var words = lessonItem[1].split(/\s/);
      words = words.map((word) => wordIds[word.toUpperCase()]);
      const _id = new ObjectID();
      return {
        _id,
        words,
        lesson_id,
      };
    });
    console.log(`Lesson docs created. n=${lessonDocs.length}`);
    resolve(lessonDocs);
  });
};
