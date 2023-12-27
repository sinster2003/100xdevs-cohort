const jwt = require("jsonwebtoken");
const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const trimmedToken = token.replace("Bearer ", "");

    try {
        const {username} = jwt.verify(trimmedToken, process.env.JWT_PASSWORD);

        const isUser = await User.findOne({username});
        
        if(isUser) {
            next();
        }
        else {
            res.status(403).json({error: "Not authorized"});
        }
    }
    catch(error) {
        res.status(403).json({error: "Not authorized"});
    }
}

module.exports = userMiddleware;