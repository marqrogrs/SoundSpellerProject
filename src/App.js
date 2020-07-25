import React from 'react'
import RealmApp, { useRealmApp } from './realm/RealmApp'
import RealmApolloProvider from './realm/RealmApolloProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'

const App = (props) => {
  return (
    <>
      <CssBaseline />
      <RealmApp>
        <RequireAuthentication />
      </RealmApp>
    </>
  )
}
export default App

function RequireAuthentication() {
  const app = useRealmApp()
  const user = app.user ? true : false
  if (!app) {
    return <div>Loading</div>
  }
  //TODO: just for testing - should be using user and creating AuthProvider
  const handleChange = (e) => {
    // console.log("Login=", e.target.checked)
    app.autoLogIn(e.target.checked)
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={user}
              onChange={handleChange}
              aria-label='login switch'
            />
          }
          label={user ? 'Logout' : 'Login'}
        />
      </FormGroup>
      {user ? (
        <RealmApolloProvider>
          <PrivateRoutes user={user} />
        </RealmApolloProvider>
      ) : (
        <RealmApolloProvider>
          <PublicRoutes user={user} />
        </RealmApolloProvider>
      )}
    </>
  )
}
