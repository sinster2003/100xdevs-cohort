const express = require("express");

const app = express();

// create a middleware for checking the age
const isOldEnough = (request, response, next) => {
    if(request.query.age >= 14) {
        next();
    } else {
        return response.status(400).json({error: "You are not old enough to take this ride"});
    }
};

app.get("/api/ride1", isOldEnough, (request, response) => {
    response.status(200).json({message: "Enjoy Your Ride1"});
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server created running at port ",PORT);
});