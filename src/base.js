import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsQROX8fELYnA1OwW8hxJCkvEAw0Xwo5U",
    authDomain: "newproject-6d1f4.firebaseapp.com",
    databaseURL: "https://newproject-6d1f4.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is named export
export {firebaseApp};

// this is default export
export default base;