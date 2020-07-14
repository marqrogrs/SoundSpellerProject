import React from "react";
import RealmApp, { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";

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
  return app.user ? (
    <RealmApolloProvider>
      <AppBar user={app.user} />
      <Home />
    </RealmApolloProvider>
  ) : (
    <RealmApolloProvider>
      <AppBar user={app.user} />
      <Landing />
    </RealmApolloProvider>
  );
}
