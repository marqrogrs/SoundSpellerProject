import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

import { isEmptyObject } from './../util/functions';

const StudyWords = () => {
  const { userData, userDataLoaded } = useContext(UserContext);

  const progressLessons =
    userDataLoaded && Object.keys(userData.progress);

  const progressSections =
    userDataLoaded &&
    progressLessons.map((lesson) => ({
      lesson,
      sections: Object.keys(userData.progress[lesson]),
    }));
  console.log(userData?.progress);

  //It is possible do this with one variable and trade the forEach to map method, but is too nested so it is needed several returns, so this way is shorter
  const studyWords = [];
  const getStudyWords =
    userDataLoaded &&
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
          const wordObject = words.forEach((word) => {
            console.log(progressSection.lesson, section, word);
            studyWords.push({
              lesson: progressSection.lesson,
              section,
              word,
            });
          });
        }
      }),
    );

  console.log(studyWords);

  return <h1>Study Words</h1>;
};

export default StudyWords;
