const {User} = require("../db/index");
const bcrypt = require("bcrypt");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;    

    const result = await User.findOne({username});

    try {
        const isValidPassword = await bcrypt.compare(password,result.password);
        
        if(isValidPassword) {
            next();
        }
        else {
            res.status(403).json({error: "Not authorized"});
        }        
    }
    catch(error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = userMiddleware;