import * as admin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyAHYyj3TW-NfvkUVA_mtsW1D75p4U8ybpk",
  authDomain: "inacademy-e6a28.firebaseapp.com",
  projectId: "inacademy-e6a28",
  storageBucket: "inacademy-e6a28.appspot.com",
  messagingSenderId: "1084940763449",
  appId: "1:1084940763449:web:a6a8849ad216f5a9e868e8",
  measurementId: "G-LHMREL7J8Q",
};

(async () => {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig),
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      console.error("Firebase admin initialization error", error.stack);
    }
  }
})();

export default admin;
