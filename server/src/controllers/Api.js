let urls = [];
let users = [
    {
        username: 'ron',
        password: '123'
    },
    {
        username: 'roi',
        password: '1234'
    },
];
const jwt = require('jsonwebtoken');
const {getDataFromApi} = require('../utilities/RestApi');
require('dotenv').config()

//DELETE
const deleteUser = (req, res) => {
    urls = urls.slice().filter((url) => url.shortenerURL !== req.params.url);
    res.send("URL Deleted!");
}


//GET 
const login = (req, res) => {
    //Authenticate User
    const username = req.body.username
    const user = {name: username}
    const accessToken = generateAccessToken(user)
    res.json({accessToken: accessToken});
}

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10s'})

}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

const getMovies = async (req, res) => {
    console.log("🚀 ~ file: Api.js ~ line 49 ~ getMovies ~ res", res)
    try {
        const resp = await getDataFromApi()
        console.log("res", resp)
        res.send(resp)
    } catch (error) {
        console.log("getMovies ~ error", error)
        res.send(res)
    }
}

const getMovie = (req, res) => {
    const getUrl = urls.filter((url) => url.shortenerURL === req.params.url);
    res.send(getUrl[0]);
}


//POST
const register = (req, res) => {
    const urlDetails = req.body;
    if (urlDetails) {
        if (urls.filter(url => url.shortenerURL === urlDetails.shortenerURL).length > 0) {
            res.send({msg: 'URL already exists', errCode: -1});
        } else {
            urls.push(urlDetails);
            res.send({msg: "URL Added successfully"});
        }
    } else {
        res.send("URL Added successfully");
    }
}





module.exports = {register, login, getMovie, getMovies, deleteUser, authenticateToken}