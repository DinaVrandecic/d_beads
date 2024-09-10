import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVX0Zv90GJs2s-udvDIfIACcjyvIhBszw",
  authDomain: "d-beads.firebaseapp.com",
  projectId: "d-beads",
  storageBucket: "d-beads.appspot.com",
  messagingSenderId: "959794573514",
  appId: "1:959794573514:web:6f988d4b4d69cdec1a8433",
  measurementId: "G-DWZM5BX6VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics, storage };
