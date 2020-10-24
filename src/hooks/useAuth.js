import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts'
import { auth, authenticateStudent, db } from '../firebase'

const AuthContext = React.createContext()

const Auth = ({ children }) => {
  const [authLoaded, setIsLoaded] = React.useState(false)
  const [user, setUser] = React.useState(auth.currentUser)
  const [username, setUsername] = React.useState(null)
  const [isEducator, setIsEducator] = React.useState(false)

  const history = useHistory()

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      if (user) {
        console.log('User signed in: ')
        setIsEducator(user.email !== null)
        //do things
      } else {
        // do other things
      }
      setIsLoaded(true)
    })
  }, [])

  const createUserWithEmailAndPassword = (email, password) => {
    // TODO: Register a new user with the specified email and password
    if (
      email.toLowerCase() === 'mark@birdhaven.us' ||
      email.toLowerCase() === 'aprilpolubiec@gmail.com'
    ) {
      return auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCred) =>
          db
            .collection('users')
            .doc(userCred.user.uid)
            .set({ email: userCred.user.email, progress: {} })
        )
        .then(() => history.push('/'))
        .catch((error) => {
          console.log(error)
          // triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
        })
    }
  }

  // Let registered users log in
  const signInWithEmailAndPassword = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed in')
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
        // triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Let registered users log in
  const signInStudent = (name, password) => {
    return authenticateStudent({ username: name, password }).then((result) => {
      console.log(result)
      const { token, error } = result.data
      if (error) {
        throw new Error(error)
      } else {
        return auth.signInWithCustomToken(token).then((u_name) => {
          setUsername(u_name)
          history.push('/')
        })
      }
    })
  }

  // Let logged in users log out
  const signOut = async () => {
    return auth
      .signOut()
      .then(() => {
        console.log('Signed out')
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const context = {
    user,
    isEducator,
    authLoaded,
    username,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInStudent,
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
