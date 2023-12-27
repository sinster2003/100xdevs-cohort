const bcrypt = require("bcrypt");
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const { username, password } = req.headers;

    const isAdmin = await Admin.findOne({username});

    if(isAdmin) {
        const isPasswordSame = await bcrypt.compare(password, isAdmin.password);
        if(isPasswordSame) {
            next();
        }
        else {
            res.status(403).json({error: "Not authorized"});
        }
    }
    else {
        res.status(404).json({error: "Admin Not Found"});
    }
}

module.exports = adminMiddleware;