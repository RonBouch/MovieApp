import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiPqjTBI7gdDkKA300sMpMo0GDOT-l_to",
    authDomain: "ronurlshortener.firebaseapp.com",
    databaseURL: "https://ronurlshortener-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ronurlshortener",
    storageBucket: "ronurlshortener.appspot.com",
    messagingSenderId: "446153392995",
    appId: "1:446153392995:web:7dafecc7bac1ca196ac956",
    measurementId: "G-HQKFLG49QP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getUrlsFromDB(db) {
    const urlsCol = collection(db, 'urls');
    const urlSnapshot = await getDocs(urlsCol);
    const urlList = urlSnapshot.docs.map(doc => doc.data());
    return urlList;
}