// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AddYourApiKeyHere",
    authDomain: "AddYourauthDomainHere",
    databaseURL: "AddYourdatabaseURLHere",
    projectId: "AddYourprojectIdHere",
    storageBucket: "AddYourstorageBucketHere",
    messagingSenderId: "AddYourmessagingSenderIdHere",
    appId: "AddYourApiIdHere"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
