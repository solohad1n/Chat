import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBEPJ6suf0OZoSHXcy1ScNjjrgQKrIMLVY",
  authDomain: "vue--chat.firebaseapp.com",
  projectId: "vue--chat",
  storageBucket: "vue--chat.appspot.com",
  messagingSenderId: "208970783334",
  appId: "1:208970783334:web:9b03f2249e55497301aba7"
};


const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const timestamp = serverTimestamp
