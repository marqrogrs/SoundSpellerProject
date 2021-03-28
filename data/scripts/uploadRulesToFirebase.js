const firebase = require('firebase/app')
require('firebase/firestore')

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

const db = firebase.firestore()

const { rules } = require('./data.js')
console.log(rules.length)

rules.forEach((rule) => {
  db.collection('rules')
    .doc(rule.rule_id)
    .set(rule)
    .catch((err) => {
      console.log("Failed to add ", rule.rule_id)
      console.error(err)
    })
})
