import firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDfUCEk9ZO2E-zaUQc54Lf6lbN2ZJrSgP4",
  authDomain: "auth-dev-1.firebaseapp.com",
  projectId: "auth-dev-1",
  storageBucket: "auth-dev-1.appspot.com",
  messagingSenderId: "284871065551",
  appId: "1:284871065551:web:6a6e558e2b7cbdba25dcba",
  measurementId: "G-9Q7YZ092SN"
});
// eslint-disable-next-line
const perf = firebase.performance();
// eslint-disable-next-line
const analytics = firebase.analytics();
export const auth = app.auth();
export default app;
