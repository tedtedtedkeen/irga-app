import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function useFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyC0QibS3wcvDSNh-TVKudj1riOsK0TlpBE",
    authDomain: "okay-data.firebaseapp.com",
    databaseURL: "https://okay-data-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "okay-data",
    storageBucket: "okay-data.appspot.com",
    messagingSenderId: "272417860997",
    appId: "1:272417860997:web:2dcb4070c7b881c49d68ec",
  };
  
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export { useFirebase };