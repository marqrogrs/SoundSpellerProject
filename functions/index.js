const functions = require('firebase-functions')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const { reject } = require('lodash')
const saltRounds = 10

admin.initializeApp()
let db = admin.database()
let firestore = admin.firestore()

exports.authenticateStudent = functions.https.onCall(async (data, context) => {
  console.log('authenticating student: ', data)
  const { username, password } = data

  return db
    .ref('/students/' + username)
    .once('value')
    .then((snap) => {
      if (!snap.exists()) {
        return { error: 'Student does not exist' }
      }

      console.log('Found info for ', username)
      const hashed_pass = snap.val().p
      console.log(`Hashed password: ${hashed_pass}`)
      return bcrypt
        .compare(password, hashed_pass)
        .then((result) => {
          console.log('Bcrypt result: ', result)
          return admin.auth().createCustomToken(username)
        })
        .then((token) => {
          console.log('TOken: ', token)
          return { token }
        })
        .catch((error) => {
          return { error }
        })
    })
})

exports.createStudentAccount = functions.https.onCall((data, context) => {
  const { username, password, classroom } = data
  const educator_uid = context.auth.uid
  return bcrypt.hash(password, saltRounds, function (error, hash) {
    // Store hash in your password DB.
    if (error) {
      console.log('Could not craeted hash')
      return { error }
    }
    console.log('Created hash - adding to realtime db')
    return db
      .ref('/students/' + username)
      .set({ p: hash, educator: educator_uid })
      .then(() => {
        console.log('Created realtime db entry - adding to teacher doc')
        return firestore
          .collection('users')
          .doc(educator_uid)
          .collection('classes')
          .doc(classroom)
          .update({
            students: admin.firestore.FieldValue.arrayUnion(username),
          })
      })
      .then(() => {
        return 'success'
      })
  })
})
