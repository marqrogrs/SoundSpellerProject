import React from "react";
import RealmApp, { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const App = (props) => {
  return (
    <RealmApp>
      <RequireAuthentication />
    </RealmApp>
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
      <Home />
    </RealmApolloProvider>
  ) : (
    <RealmApolloProvider>
      <Landing />
    </RealmApolloProvider>
  );
}
