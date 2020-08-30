import React, { useState } from 'react'
import { useRealmApp } from '../realm/RealmApp'
import { useLessons } from '../hooks/useLessons'
import { useUser } from '../hooks/useUser'

const LessonContext = React.createContext({})

const LessonProvider = ({ children }) => {
  const { user } = useRealmApp()
  const { userProgress } = useUser(user.id)

  const [currentLesson, setCurrentLesson] = useState()
  const [currentLevel, setCurrentLevel] = useState(0)

  const { lessons } = useLessons()

  const setLesson = (lesson) => {
    setCurrentLesson(lesson)
  }
  const setLevel = (level) => {
    setCurrentLevel(level)
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
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

export { LessonProvider, LessonContext }
