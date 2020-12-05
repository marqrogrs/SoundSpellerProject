// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore' //database
import 'firebase/functions' 

const firebaseConfig = {
  apiKey: 'AIzaSyBC9FNI_d_Lse9Kw1u_1jbWUvqcHShHXZQ',
  authDomain: 'soundspeller-c5e53.firebaseapp.com',
  databaseURL: 'https://soundspeller-c5e53.firebaseio.com',
  projectId: 'soundspeller-c5e53',
  storageBucket: 'soundspeller-c5e53.appspot.com',
  messagingSenderId: '254713323790',
  appId: '1:254713323790:web:34db07de840605a21b375f',
  measurementId: 'G-CMHKZ57DDP',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

export const authenticateStudent = firebase
  .functions()
  .httpsCallable('authenticateStudent')
export const createStudentAccount = firebase
  .functions()
  .httpsCallable('createStudentAccount')
export const resetStudentPassword = firebase
  .functions()
  .httpsCallable('resetStudentPassword')
