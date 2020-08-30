import React, { useState } from 'react'
import { useRealmApp } from '../realm/RealmApp'
import { useLessons } from '../hooks/useLessons'
import { useUser } from '../hooks/useUser'

const LessonContext = React.createContext({})

const LessonProvider = ({ children }) => {
  const { user } = useRealmApp()
  const { userProgress, updateProgress } = useUser(user.id)

  const [currentLesson, setCurrentLesson] = useState()
  const [currentLevel, setCurrentLevel] = useState(0)

  const { lessons } = useLessons()

  const setLesson = (lesson) => {
    setCurrentLesson(lesson)
  }

  const setLevel = (level) => {
    setCurrentLevel(level)
  }

  const updateUserProgress = () => {
    const progress = `${currentLesson}.${currentLevel}`
    updateProgress(progress)
  }

  return (
    <LessonContext.Provider
      value={{
        currentLesson,
        currentLevel,
        lessons,
        setLesson,
        setLevel,
        progress: userProgress,
        updateUserProgress,
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

export { LessonProvider, LessonContext }
