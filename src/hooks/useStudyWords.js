import { useState, useEffect } from 'react';

const getProgressSections = (userProgress, progressLessons) =>
  progressLessons
    .map((lesson) => {
      const sections = Object.keys(userProgress[lesson]);
      const lessonAndSections = sections.map((section) => ({
        lesson,
        section,
      }));
      return lessonAndSections;
    })
    .flat();

const getProgressWords = (userProgress, progressSections) =>
  progressSections
    .map((progressSection) => {
      const words = Object.keys(
        userProgress[progressSection.lesson][progressSection.section]
          .study_words,
      );

      const lessonAndSectionsAndWords = words.map((word) => ({
        lesson: progressSection.lesson,
        section: progressSection.section,
        word,
      }));

      return lessonAndSectionsAndWords;
    })
    .flat();

const useStudyWords = (userData, userDataLoaded) => {
  const [studyWords, setStudyWords] = useState([]);

  useEffect(() => {
    if (userDataLoaded) {
      const userProgress = userData.progress;
      const progressLessons = Object.keys(userProgress);
      if (progressLessons.length === 0) return; //If there is no progress, automatically there isn't any study word

      const progressSections = getProgressSections(
        userProgress,
        progressLessons,
      );

      const progressWords = getProgressWords(
        userProgress,
        progressSections,
      );

      setStudyWords(progressWords);
    }
  }, [userDataLoaded]);
  return studyWords;
};

export default useStudyWords;
