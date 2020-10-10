import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'
import { createStudentAccount } from '../firebase'

const UserContext = React.createContext({})

export default function UserProvider({ children }) {
  const { user, authLoaded } = useAuth()
  const history = useHistory()
  const [userData, setUserData] = useState(null)
  const [classrooms, setClassrooms] = useState(null)
  const [userDataLoaded, setUserDataLoaded] = useState(false)

  useEffect(() => {
    if (authLoaded && user) {
      const isEducator = user.email !== null
      console.log(isEducator)
      const userDoc = isEducator
        ? db.collection('users').doc(user.uid)
        : db.collection('users').where('username', '==', user.uid)
      var unsubscribeUser = () => {}
      var unsubscribeClasses = () => {}
      if (user) {
        console.log(`Subscribing to ${user.uid}`)
        unsubscribeUser = userDoc.onSnapshot((snap) => {
          const data = isEducator ? snap.data() : snap.docs[0].data()
          setUserData(data)
        })
        if (isEducator) {
          unsubscribeClasses = userDoc
            .collection('classes')
            .onSnapshot((querySnap) => {
              const classroomData = querySnap.docs.map((doc) => ({
                id: doc.id,
                students: doc.data().students,
              }))

              setClassrooms(classroomData)
            })
        }
      } else {
        console.log('No user')
        // history.push('/')
      }
      setUserDataLoaded(true)
      return () => {
        unsubscribeUser()
        unsubscribeClasses()
      }
    }
  }, [user, authLoaded])

  const addNewStudent = (student) => {
    return createStudentAccount(student)
  }
  return (
    <UserContext.Provider value={{ userData, addNewStudent, classrooms }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
