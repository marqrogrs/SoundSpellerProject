import React, { useState, useEffect, useRef } from 'react'
import { useRealmApp } from '../realm/RealmApp'
import { useLessons } from '../hooks/useLessons'
import { useUser } from '../hooks/useUser'

const LessonContext = React.createContext({})

const LessonProvider = ({ children }) => {
  const { user } = useRealmApp()
  const { userProgress, updateProgress } = useUser(user.id)
  const userDataLoading = useUser(user.id).loading

  const [currentLesson, setCurrentLesson] = useState()
  const [currentLevel, setCurrentLevel] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [currentLessonProgress, setCurrentLessonProgress] = useState()

  const { lessons } = useLessons()
  const lessonsLoading = useLessons().loading

  const setLesson = ({ lesson_id }) => {
    const selectedLesson = lessons.filter((lesson) => {
      return lesson.lesson_id === lesson_id
    })[0]
    setCurrentLesson(selectedLesson)

    const currentLessonProgressObj = userProgress.filter(
      (progressObj) => progressObj.lesson === selectedLesson.lesson_id
    )[0]
    setCurrentLessonProgress(currentLessonProgressObj)
  }

  const setLevel = (level) => {
    setCurrentLevel(level)
  }

  const setWord = (word) => {
    setCurrentWord(word)
  }

  const updateUserProgress = (progress) => {
    const currentProgress = progress
    currentProgress.lesson = currentLesson.lesson_id
    currentProgress.level = currentLevel
    console.log(`Updating User progress: `, JSON.stringify(currentProgress))

    updateProgress(currentProgress)
    setCurrentLessonProgress({ ...currentProgress, __typename: 'UserProgress' })
  }

  return (
    <LessonContext.Provider
      value={{
        currentLesson, //Lesson that user is currently viewing
        currentLevel, //Level that user is currently on
        currentWord, //Word that user is currently on
        currentLessonProgress, //Progress of currentLesson
        lessons, //All lessons
        userProgress, //All progress
        userDataLoading,
        lessonsLoading,
        setLesson,
        setLevel,
        setWord,
        updateUserProgress,
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

export { LessonProvider, LessonContext }
