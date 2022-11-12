const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userRoutes = require('./src/routes/Routers.js');
const {verifyToken} = require('./src/middlewares/middleware.js');
require('dotenv').config();

const DBUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@movieapp.3furmfg.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected!');
});

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/', userRoutes);
app.get("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () =>
    console.log(`Server is listening on port: http://localhost:${port}`)
);