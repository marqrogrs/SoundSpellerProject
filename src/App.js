import React, { useState } from "react";
import RealmApp, { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = (props) => {
  return (
    <>
      <CssBaseline />
      <RealmApp>
        <RequireAuthentication />
      </RealmApp>
    </>
  );
};
export default App;

function RequireAuthentication() {
  const app = useRealmApp();
  if (!app) {
    return <div>Loading</div>;
  }
  //TODO: just for testing - should be using user and creating AuthProvider
  const handleChange = (e) => {
    // console.log("Login=", e.target.checked)
    app.autoLogIn(e.target.checked);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={app.user}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={app.user ? "Logout" : "Login"}
        />
      </FormGroup>
      {app.user ? (
        <RealmApolloProvider>
          <PrivateRoutes user={app.user}/>
        </RealmApolloProvider>
      ) : (
        <RealmApolloProvider>
          <PublicRoutes user={app.user}/>
        </RealmApolloProvider>
      )}
    </>
  );
}
