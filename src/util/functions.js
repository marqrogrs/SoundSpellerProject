export const getLessonSubsection = (lesson) => {
  return lesson.lesson_id.substring(lesson.lesson_id.lastIndexOf('.') + 1)
}
