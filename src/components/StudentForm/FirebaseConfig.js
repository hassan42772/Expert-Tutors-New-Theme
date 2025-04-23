// Import the necessary Firebase modules
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfigStudent = {
  apiKey: "AIzaSyBN1eHtrXPk6OlzIKIFkDKQUlPUn6JWzsI",
  authDomain: "database-692ce.firebaseapp.com",
  databaseURL: "https://database-692ce-default-rtdb.firebaseio.com",
  projectId: "database-692ce",
  storageBucket: "database-692ce.appspot.com",
  messagingSenderId: "471598309987",
  appId: "1:471598309987:web:1ffc5250d4924ef4ca8e56"
};

let appStudent;
let databaseStudent;
let storageStudent;

try {
  if (!getApps().some(app => app.name === "student")) {
    appStudent = initializeApp(firebaseConfigStudent, "student");
  } else {
    appStudent = getApp("student");
  }
  databaseStudent = getDatabase(appStudent);
  storageStudent = getStorage(appStudent);
} catch (error) {
  console.error("Error initializing Firebase Student Database:", error);
}

export { storageStudent, databaseStudent };
