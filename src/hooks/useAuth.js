import * as React from 'react'
import * as RealmWeb from 'realm-web'
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts'
import { auth } from '../firebase'

const AuthContext = React.createContext()

const Auth = ({ children }) => {
  const [user, setUser] = React.useState(auth.currentUser)

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      if (user) {
        console.log('User signed in')
        //do things
      } else {
        // do other things
      }
    })
  }, [])

  const createUserWithEmailAndPassword = (email, password) => {
    // TODO: Register a new user with the specified email and password
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log('Created new user!'))
      .catch((error) => {
        console.log(error)
        // triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Let registered users log in
  const signInWithEmailAndPassword = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed in')
      })
      .catch((error) => {
        console.log(error)
        // triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Let logged in users log out
  const signOut = async () => {
    return auth
      .signOut()
      .then(() => {
        console.log('Signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const context = {
    user,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default Auth

export const useAuth = () => {
  const auth = React.useContext(AuthContext)
  if (!auth) {
    throw new Error('You must call useAuth() inside of a <Auth />.')
  }
  return auth
}
