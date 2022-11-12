const express = require('express');
const {getMovies, login, signup, getAllUsers} = require('../controllers/Api.js');
const {verifyToken} = require('../middlewares/middleware.js');
const router = express.Router();

//Get
router.get("/getMovies", getMovies);
router.get("/getAllUsers", getAllUsers);

//POST
router.post("/signup", verifyToken, signup);
router.post("/login", verifyToken, login);

module.exports = router
