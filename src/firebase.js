// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore'; //database
import 'firebase/functions';

const env = process.env.NODE_ENV;
const isProduction = env == 'production';

const firebaseConfig = {
  apiKey: 'AIzaSyBC9FNI_d_Lse9Kw1u_1jbWUvqcHShHXZQ',
  authDomain: 'soundspeller-c5e53.firebaseapp.com',
  databaseURL: 'https://soundspeller-c5e53.firebaseio.com',
  projectId: 'soundspeller-c5e53',
  storageBucket: 'soundspeller-c5e53.appspot.com',
  messagingSenderId: '254713323790',
  appId: '1:254713323790:web:34db07de840605a21b375f',
  measurementId: 'G-CMHKZ57DDP',
};

const devFirebaseConfig = {
  apiKey: 'AIzaSyAI6wc0BvTKxAejqKA49ppj5icSsnPAR7c',
  authDomain: 'dev-soundspeller.firebaseapp.com',
  projectId: 'dev-soundspeller',
  storageBucket: 'dev-soundspeller.appspot.com',
  messagingSenderId: '232974061126',
  appId: '1:232974061126:web:3ddf3f38ae19a8072e8447',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const devApp = firebase.initializeApp(
  devFirebaseConfig,
  'development',
);

const currentApp = isProduction ? firebase : devApp;

export const db = currentApp.firestore();

// Need to use the users collection of current env
export const usersCollection = db.collection('users');

// Otherwise, grab all static lesson data from production
export const lessonSectionsCollection = firebase
  .firestore()
  .collection('lessonSections');
export const lessonsCollection = firebase
  .firestore()
  .collection('lessons');
export const phonemesCollection = firebase
  .firestore()
  .collection('phonemes');
export const rulesCollection = firebase
  .firestore()
  .collection('rules');
export const wordsCollection = firebase
  .firestore()
  .collection('words');

export const auth = currentApp.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const authenticateStudent = currentApp
  .functions()
  .httpsCallable('authenticateStudent');
export const createStudentAccount = currentApp
  .functions()
  .httpsCallable('createStudentAccount');
export const resetStudentPassword = currentApp
  .functions()
  .httpsCallable('resetStudentPassword');
