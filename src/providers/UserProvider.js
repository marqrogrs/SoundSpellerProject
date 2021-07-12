import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usersCollection } from '../firebase';
import { useHistory } from 'react-router-dom';
import { createStudentAccount } from '../firebase';
var _ = require('lodash');

const UserContext = React.createContext({});

export default function UserProvider({ children }) {
  const { user, authLoaded } = useAuth();
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  const [studyWords, setStudyWords] = useState(null);

  const [classrooms, setClassrooms] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  useEffect(() => {
    if (authLoaded && user) {
      const isEducator = user.email !== null;
      console.log(isEducator);
      const userDoc = isEducator
        ? usersCollection.doc(user.uid)
        : usersCollection.where('username', '==', user.uid);
      var unsubscribeUser = () => {};
      var unsubscribeClasses = () => {};
      if (user) {
        console.log(`Subscribing to ${user.uid}`);
        unsubscribeUser = userDoc.onSnapshot((snap) => {
          setUserDataLoaded(false);
          const data = isEducator ? snap.data() : snap.docs[0].data();
          setUserData(data);

          //Calculate total score
          const total_score = Object.values(data.progress).reduce(
            (acc, lesson) => {
              var high_score = 0;
              Object.values(lesson).forEach((level) => {
                if (level.high_score > level.score) {
                  high_score += level.high_score;
                } else {
                  high_score += level.score;
                }
              });
              return (acc += high_score);
            },
            0,
          );
          setTotalScore(total_score);

          //Calculate # completed
          const lessons_completed = Object.values(
            data.progress,
          ).reduce((acc, section) => {
            var lessons_completed = 0;
            Object.values(section).forEach((id) => {
              Object.values(id).forEach((level) => {
                if (level.completed) lessons_completed++;
              });
            });
            return (acc += lessons_completed);
          }, 0);
          setLessonsCompleted(lessons_completed);

          //Get study words
          const { progress } = data;
          var study_words = [];
          Object.entries(progress).forEach(([lesson_id, levels]) => {
            Object.entries(levels).forEach(([level_id, level]) => {
              var level_study_words = level.study_words;
              if (!_.isEmpty(level_study_words)) {
                Object.entries(level_study_words).forEach(
                  ([w, w_data]) =>
                    study_words.push({
                      lesson: lesson_id,
                      level: level_id,
                      word: w,
                      attempts_needed: w_data.correct_attempts_needed,
                    }),
                );
              }
            });
          });

          setStudyWords(study_words);
          setUserDataLoaded(true);
        });
        if (isEducator) {
          unsubscribeClasses = userDoc
            .collection('classes')
            .onSnapshot((querySnap) => {
              const classroomData = querySnap.docs.map((doc) => ({
                id: doc.id,
                students: doc.data().students,
              }));

              setClassrooms(classroomData);
            });
        }
      } else {
        console.log('No user');
        // history.push('/')
      }
      return () => {
        unsubscribeUser();
        unsubscribeClasses();
      };
    }
  }, [user, authLoaded]);

  const addNewStudent = (student) => {
    return createStudentAccount(student);
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        userDataLoaded,
        addNewStudent,
        classrooms,
        totalScore,
        lessonsCompleted,
        studyWords,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
