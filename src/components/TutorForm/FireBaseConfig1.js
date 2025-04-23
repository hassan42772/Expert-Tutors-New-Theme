// Import the necessary Firebase modules
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfigTutor = {
    apiKey: "AIzaSyD7KeMiaERW8mHd7GGxHIK1mrynUcdDlI0",
    authDomain: "login-with-firebase-data-26192.firebaseapp.com",
    databaseURL: "https://login-with-firebase-data-26192-default-rtdb.firebaseio.com",
    projectId: "login-with-firebase-data-26192",
    storageBucket: "login-with-firebase-data-26192.appspot.com",
    messagingSenderId: "950098967049",
    appId: "1:950098967049:web:8498f280193ce061a3d6d8"
};

let appTutor;
let databaseTutor;
let storageTutor;

try {
  if (!getApps().some(app => app.name === "tutor")) {
    appTutor = initializeApp(firebaseConfigTutor, "tutor");
  } else {
    appTutor = getApp("tutor");
  }
  databaseTutor = getDatabase(appTutor);
  storageTutor = getStorage(appTutor);
} catch (error) {
  console.error("Error initializing Firebase Tutor Database:", error);
}

export { storageTutor, databaseTutor };
