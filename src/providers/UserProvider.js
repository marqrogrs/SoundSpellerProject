import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'

const UserContext = React.createContext({})

export default function UserProvider({ children }) {
  const { user, isEducator } = useAuth()
  const history = useHistory()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    var unsubscribeUser
    if (user) {
      console.log(`Subscribing to ${user.uid}`)
      unsubscribeUser = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((userDoc) => {
          if (!userDoc.exists) {
            console.log('first login - creating doc!')
            db.collection('users')
              .doc(user.uid)
              .set({ email: user.email, progress: {} })
          }
          setUserData(userDoc.data())
          // console.log(userDoc.data())
        })
    } else {
      console.log('No user')
      history.push('/')
    }

    return () => {
      unsubscribeUser()
    }
  }, [user])
  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  )
}

export { UserProvider, UserContext }
