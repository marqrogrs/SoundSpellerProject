import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '../hooks/useAuth'

import { db } from '../firebase'
import { UserContext } from './UserProvider'
import { getLessonSubsection } from '../util/functions'
import { LEVELS } from '../util/constants'

const LessonContext = React.createContext({})

const LessonProvider = ({ children }) => {
  const [lessonsLoading, setLessonsLoading] = useState(true)
  const [lessons, setLessons] = useState([])
  const { userData } = useContext(UserContext)
  const { user } = useAuth()

  const [currentLesson, setCurrentLesson] = useState()
  const [currentLessonProgress, setCurrentLessonProgress] = useState()
  const [currentLessonLevel, setCurrentLessonLevel] = useState()

  const setLesson = ({ lesson_id }) => {
    const selectedLesson = lessons.filter((lesson) => {
      return lesson.lesson_id === lesson_id
    })[0]

    const initProgress = {
      0: {
        score: 0,
        completed_words: 0,
      },
      1: {
        score: 0,
        completed_words: 0,
      },
      2: {
        score: 0,
        completed_words: 0,
      },
      3: {
        score: 0,
        completed_words: 0,
      },
    }
    const { lesson_section } = selectedLesson
    const lesson_subsection = getLessonSubsection(selectedLesson)
    const currentLessonProgressObj =
      userData.progress[lesson_section] &&
      userData.progress[lesson_section][lesson_subsection]
        ? userData.progress[lesson_section][lesson_subsection]
        : initProgress
    console.log(
      'Setting current lesson to: ',
      selectedLesson,
      currentLessonProgressObj
    )
    setCurrentLesson({
      lesson: selectedLesson,
      level: 0,
      progress: currentLessonProgressObj,
    })
    setCurrentLessonProgress(currentLessonProgressObj)
    setCurrentLessonLevel(0)
  }

  const updateCurrentLesson = ({ level, progress }) => {
    var updatedLesson = currentLesson
    if (level !== null) {
      updatedLesson.level = level
      setCurrentLessonLevel(level)
    }

    if (progress) {
      updatedLesson.progress = progress
      setCurrentLessonProgress(progress)
    }

    setCurrentLesson(updatedLesson)
  }

  const setLevel = (level) => {
    // setCurrentLevel(level)
    updateCurrentLesson({ level })
  }

  const setProgress = (completed_words) => {
    var { progress, level } = currentLesson
    progress[level].completed_words = completed_words
    updateCurrentLesson({ progress })
  }

  const saveProgress = () => {
    console.log('Saving to: ', user)
    var { progress } = currentLesson
    return db
      .collection('users')
      .doc(user.uid)
      .update({ [`progress.${currentLesson.lesson.lesson_id}`]: progress })
  }

  const updateScore = (word, isCorrect) => {
    console.log('updating score')
    var { progress, level } = currentLesson
    const currentScore = progress[level].score
    const newScore = isCorrect ? (level + 1) * 5 + currentScore : currentScore
    progress[level].score = newScore
    updateCurrentLesson({ progress })
  }

  useEffect(() => {
    if (userData) {
      // console.log('Getting lessons')
      db.collection('lessons')
        .get()
        .then((lessonDocs) => {
          const lessonData = lessonDocs.docs.map((doc) => doc.data())
          setLessons(lessonData)
          setLessonsLoading(false)
        })
    }
  }, [userData])

  return (
    <LessonContext.Provider
      value={{
        lessonsLoading,
        currentLesson, //Lesson that user is currently viewing
        currentLessonProgress,
        currentLessonLevel,
        lessons, //All lessons
        setLesson,
        setLevel,
        setProgress,
        saveProgress,
        updateScore,
      }}
    >
      {children}
    </LessonContext.Provider>
  )
}

export { LessonProvider, LessonContext }
