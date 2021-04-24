import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

import {
  db,
  lessonsCollection,
  lessonSectionsCollection,
  rulesCollection,
  usersCollection,
  wordsCollection,
} from '../firebase';
import { UserContext } from './UserProvider';
import { getLessonSubsection } from '../util/functions';
import { LEVELS } from '../util/constants';

import { createInitProgress } from './../util/functions';
var _ = require('lodash');

const LessonContext = React.createContext({});

const LessonProvider = ({ children }) => {
  const [lessonsLoading, setLessonsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [lessonSections, setLessonSections] = useState([]);
  const [rules, setRules] = useState([]);

  const { userData } = useContext(UserContext);
  const { user, isEducator } = useAuth();

  const [currentLesson, setCurrentLesson] = useState();
  const [
    currentLessonProgress,
    setCurrentLessonProgress,
  ] = useState();
  const [currentLessonLevel, setCurrentLessonLevel] = useState();

  const setLesson = ({ lesson_id }) => {
    const selectedLesson = lessons.filter((lesson) => {
      return lesson.lesson_id === lesson_id;
    })[0];

    selectedLesson.rules = selectedLesson.rules.map(
      (rule) => rules[rule],
    );
    const { lesson_section } = selectedLesson;

    const levelsQuantity = lesson_section === '1' ? 3 : 4;
    const initProgress = createInitProgress(levelsQuantity);

    const lesson_subsection = getLessonSubsection(selectedLesson);
    const currentLessonProgressObj =
      userData.progress[lesson_section] &&
      userData.progress[lesson_section][lesson_subsection]
        ? userData.progress[lesson_section][lesson_subsection]
        : initProgress;
    console.log(
      'Setting current lesson to: ',
      selectedLesson,
      currentLessonProgressObj,
    );
    setCurrentLesson({
      lesson: selectedLesson,
      level: 0,
      progress: currentLessonProgressObj,
    });
    setCurrentLessonProgress(currentLessonProgressObj);
    setCurrentLessonLevel(0);
  };

  const updateCurrentLesson = ({ level, progress }) => {
    var updatedLesson = currentLesson;
    if (level !== undefined) {
      updatedLesson.level = level;
      setCurrentLessonLevel(level);
    }

    if (progress) {
      updatedLesson.progress = progress;
      setCurrentLessonProgress(progress);
    }

    setCurrentLesson(updatedLesson);
  };

  const setLevel = (level) => {
    // setCurrentLevel(level)
    updateCurrentLesson({ level });
  };

  const setProgress = (completed_words) => {
    var { progress, level } = currentLesson;
    const total_words = currentLesson.lesson.words.length;
    const justFinishedLevel = completed_words === total_words;
    // Set completed flag
    progress[level].completed = progress[level].completed
      ? true
      : justFinishedLevel;
    // Update completed words
    // If level has been completed, we switch back to 0
    progress[level].completed_words = justFinishedLevel
      ? 0
      : completed_words;

    if (justFinishedLevel) {
      // Update high score
      progress[level].high_score =
        progress[level].score > progress[level].high_score
          ? progress[level].score
          : progress[level].high_score;

      progress[level].score = 0;
    }

    updateCurrentLesson({ progress });
  };

  const saveProgress = () => {
    console.log('Saving to: ', user);
    var { progress } = currentLesson;
    return usersCollection.doc(user.uid).update({
      [`progress.${currentLesson.lesson.lesson_id}`]: progress,
    });
  };

  const updateScore = (word, isCorrect) => {
    console.log('updating score');
    var { progress, level } = currentLesson;
    const currentScore = progress[level].score;
    const newScore = isCorrect
      ? (level + 1) * 5 + currentScore
      : currentScore;
    progress[level].score = newScore;
    updateCurrentLesson({ progress });
  };

  const createLesson = ({ title, words, description }) => {
    // Check if word exists
    var rejectedWords = [];
    var wordCheckPromises = [];

    words.forEach((word) => {
      wordCheckPromises.push(wordsCollection.doc(word).get());
    });

    return Promise.all(wordCheckPromises).then((docRefs) => {
      docRefs.forEach((docRef) => {
        if (!docRef.exists) {
          rejectedWords.push(docRef.id);
        }
      });
      if (rejectedWords.length >= 1) {
        return Promise.reject({ rejectedWords });
      } else {
        const createdBy = user.uid;
        const educator = isEducator ? user.uid : userData.educator;
        return db
          .collection('customLessons')
          .doc()
          .set({ title, description, words, createdBy, educator });
      }
    });
  };

  useEffect(() => {
    if (userData) {
      // console.log('Getting lessons')
      const getLessons = lessonsCollection
        .get()
        .then((lessonDocs) => {
          var lessonData = lessonDocs.docs.map((doc) => doc.data());
          lessonData = _.sortBy(lessonData, [
            function (doc) {
              return parseInt(doc.lesson_id);
            },
          ]);

          setLessons(lessonData);
          //console.log('Lesson Data (Provider)', lessonData)
        });
      const getLessonSections = lessonSectionsCollection
        .get()
        .then((sectionDocs) => {
          var sections = sectionDocs.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          sections = _.sortBy(sections, [
            function (doc) {
              return parseInt(doc.id);
            },
          ]);
          //console.log('Section Data (Provider)',sections)
          setLessonSections(sections);
        });
      const getRules = rulesCollection.get().then((ruleDocs) => {
        var rules = {};

        ruleDocs.docs.forEach((doc) => {
          rules[doc.id] = doc.data();
        });
        setRules(rules);
      });

      Promise.all([getLessons, getLessonSections, getRules]).then(
        () => {
          setLessonsLoading(false);
        },
      );
      // db.collection('customLessons').onSnapshot(queryRef => {
      //   console.log(queryRef)
      // })
    }
  }, [userData]);

  return (
    <LessonContext.Provider
      value={{
        lessonsLoading,
        currentLesson, //Lesson that user is currently viewing
        currentLessonProgress,
        currentLessonLevel,
        lessons, //All lessons
        lessonSections,
        rules,
        setLesson,
        setLevel,
        setProgress,
        saveProgress,
        updateScore,
        createLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};

export { LessonProvider, LessonContext };
