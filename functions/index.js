const functions = require('firebase-functions')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
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

//TODO: need to validate that no other student accounts match this username.
exports.createStudentAccount = functions.https.onCall((data, context) => {
  if (context.auth.uid) {
    const { username, password, classroom } = data
    const educator_uid = context.auth.uid
    return bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        return db
          .ref('/students/' + username)
          .set({ p: hash, educator: educator_uid })
      })
      .then(() => {
        console.log('Created realtime db entry - creating student user doc')
        return firestore
          .collection('users')
          .doc(username)
          .set({ username, educator: educator_uid, classroom, progress: {} })
      })
      .then(() => {
        console.log('Created student db entry - adding to teacher doc')
        return firestore
          .collection('users')
          .doc(educator_uid)
          .collection('classes')
          .doc(classroom)
          .set(
            {
              students: admin.firestore.FieldValue.arrayUnion(username),
            },
            { merge: true }
          )
      })
      .then(() => {
        return 'success'
      })
      .catch((error) => {
        return { error }
      })
  }
})

exports.resetStudentPassword = functions.https.onCall((data, context) => {
  if (context.auth.uid) {
    const { username, password } = data
    return bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        return db.ref('/students/' + username).update({ p: hash })
      })
      .then(() => {
        return 'success'
      })
      .catch((error) => {
        return { error }
      })
  }
})
