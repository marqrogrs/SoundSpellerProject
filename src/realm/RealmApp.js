import * as React from "react";
import * as RealmWeb from "realm-web";

const REALM_APP_ID = "soundspeller-ayydw";
const app = new RealmWeb.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext();

const RealmApp = ({ children }) => {
  // Keep track of the current user in local state
  const appRef = React.useRef(app);
  const [user, setUser] = React.useState(app.currentUser);
  React.useEffect(() => {
    setUser(app.currentUser);
  }, [appRef.current.currentUser]);

  const autoLogIn = async (login) => {
    // console.log(app)
    if (login) {
      console.log("Logging in");
      await app.logIn(RealmWeb.Credentials.anonymous());
    } else {
      console.log("Logging out");
      await app.currentUser.logOut();
    }
    setUser(app.currentUser);
  };
  // Let new users register an account
  const registerUser = async (email, password) => {
    // TODO: Register a new user with the specified email and password
    return await app.auth.emailPassword.registerUser(email, password);
  };

  // Let registered users log in
  const logIn = async (email, password) => {
    // TODO: Log in with the specified email and password
    const credentials = RealmWeb.Credentials.emailPassword(email, password);
    await app.logIn(credentials);
    setUser(app.currentUser);
  };

  // Let logged in users log out
  const logOut = async () => {
    // TODO: Log the current user out
    await app.logOut();
    setUser(app.currentUser);
  };

  // Provide the current user and authentication methods to the wrapped tree
  const context = {
    id: REALM_APP_ID,
    user,
    logIn,
    logOut,
    registerUser,
    autoLogIn,
  };
  return (
    <RealmAppContext.Provider value={context}>
      {children}
    </RealmAppContext.Provider>
  );
};

export default RealmApp;

export const useRealmApp = () => {
  const app = React.useContext(RealmAppContext);
  if (!app) {
    throw new Error("You must call useRealmApp() inside of a <RealmApp />.");
  }
  return app;
};
