// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const trimmedToken = token.replace("Bearer ", "");

  // json verification
  try {
    const {username} = jwt.verify(trimmedToken, process.env.JWT_PASSWORD);

    const isAdmin = await Admin.findOne({username});

    if (isAdmin) {
      next();
    } 
    else {
      res.status(403).json({ error: "Not authorized" });
    }
  }
  catch(error) {
    res.status(403).json({ error: "Not authorized" });
  }
}

module.exports = adminMiddleware;
