const functions = require('firebase-functions')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const saltRounds = 10

admin.initializeApp()
let db = admin.database()
let firestore = admin.firestore()

exports.authenticateStudent = functions.https.onCall((data, context) => {
  console.log('authenticating student')
  const { username, password } = data
  return db
    .ref('/students/' + username)
    .once('value')
    .then((snap) => {
      const hashed_pass = snap.val()
      console.log(`Hashed password: ${hashed_pass}`)
      bcrypt.compare(password, hashed_pass, function (error, result) {
        if (error) {
          console.log('Pass failed check')
          return { error }
        } else {
          console.log('Passed check - creating custom token')
          return admin
            .auth()
            .createCustomToken(username)
            .then((token) => token)
            .catch((error) => {
              return { error }
            })
        }
      })
    })
})

exports.createStudentAccount = functions.https.onCall((data, context) => {
  const { username, password } = data
  const educator_uid = context.auth.uid
  bcrypt.hash(password, saltRounds, function (error, hash) {
    // Store hash in your password DB.
    if (error) {
      console.log('Could not craeted hash')
      return { error }
    }
    console.log('Created hash - adding to realtime db')
    return db
      .ref('/students/' + username)
      .set({ p: hash })
      .then(() => {
        console.log('Created realtime db entry - adding to teacher doc')
        return firestore
          .collection('users')
          .doc(educator_uid)
          .update({
            students: admin.firestore.FieldValue.arrayUnion(username),
          })
      })
      .then(() => {
        return 'success'
      })
  })
})
