import { useState, useEffect } from 'react';
import { isEmptyObject } from './../util/functions';

const useStudyWords = (userData, userDataLoaded) => {
  const [studyWords, setStudyWords] = useState([]);

  useEffect(() => {
    if (userDataLoaded) {
      const progressLessons = Object.keys(userData.progress);

      const progressSections = progressLessons.map((lesson) => ({
        lesson,
        sections: Object.keys(userData.progress[lesson]),
      }));

      progressSections.forEach((progressSection) =>
        progressSection.sections.forEach((section) => {
          if (
            !isEmptyObject(
              userData.progress[progressSection.lesson][section]
                .study_words,
            )
          ) {
            const words = Object.keys(
              userData.progress[progressSection.lesson][section]
                .study_words,
            );

            const studyWordsBuffer = [];
            words.forEach((word) => {
              studyWordsBuffer.push({
                lesson: progressSection.lesson,
                section,
                word,
              });
              setStudyWords(studyWordsBuffer);
            });
          }
        }),
      );
    }
  }, [userDataLoaded]);
  return studyWords;
};

export default useStudyWords;
