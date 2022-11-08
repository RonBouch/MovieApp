const express = require('express');
const {getMovies, login, deleteUser, getMovie, register, authenticateToken} = require('../controllers/Api.js')

const router = express.Router();
//Get
router.get("/getMovies", getMovies);
router.post("/login", login);
router.post("/authenticateToken", authenticateToken);
// router.get("/getMovie/:url", getMovie);

//POST
router.post("/register", register);

//DELETE
// router.delete("/deleteUser/:url", deleteUser);

module.exports = router
