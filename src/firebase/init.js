import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBQg3Tv6zOkJD0LZZuDH3tSpPCRuxRhdMs',
  authDomain: 'vue-firebase-ninja-chat.firebaseapp.com',
  databaseURL: 'https://vue-firebase-ninja-chat.firebaseio.com',
  projectId: 'vue-firebase-ninja-chat',
  storageBucket: 'vue-firebase-ninja-chat.appspot.com',
  messagingSenderId: '103515036258'
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();