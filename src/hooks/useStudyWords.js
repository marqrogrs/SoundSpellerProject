import { useState, useEffect } from 'react';

const getProgressSections = (userProgress, progressLessons) =>
  progressLessons
    .map((lesson) => {
      const levels = Object.keys(userProgress[lesson]);
      const lessonAndLevels = levels.map((level) => ({
        lesson,
        level,
      }));
      return lessonAndLevels;
    })
    .flat();

const getProgressWords = (userProgress, progressLevels) =>
  progressLevels
    .map((progressLevel) => {
      const words = Object.keys(
        userProgress[progressLevel.lesson][progressLevel.level]
          .study_words,
      );

      const lessonAndLevelsAndWords = words.map((word) => ({
        lesson: progressLevel.lesson,
        level: progressLevel.level,
        word,
      }));

      return lessonAndLevelsAndWords;
    })
    .flat();

const useStudyWords = (userData, userDataLoaded) => {
  const [studyWords, setStudyWords] = useState([]);

  useEffect(() => {
    if (userDataLoaded) {
      const userProgress = userData.progress;
      const progressLessons = Object.keys(userProgress);
      if (progressLessons.length === 0) return; //If there is no progress, automatically there isn't any study word

      const progressLevels = getProgressSections(
        userProgress,
        progressLessons,
      );

      const progressWords = getProgressWords(
        userProgress,
        progressLevels,
      );

      setStudyWords(progressWords);
    }
  }, [userDataLoaded]);
  return studyWords;
};

export default useStudyWords;
