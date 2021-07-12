import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

import {
  db,
  lessonsCollection,
  lessonSectionsCollection,
  rulesCollection,
  usersCollection,
  wordsCollection,
  firestore,
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
  const [rules, setRules] = useState(null);

  const [customLessons, setCustomLessons] = useState([]);
  const [customLessonSections, setCustomLessonSections] = useState(
    [],
  );

  const { userData } = useContext(UserContext);
  const { user, isEducator } = useAuth();

  const [currentLesson, setCurrentLesson] = useState();
  const [currentLessonProgress, setCurrentLessonProgress] =
    useState();
  const [currentLessonLevel, setCurrentLessonLevel] = useState();

  const setLesson = ({ lesson_id }) => {
    const selectedLesson = lessons
      .concat(customLessons)
      .filter((lesson) => {
        return lesson.lesson_id === lesson_id;
      })[0];

    const { lesson_section } = selectedLesson;
    const levelsQuantity = lesson_section === '1' ? 3 : 4;
    const initProgress = createInitProgress(levelsQuantity);

    const currentLessonProgressObj =
      userData.progress[`${lesson_id}`] || initProgress;
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
    var { progress, lesson } = currentLesson;
    console.log(progress);
    console.log(lesson);
    const field = new firestore.FieldPath(
      'progress',
      lesson.lesson_id,
    );
    const value = progress;
    return usersCollection.doc(user.uid).update(field, value);
  };

  const updateScore = (word, isCorrect) => {
    console.log('updating score');
    var { progress, level } = currentLesson;

    if (!isCorrect) {
      const currentStudyWords = progress[level].study_words;
      currentStudyWords[word] = {
        correct_attempts_needed: 2,
      };
    }

    const currentScore = progress[level].score;
    const newScore = isCorrect
      ? (level + 1) * 5 + currentScore
      : currentScore;
    progress[level].score = newScore;
    updateCurrentLesson({ progress });
  };

  const createLessonSection = ({ title, description }) => {
    const docRef = db
      .collection('users')
      .doc(user.uid)
      .collection('customLessonSections')
      .doc();
    return docRef
      .set({
        title,
        description,
        isCustom: true,
      })
      .then(() => docRef.id);
  };

  const createLesson = ({
    title,
    words,
    description,
    rules,
    lesson_section,
  }) => {
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
        const lesson_id = title.replace(/\s/g, '-');

        return db
          .collection('users')
          .doc(user.uid)
          .collection('customLessons')
          .doc(lesson_id)
          .set({
            lesson_id,
            lesson_section,
            title,
            description,
            words,
            rules,
            isCustom: true,
          });
      }
    });
  };

  useEffect(() => {
    rulesCollection.get().then((ruleDocs) => {
      var rules = {};

      ruleDocs.docs.forEach((doc) => {
        rules[doc.id] = doc.data();
      });
      setRules(rules);
    });
  }, []);

  useEffect(() => {
    if (userData && rules) {
      const getLessons = lessonsCollection
        .get()
        .then((lessonDocs) => {
          var lessonData = lessonDocs.docs.map((doc) => {
            var lesson = doc.data();
            if (lesson.rules) {
              lesson.rules = lesson.rules.map((rule) => rules[rule]);
            }
            return lesson;
          });
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
      // TODO: this only gets the custom lessons created by the current signed in user, as opposed to ALL the custom lessons they should be seeing
      const getCustomLessons = db
        .collection('users')
        .doc(user.uid)
        .collection('customLessons')
        .onSnapshot((snap) => {
          var customLessonData = snap.docs.map((doc) => {
            var lesson = doc.data();
            if (lesson.rules) {
              lesson.rules = lesson.rules.map((rule) => rules[rule]);
            }
            return lesson;
          });
          setCustomLessons(customLessonData);
        });
      const getCustomLessonSections = db
        .collection('users')
        .doc(user.uid)
        .collection('customLessonSections')
        .onSnapshot((snap) => {
          var customLessonSectionsData = snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setCustomLessonSections(customLessonSectionsData);
        });
      Promise.all([
        getLessons,
        getLessonSections,
        getCustomLessons,
        getCustomLessonSections,
      ]).then(() => {
        setLessonsLoading(false);
      });
    }
  }, [userData, rules]);

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
        customLessons, //All lessons
        customLessonSections,
        setLesson,
        setLevel,
        setProgress,
        saveProgress,
        updateScore,
        createLesson,
        createLessonSection,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};

export { LessonProvider, LessonContext };
