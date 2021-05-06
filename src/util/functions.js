export const getLessonSubsection = (lesson) => {
  return lesson.lesson_id.substring(
    lesson.lesson_id.lastIndexOf('.') + 1,
  );
};

export const createInitProgress = (lessonQtd) => {
  const sectionSchema = {
    score: 0,
    completed_words: 0,
    high_score: 0,
    completed: false,
    study_words: {},
  };
  const lessonObject = {};
  for (let i = 0; i < lessonQtd; i++) {
    lessonObject[i] = { ...sectionSchema };
  }
  return lessonObject;
};
