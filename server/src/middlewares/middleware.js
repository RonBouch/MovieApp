const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        if (!req.body.token) throw new Error("");
        const user = jwt.verify(req.body.token, process.env.JWT_KEY)
        if (user.username && user.password) {
            req.body = user
            return next();
        }
        return res.status(401).json({error: 'Auth failed'})
    } catch (err) {
        return res.status(401).json({error: 'Auth failed'})
    }
}

const generateToken = async (user) => {
    const token = jwt.sign({id: user._id, username: user.username, },
        process.env.JWT_KEY, {expiresIn: "1H"});
    return token;
}


module.exports = {generateToken, verifyToken}