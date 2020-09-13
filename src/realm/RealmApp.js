import * as React from 'react'
import * as RealmWeb from 'realm-web'
import { triggerErrorAlert, prettyPrintErrorCode } from '../util/alerts'

const REALM_APP_ID = 'soundspeller-ayydw'
const app = new RealmWeb.App({ id: REALM_APP_ID })

const RealmAppContext = React.createContext()

const RealmApp = ({ children }) => {
  // Keep track of the current user in local state
  const appRef = React.useRef(app)
  const [user, setUser] = React.useState(app.currentUser)
  React.useEffect(() => {
    setUser(app.currentUser)
    if (app.currentUser) {
      const loginData = localStorage.getItem(`login.${app.currentUser.id}`)
      const { lastLogin } = JSON.parse(loginData)
      if (Date.now() - lastLogin >= 30 * 60000) {
        console.log('need to refresh!')
        //30 minutes since login, reauth
        app.currentUser.refreshAccessToken()
      }
    }
  }, [appRef.current.currentUser])

  // const autoLogIn = async (login) => {
  //   // console.log(app)
  //   if (login) {
  //     console.log('Logging in')
  //     await app.logIn(RealmWeb.Credentials.anonymous())
  //   } else {
  //     console.log('Logging out')
  //     await app.currentUser.logOut()
  //   }
  //   setUser(app.currentUser)
  // }
  // Let new users register an account
  const registerUser = (email, password) => {
    // TODO: Register a new user with the specified email and password
    return app.emailPasswordAuth
      .registerUser(email, password)
      .then(() => signIn(email, password))
      .catch((error) => {
        triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Let registered users log in
  const signIn = (email, password) => {
    const credentials = RealmWeb.Credentials.emailPassword(email, password)
    return app
      .logIn(credentials)
      .then(() => {
        const loginData = { user: app.currentUser.id, lastLogin: Date.now() }
        return localStorage.setItem(
          `login.${app.currentUser.id}`,
          JSON.stringify(loginData)
        )
      })
      .then(() => {
        setUser(app.currentUser)
      })
      .catch((error) => {
        triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Let logged in users log out
  const signOut = async () => {
    return app.currentUser
      .logOut()
      .then(() => {
        console.log('Logged out')
        setUser(app.currentUser)
      })
      .catch((error) => {
        triggerErrorAlert(prettyPrintErrorCode(error.errorCode))
      })
  }

  // Provide the current user and authentication methods to the wrapped tree
  const context = {
    id: REALM_APP_ID,
    user,
    signIn,
    signOut,
    registerUser,
    // autoLogIn,
  }
  return (
    <RealmAppContext.Provider value={context}>
      {children}
    </RealmAppContext.Provider>
  )
}

export default RealmApp

export const useRealmApp = () => {
  const app = React.useContext(RealmAppContext)
  if (!app) {
    throw new Error('You must call useRealmApp() inside of a <RealmApp />.')
  }
  return app
}
