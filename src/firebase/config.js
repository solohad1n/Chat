import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBEPJ6suf0OZoSHXcy1ScNjjrgQKrIMLVY",
  authDomain: "vue--chat.firebaseapp.com",
  projectId: "vue--chat",
  storageBucket: "vue--chat.appspot.com",
  messagingSenderId: "208970783334",
  appId: "1:208970783334:web:9b03f2249e55497301aba7"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage()

export { firestore, timestamp, auth, storage }
