import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  triggerErrorAlert,
  prettyPrintErrorCode,
  triggerEmailVerificationAlert,
  triggerEmailVerificationAlert2,
  triggerResetPasswordAlert,
} from '../util/alerts';
import {
  auth,
  authenticateStudent,
  db,
  usersCollection,
} from '../firebase';

const AuthContext = React.createContext();

const Auth = ({ children }) => {
  const [authLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState(auth.currentUser);
  const [isEducator, setIsEducator] = React.useState(false);
  const [firstSignIn, setFirstSignIn] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log('User signed in: ', user.metadata)
        setIsEducator(user.email !== null);
        //do things
        const firstSignIn =
          user.metadata.creationTime === user.metadata.lastSignInTime;
        if (user.email !== null && !user.emailVerified) {
          if (firstSignIn) {
            console.log('First sign in!');
            auth.currentUser
              .sendEmailVerification()
              .then(() => triggerEmailVerificationAlert(user.email))
              .then(signOut);
          } else {
            console.log('nope!');
            triggerEmailVerificationAlert2(user.email).then(signOut);
          }
          return;
        }
      } else {
        // do other things
      }
      setUser(user);
      setIsLoaded(true);
    });
  }, []);

  const createUserWithEmailAndPassword = (email, password) => {
    // TODO: Register a new user with the specified email and password
    // if (
    //   email.toLowerCase() === 'mark@birdhaven.us' ||
    //   email.toLowerCase() === 'aprilpolubiec@gmail.com'
    // ) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCred) =>
        usersCollection
          .doc(userCred.user.uid)
          .set({ email: userCred.user.email, progress: {} }),
      )
      .catch((error) => {
        console.log(error);
        triggerErrorAlert(error.message || error);
      });
    // }
  };

  // Let registered users log in
  const signInWithEmailAndPassword = (email, password) => {
    // NOTE: had to wrap this in try-catch to catch errors from passing null/undefined to signInWithEmailAndPassword. Feels odd that it wouldn't just get caught in the .catch()... maybe we should investigate this later to see if something is wrong here?
    try {
      return auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Signed in');
          history.push('/');
        })
        .catch((error) => {
          console.log(error);
          triggerErrorAlert(error.message || error);
        });
    } catch (error) {
      triggerErrorAlert(error.message || error);
    }
  };

  // Let registered users log in
  const signInStudent = (name, password) => {
    return authenticateStudent({ username: name, password }).then(
      (result) => {
        console.log(result);
        const { token, error } = result.data;
        if (error) {
          triggerErrorAlert(error.message || error);
        } else {
          return auth.signInWithCustomToken(token).then((u_name) => {
            history.push('/');
          });
        }
      },
    );
  };

  // Let logged in users log out
  const signOut = async () => {
    return auth
      .signOut()
      .then(() => {
        console.log('Signed out');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetPassword = () => {
    triggerResetPasswordAlert();
  };

  const context = {
    user,
    isEducator,
    authLoaded,
    resetPassword,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInStudent,
    signOut,
  };
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

export const useAuth = () => {
  const auth = React.useContext(AuthContext);
  if (!auth) {
    throw new Error('You must call useAuth() inside of a <Auth />.');
  }
  return auth;
};
