import './App.css'
import React from 'react'
import RealmApp, { useRealmApp } from './realm/RealmApp'
import RealmApolloProvider from './realm/RealmApolloProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fbfffc',
      main: '#c8e6c9',
      dark: '#97b498',
      contrastText: '#000',
    },
    secondary: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      contrastText: '#fff',
    },
  },
})
const App = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RealmApp>
          <RequireAuthentication />
        </RealmApp>
      </ThemeProvider>
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

  return (
    <>
      <RealmApolloProvider>
        {user ? <PrivateRoutes user={user} /> : <PublicRoutes user={user} />}
      </RealmApolloProvider>
    </>
  )
}
