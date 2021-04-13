import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../providers/UserProvider';
import { db, auth } from '../firebase';
import StandardLessonProgress from './StandardLessonProgress';
import CustomLessonProgress from './CustomLessonProgress';

export default function ProgressList({ student }) {
  const { userData } = useContext(UserContext);
  const [userProgress, setUserProgress] = useState(null);

  useEffect(() => {
    var unsubscribeStudent = () => {};
    if (student) {
      unsubscribeStudent = db
        .collection('users')
        .where('username', '==', student)
        .where('educator', '==', auth.currentUser.uid)
        .onSnapshot((snap) => {
          // console.log('data: ', snap.docs[0].data())
          setUserProgress(snap.docs[0].data().progress);
        });
    } else {
      if (userData && userData.progress) {
        setUserProgress(userData.progress);
      }
    }
    return () => {
      unsubscribeStudent();
    };
  }, [student, userData]);

  return (
    <>
      <StandardLessonProgress
        userProgress={userProgress}
        student={student}
      />
      <CustomLessonProgress
        userProgress={userProgress}
        student={student}
      />
    </>
  );
}
