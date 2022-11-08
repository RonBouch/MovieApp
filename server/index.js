const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./src/routes/Routers.js');


// const firebaseConfig = {
//     apiKey: "AIzaSyAiPqjTBI7gdDkKA300sMpMo0GDOT-l_to",
//     authDomain: "ronurlshortener.firebaseapp.com",
//     databaseURL: "https://ronurlshortener-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "ronurlshortener",
//     storageBucket: "ronurlshortener.appspot.com",
//     messagingSenderId: "446153392995",
//     appId: "1:446153392995:web:7dafecc7bac1ca196ac956",
//     measurementId: "G-HQKFLG49QP"
// };

// const initFB = initializeApp(firebaseConfig);
// const db = getFirestore(initFB);
// getUrlsFromDB(db)

async function getUrlsFromDB(db) {
    // const urlsCol = collection(db, 'urls');
    // const urlSnapshot = await getDocs(urlsCol);
    // const urlList = urlSnapshot.docs.map(doc => doc.data());
    // return urlList;
}

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/', userRoutes);
app.get("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () =>
    console.log(`Server is listening on port: http://localhost:${port}`)
);