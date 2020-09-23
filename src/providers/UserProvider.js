import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'

const UserContext = React.createContext({})

export default function UserProvider({ children }) {
  const { user } = useAuth()
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
            db.collection('users').doc(user.uid).set({ email: user.email })
          }
          setUserData(userDoc.data())
        })
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
