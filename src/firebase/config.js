import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHyOUoJojSYRiXa469livs1yOynghfluU',
  //authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  //databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'myfitnesspal-react',
  //storageBucket: 'your-project-id-1234.appspot.com',
  //messagingSenderId: '12345-insert-yourse',
  appId: '1:810116928377:ios:166c3e978bd3a9ddd515a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };