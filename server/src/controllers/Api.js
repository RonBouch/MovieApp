const jwt = require('jsonwebtoken');
const {getDataFromApi} = require('../utilities/RestApi');
require('dotenv').config()
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const {generateToken} = require('../middlewares/middleware');

const ErrFailed = {message: 'Auth failed'};
const ErrExists = {message: 'username exists'};

const signup = (req, res) => {
    const {username, password} = req.body;
    User.find({username}).then((users) => {
        if (users.length >= 1) return res.send(ErrExists).status(409).json(ErrExists)
        bcrypt.hash(password, 10, (error, hash) => {
            if (error) return res.status(500).json({error})

            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username,
                password: hash
            })
            user.save().then(async (result) => {
                const token = await generateToken(req.body);
                res.status(200).json({message: 'User created', token});
            }).catch(error => res.status(500).json({error}));
        });
    })
}

const login = async (req, res) => {
    const {username, password} = req.body;
    User.find({username}).then((users) => {

        if (users.length === 0) return res.send(ErrFailed).status(401).json(ErrFailed);

        const [user] = users;

        bcrypt.compare(password, user.password, async (error, result) => {
            if (error) return res.status(401).json(ErrFailed);

            if (result) {
                const token = await generateToken(user);
                return res.status(200).json({message: 'Auth successful', token})
            }
            return res.send(ErrFailed).status(401).json(ErrFailed);
        })
    })
}
const getAllUsers = (req, res) => {
    User.find().then((users) => {
        res.status(200).json({
            users
        })
    }).catch(error => {
        res.status(500).json({
            error
        })
    });
}


const getMovies = async (req, res) => {
    try {
        const resp = await getDataFromApi()
        res.send(resp)
    } catch (error) {
        console.log("getMovies ~ error", error)
        res.status(500).json({error})
    }
}


module.exports = {login, getMovies, getAllUsers, signup}