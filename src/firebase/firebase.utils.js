import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyByJqUjcQZAfXi1POGPL9py9rHMKJVkk9c",
    authDomain: "crwn-db-84f8c.firebaseapp.com",
    databaseURL: "https://crwn-db-84f8c.firebaseio.com",
    projectId: "crwn-db-84f8c",
    storageBucket: "crwn-db-84f8c.appspot.com",
    messagingSenderId: "1058408190100",
    appId: "1:1058408190100:web:25c91e69db109a77956481",
    measurementId: "G-3LK6TL03YY"
  };

  export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.email}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase; 

