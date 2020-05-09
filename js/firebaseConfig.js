// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Add your apiKey here",
    authDomain: "Add your authDomain here",
    databaseURL: "Add your databaseURL here",
    projectId: "Add your projectId here",
    storageBucket: "Add your storageBucket here",
    messagingSenderId: "Add your messagingSenderId here",
    appId: "Add your appId here"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
